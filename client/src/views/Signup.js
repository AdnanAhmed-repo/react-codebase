import React from "react";
import SignupForm from "../components/sections/MainRegister";

class Signup extends React.Component {
	render() {
		return (
			<SignupForm props={this.props} className="illustration-section-01" />
		);
	}
}

export default Signup;
