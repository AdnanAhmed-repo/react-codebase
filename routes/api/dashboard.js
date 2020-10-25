const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Email = require("../../models/Email");
const Url = require("../../models/Url");
const Device = require("../../models/Device");
const axios = require("axios");
const FormData = require('form-data');
const { encodeBase64 } = require("bcryptjs");

// @route GET api/profile
//desc Profile Route
// @access Public
router.post("/risk-score", async (req, res) => {
    const { userId } = req.body;
    // const vtKey = process.env.VIRUSTOTAL_APIKEY

	try {
		
		// verifying validity of provided userId
		console.log("INSIDE BACKEND....", userId)
		let user = await User.findById(userId);
		

		if (!user) {
			return res.json({
				success: false,
				message: "Invalid User",
			});
        }
        

        let date = new Date()
        let day = date.getDate()

        if(user.lastActive===day){

            console.log("===same day===")
            
		    return res.status(200).json({ success: true, risk:user.riskScore});
        
        } else {
         
            user.lastActive = day;
            let userUrls = await Url.find({ user: userId });
            let userEmails = await Email.find({ user: userId });
            let emailRisk = 100
            
            const [ips, urls] = separator(userUrls);

            const urlRisk = await urlScanner(urls);
            const ipRisk = await ipScanner(ips);
            
            if(userEmails.length>0){
                emailRisk = await emailScanner(userEmails);
            }

            user.riskScore = Math.floor((ipRisk + urlRisk + emailRisk)/3)
            await user.save()
        }
		// collecting user's allconfig details and sending
		// let userDevices = await Device.find({ user: userId });
        
		res.status(200).json({ success: true, risk:user.riskScore});
	} catch (error) {
		console.log(error.response);
		res.status(500).send("Some error occurred");
	}
});

module.exports = router;

const separator =(arr)=>{
    const ips = []
    const urls = []
    for(let i=0;i<arr.length;i++){
        let data = arr[i].url.replace(/\./g, "")
        if (isNaN(data)){
            urls.push(arr[i].url)
        } else {
            ips.push(arr[i].url)
        }
    }
    return [ips, urls]
}

// ips scanner
const ipScanner = async (ips)=>{
    let totalHarm = 0
    for(let i=0;i<ips.length;i++){
        let tempId = await axios({
            method: 'get', 
            url:`https://www.virustotal.com/api/v3/ip_addresses/${ips[i]}`,  
            headers:{
                'x-apikey':process.env.VIRUSTOTAL_APIKEY
            }
        })
        let {malicious, suspicious, timeout, undetected} = tempId.data.data.attributes.last_analysis_stats
        totalHarm = totalHarm + malicious*10 + suspicious*10 + timeout*5 + undetected*5
        // console.log("ipSCANNED_++_++_+_+_+_",tempId.data.data.attributes.last_analysis_stats)
    }
    if(ips.length>0){
        totalHarm =80 - Math.ceil(totalHarm/ips.length)
    } else {
        totalHarm=100
    }
    if(totalHarm>0){
        return totalHarm
    }
    return 0
}

// emails scanner
const emailScanner = async(emails)=>{
    try
    {
        let usernames = 'usernames='
        if(emails.length===1){
            usernames = 'username='
        }
        let totalHarm = 0
        let url = 'https://api.enzoic.com/exposures?'
        for(let i = 0; i < emails.length; i++){
            url = url + usernames + emails[i].email + '&'
        }
        url = url.slice(0, -1)
        // console.log("COMPARE------", url)
        const exposures = await axios({  
            method: 'get',
            url: url,
            headers: { 
                'Authorization': 'Basic MDdkZDFjOTgzZmFjNDE3OThkYjc5MzlmYmM5ZTMzM2U6cEVYcFkzcypWWGgtbiZjc1I/ejVWdyRwLXk1Vy15aHk='
            } 
        })
        if(emails.length>1){
            for(let i=0 ; i < exposures.data.length;i++){
                totalHarm = totalHarm + (exposures.data[i].count)*5
            }
        } else {
            totalHarm = totalHarm + (exposures.data.count)*5
        }
        
        // console.log('EMAIL EXPOSURE::AND HARM::', exposures.data, totalHarm)
        if(emails.length>0){
            totalHarm =80 - Math.ceil(totalHarm/emails.length)
        } else {
            totalHarm=100
        }
        
        // totalHarm = 80 - Math.ceil(totalHarm/emails.length)
        if(totalHarm>0){
            return totalHarm
        }
        return 0
    } catch(err) {
        console.log("error in scanning emails__", err.message)
    }
}

//urls scanner
const urlScanner = async(urls)=>{
    try{
        let totalHarm = 0
        for(let i=0;i<urls.length;i++){
            let bodyFormData = new FormData();
            bodyFormData.append('url', urls[i]);
            let tempId = await axios({
                method:'post',
                url:'https://www.virustotal.com/api/v3/urls', 
                data: bodyFormData,
                headers:{
                    'x-apikey':process.env.VIRUSTOTAL_APIKEY,
                    ...bodyFormData.getHeaders()
                }
            })

            // console.log("urlSCANNED_++_++_+_+_+_", tempId.data)
            let id = tempId.data.data.id
            id = id.split('-')[1]

            let info = await axios({
                method:'get',
                url: `https://www.virustotal.com/api/v3/urls/${id}`,
                headers:{
                    'x-apikey':process.env.VIRUSTOTAL_APIKEY,
                }
            })
            let {malicious, suspicious, timeout, undetected} = info.data.data.attributes.last_analysis_stats
            totalHarm = totalHarm + malicious*10 + suspicious*10 + timeout*5 + undetected*5
            // console.log("urlSCANNED_++_++_+_+_+_",info.data.data.attributes.last_analysis_stats)
        }
        if(urls.length>0){
            totalHarm =80 - Math.ceil(totalHarm/urls.length)
        } else {
            totalHarm=100
        }
        // totalHarm =80 - Math.ceil(totalHarm/urls.length)
        if(totalHarm>0){
            return totalHarm
        }
        return 0
    } catch(err){
        console.log("error in scanning urls....___",err)
    }
    
}

