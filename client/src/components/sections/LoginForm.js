import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import { Link } from "react-router-dom";
import SectionHeader from "./partials/SectionHeader";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Checkbox from "../elements/Checkbox";
import { loginUser } from "../../redux/actions/user_action";
import { connect } from "react-redux";

const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
};

const LoginForm =(aprops)=> {
	const [state, setState] = useState({ email: "", password: "" })

	useEffect(()=>{
		console.log("ENtERING LOGIN FORM....",localStorage.getItem('user'))
		if(localStorage.getItem('user')){
			aprops.props.history.push("/dashboard/home");

		}
		
	},[localStorage.getItem('user'), aprops.user])

	const handlechangeall = (event) => {
		setState({...state, [event.target.name]: event.target.value });
	};

	const handlesubmit = (event) => {
		event.preventDefault();

		aprops.login(state);

		//alert( JSON.stringify(state));
		console.log(JSON.stringify(state));
	};

		console.log("PROPS IN LOGINFORM _____", aprops);
		const {
			className,
			topOuterDivider,
			bottomOuterDivider,
			topDivider,
			bottomDivider,
			hasBgColor,
			invertColor,
			...props
		} = aprops;

		const outerClasses = classNames(
			"signin section",
			topOuterDivider && "has-top-divider",
			bottomOuterDivider && "has-bottom-divider",
			hasBgColor && "has-bg-color",
			invertColor && "invert-color",
			className
		);

		const innerClasses = classNames(
			"signin-inner section-inner",
			topDivider && "has-top-divider",
			bottomDivider && "has-bottom-divider"
		);

		const sectionHeader = {
			title: "Welcome back.",
		};

		return (
			<section {...props} className={outerClasses}>
				{console.log("LOGIN FORM RUNNING.......")}
				<div className="container">
					<div className={innerClasses}>
						<SectionHeader
							tag="h1"
							data={sectionHeader}
							className="center-content"
						/>
						<div className="tiles-wrap">
							<div className="tiles-item">
								<div className="tiles-item-inner">
									<form onSubmit={handlesubmit}>
										<fieldset>
											<div className="mb-12">
												<Input
													type="email"
													placeholder="Your E-mail"
													label="Email"
													name="email"
													value={state.email}
													onChange={handlechangeall}
													labelHidden
													required
												/>
											</div>
											<div className="mb-12">
												<Input
													type="password"
													placeholder="Your Password"
													label="Password"
													name="password"
													value={state.password}
													onChange={handlechangeall}
													labelHidden
													required
												/>
											</div>
											<div className="mt-24 mb-32">
												<Button color="primary" wide>
													Sign in
												</Button>
											</div>
											<div className="signin-footer mb-32">
												<Checkbox>Remember me</Checkbox>
												<Link
													to="/recover-password/"
													className="func-link text-xs"
												>
													Forgot password?
												</Link>
											</div>
										</fieldset>
									</form>
									<div className="signin-bottom has-top-divider">
										<div className="pt-32 text-xs center-content text-color-low">
											Don't you have an account?{" "}
											<Link to="/signup/" className="func-link">
												Sign up
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	
}

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;
const mapStateToProps = (state) => {
	return {
		user: state.user
	}
};
const mapDispatchToProps = (dispatch) => {
	return { login: (data) => dispatch(loginUser(data)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

