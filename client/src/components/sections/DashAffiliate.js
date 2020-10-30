import React from 'react'
import './DashProfile.css'


function DashAffiliate() {
    return (

        <div className="myprofile">
            <h4 className="title">Our Recommended Security Solutions For 2020:</h4>
            
        

    <div className="section2">
        <div className="last_pass sub_sectionn">
         <h1><img src="https://blog.lastpass.com/wp-content/uploads/sites/20/2020/04/Blog-14-5-900x300.png" height="700"></img></h1>
         
         <button onClick={event =>  window.location="http://stackoverflow.com"} style={{ color: 'red' }}className="button">Subscribe</button>
         
         

        </div>
        <div className="nord_vpn sub_sectionn">
        <h1><img src="https://vpnparadise.com/wp-content/uploads/2020/02/nordvpn-logotipo-1.png" width="600"></img></h1>
        <button onClick={event =>  window.location="http://stackoverflow.com"} className="button">Subscribe</button>

        </div>
        
        
        <div className="avast sub_sectionn">
        <h1><img src="https://i1.wp.com/securityaffairs.co/wordpress/wp-content/uploads/2020/03/avast-logo.png?fit=780%2C328&ssl=1"></img></h1>
        <button onClick={event =>  window.location="http://stackoverflow.com"} style={{ color: 'orange' }} className="button">Subscribe</button>

        </div>
    </div>
    <div className="section2">
        <div className="lifelock sub_sectionn">
        <h1><img  src="https://www.nortonlifelock.com/content/dam/nortonlifelock/global/images/non-product/logos/logo_nortonlifelock_horizontal.jpg"></img></h1>
        <button onClick={event =>  window.location="http://stackoverflow.com"} style={{ color: 'yellow' }} className="button">Subscribe</button>

        </div>
        <div className="trezor sub_sectionn">
        <h1><img src="https://lh3.googleusercontent.com/proxy/J64jUDDGoeT-Rk0XVQlYWY7ri4sXBGJHt6DE9v7PHtCJu7Xu0xCAJmTgY43i-mYlv0DfHdiu_Yp4v7wZwmwou1rE0N4dY8_rjXIr6tQqMV3C"></img></h1>
        <button onClick={event =>  window.location="http://stackoverflow.com"} style={{ color: 'black' }} className="button">Subscribe</button>

        </div>

       
        <div className="experian sub_sectionn">
        <h1><img src="data:image/png;base64,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"></img></h1>
        <button  onClick={event =>  window.location="http://stackoverflow.com"} style={{ color: 'purple' }} className="button">Subscribe</button>

        </div>
    </div>
    </div>
    )
}

export default DashAffiliate