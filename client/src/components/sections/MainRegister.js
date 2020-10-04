import React, { useState } from "react";
// import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
// import { Link } from "react-router-dom";
// import SectionHeader from "./partials/SectionHeader";
// import Input from "../elements/Input";
// import Button from "../elements/Button";
// import { signupUser } from "../../redux/actions/user_action";
import { loadStripe } from "@stripe/stripe-js";
import StripeForm from "./SignupForm";
import {
	Elements,
	CardElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import { connect } from "react-redux";
const stripePromise = loadStripe(
	"pk_live_51HSZgBEFjB8SbJCIEaRbjphURYkZeGbM0brbf1Iyhex0q9d7rG1khptf2IuzES2bHFuK4z2ORCB3DD5E07HxGbrx00vszVWrVR"
);
const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
};
const SignupForm = (props) => {
	return (
		<Elements stripe={stripePromise}>
			<StripeForm props={props.props} />
		</Elements>
	);
};
SignupForm.propTypes = propTypes;
SignupForm.defaultProps = defaultProps;

export default SignupForm;
