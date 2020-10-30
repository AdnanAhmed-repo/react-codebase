import React from "react";
import './DashProfile.css'


export default class DashHelp extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        
        <div className="sub_sectionnn">
<form className="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/xoqpwjgz" method="post">
        <fieldset id="fs-frm-inputs">
          <label className="title" htmlFor="full-name">Full Name: </label>
          <br/>
          <input type="text" name="name" id="full-name" placeholder="First and Last" required />
          <br/>
          <label  className="title" htmlFor="email-address">Email Address: </label>
          <br/>
          <input type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required />
          <br/>
          <label  className="title" htmlFor="message">Message: </label>
          <br/>
          <textarea rows={7} name="message" id="message" placeholder="Type feedback here..." required defaultValue={""} />
          <input type="hidden" name="_subject" id="email-subject" defaultValue="Contact Form Submission" />
        </fieldset>
        <input type="submit" defaultValue="Submit" />
      </form>
      </div>
   
    
      
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

