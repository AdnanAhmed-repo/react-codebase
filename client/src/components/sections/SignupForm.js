import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SectionHeader from "./partials/SectionHeader";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { signupUser } from "../../redux/actions/user_action";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { connect } from "react-redux";

//Checkout Form component-----------------------------------------------=
const StripeForm = (aprops) => {
	const [state, setState] = useState({
		bname: "Busines Name",
		email: "Email address",
		password: "Password",
		name: "Name on Card",
		amount: 0,
		plan: "",
		stripeId: "",
	});
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
		title: "Welcome. We exist to make cybersecurity easier.",
	};

	const handlechangeall = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	const handleRadio = (e) => {
		setState({
			...state,
			amount: Number(e.target.value) * 100,
			plan: e.target.id,
		});
	};

	const handleStripeSubmit = async () => {
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardElement),
		});
		if (!error) {
			console.log("response of stripe payment___", paymentMethod);
			const { id } = paymentMethod;
			console.log("111111111 and ID_", id);
			aprops.signup(state, id);
			aprops.props.history.push("/dashboard");
			console.log("3333333333");
			// setState({ ...state, stripeId: id });
		}
	};

	const handlesubmit = (event) => {
		event.preventDefault();
		handleStripeSubmit();
		//alert( JSON.stringify(this.state));
		console.log(JSON.stringify(state));
	};

	//Stripe hooks-------
	const stripe = useStripe();
	const elements = useElements();
	//=============================

	return (
		<section {...aprops} className={outerClasses}>
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
												label="Business name"
												type="text"
												name="bname"
												
												value={state.bname}
												onChange={handlechangeall}
												labelHidden
												required
											/>
										</div>
										<div className="mb-12">
											<Input
												type="email"
												name="email"
												label="Email"
												value={state.email}
												onChange={handlechangeall}
												labelHidden
												required
											/>
										</div>
										<div className="mb-12">
											<Input
												type="password"
												name="password"
												label="Password"
												value={state.password}
												onChange={handlechangeall}
												labelHidden
												required
											/>
										</div>

										{/* Stripe Integration */}
										<div className="signin-bottom has-top-divider">
											<div className="pt-32 text-xs center-content text-color-low">
												Select Subscription tier:
											</div>
										</div>

										{/* all packages amounts here */}
										<div onChange={handleRadio} className="radio">
											{console.log("checking plan amount____", state.amount)}
											<div>
												<label>
													<input
														type="radio"
														id="default"
														value="49"
														name="plan"
													/>
													Lite ($49/month)
												</label>
											</div>
											<div>
												<label>
													<input
														type="radio"
														id="basic"
														name="plan"
														value="199"
													/>
													Basic ($199/month)
												</label>
											</div>
											<div>
												<label>
													<input
														type="radio"
														id="complete"
														name="plan"
														value="249"
													/>
													Complete ($249/month)
												</label>
											</div>
										</div>

										<div className="pt-32 text-xs center-content text-color-low">
											Enter Card Details Here!
											<div className="mb-12">
												<Input
													label="Name on the card"

													type="text"
													name="name"
													value={state.name}
													onChange={handlechangeall}
													labelHidden
													required
												/>
											</div>
											<div
												style={{
													border: "1px solid grey",
													padding: 15,
													backgroundColor: "#cccccc",
												}}
											>
												<CardElement />
											</div>
											{/* <button type="submit" disabled={!stripe}>
													Checkout
												</button> */}
											<div className="mt-24 mb-32">
												<Button type="submit" color="primary" wide>
													Register
												</Button>
											</div>
										</div>
									</fieldset>
								</form>
								<div className="signin-bottom has-top-divider">
									<div className="pt-32 text-xs center-content text-color-low">
										Already have an account?{" "}
										<Link to="/login/" className="func-link">
											Login
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
};

// const SignupForm = () => {
// 	return (
// 		<Elements stripe={stripePromise}>
// 			<StripeForm />
// 		</Elements>
// 	);
// };
// SignupForm.propTypes = propTypes;
// SignupForm.defaultProps = defaultProps;

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
	return { signup: (data, id) => dispatch(signupUser(data, id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(StripeForm);
