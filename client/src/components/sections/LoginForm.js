import React from "react";
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

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
	}

	handlechangeall = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handlesubmit = (event) => {
		event.preventDefault();

		this.props.login(this.state);
		this.props.props.history.push("/dashboard");
		//alert( JSON.stringify(this.state));
		console.log(JSON.stringify(this.state));
	};

	render() {
		console.log("PROPS IN LOGINFORM _____", this.props);
		const {
			className,
			topOuterDivider,
			bottomOuterDivider,
			topDivider,
			bottomDivider,
			hasBgColor,
			invertColor,
			...props
		} = this.props;

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
									<form onSubmit={this.handlesubmit}>
										<fieldset>
											<div className="mb-12">
												<Input
													type="email"
													placeholder="Your E-mail"
													label="Email"
													name="email"
													value={this.state.email}
													onChange={this.handlechangeall}
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
													value={this.state.password}
													onChange={this.handlechangeall}
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
}

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
	return { login: (data) => dispatch(loginUser(data)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
