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
	"pk_test_51HSZgBEFjB8SbJCIFgtfGOiKPpfxZkfiP8XSWtMURIFW4PMY5T8kSm73sYY2nfb7yX8pykYhzFoDNGL8lkt3I8HV00giIcuVL4"
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
