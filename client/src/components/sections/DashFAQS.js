import React, { Component } from "react";
import Faq from "react-faq-component";


const data = {
    title: "FAQs (How it works)",
    rows: [
        {
            title: "How do I setup the Configure Page?",
            content: `Setting up the configure page may seem like a complex task, but just email us at support@networkzen.co
            to book a video chat setup appointment with one of our onboarding specialists.`,
        },
        {
            title: "How can I change my password?",
            content:
                "To change your password, click the the Help tab on the side-navigation bar and them submit a message for what you want your new password to be.",
        },
        {
            title: "How can I change my account type?",
            content: `Currently we do not support the change of account type, as we do not have eniught features to create different account statuses. `,
        },
        {
            title: "How does the Security Risk Score work? ",
            content: <p>The Security Risk Score is computed by our proprietary formula which is semi-fueled upon the open source CVVS score model. Some score factors include email, malware, and IP-scans</p>,
        },
        {
            title: "How do I improve my risk score?",
            content: <p>You do not need to do anything, as that is the point of our service. We take care of improving you risk score for you, and update you as we lower it.</p>,
        },
        {
            title: "Where can submit new feature requests?",
            content: <p>You can submit feature requests to either our email: support@networkzen.co or via the help tab.</p>,
        },
        {
            title: "How can I contact you guys?",
            content: <p>Use either our email: support@networkzen.co or via the help tab.</p>,
        },
        {
            title: "When will you be adding more features?",
            content: <p>Yes, our team is hard at work engineering more powerful tools to empower your security. We will keep you updated as new features are added!</p>,
        },
        {
            title: "What happens If I still get hacked?",
            content: <p>We give a 99% gurantee that you will not get hacked. In the unlikely event that you do, we provide live cyber-defense via our team of on-call cyber-support staff, and provide 24hr support to help patch up anything as quick as possible.</p>,
        },
        {
            title: "Does subscribing to the extra protection services cost me more?",
            content: <p>Yes, subscribing to the extra protection services cost you more, but we highly recommend it to be more secure. </p>,
        },
        {
            title: "What is the current version",
            content: <p>current version is MVP 1.0</p>,
        },
    ],
};
 
const styles = {
    bgColor: 'white',
    titleTextColor: "lightblue",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "blue",
    rowContentPaddingBottom: '10px',

};
 
const config = {
     animate: true,
     //arrowIcon: "V",
     tabFocus: true
};

function DashFAQS() {
    return (

        <div >
        <Faq style={{display: 'flex', justifyContent: 'center'}} data={data} styles={styles} config={config} />
    </div>
    )
}

export default DashFAQS
