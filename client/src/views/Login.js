import React from "react";
import LoginForm from "../components/sections/LoginForm";

class Login extends React.Component {
	render() {
		return <LoginForm props={this.props} className="illustration-section-01" />;
	}
}

export default Login;
