import {
	SIGNUP_USER,
	LOGIN_USER,
	AUTH_USER,
	LOGOUT_USER,
} from "../actions/actiontype";

export const UserReducer = (state = {}, action) => {
	switch (action.type) {
		case SIGNUP_USER:
			return { ...state, signup: action.payload };
		case LOGIN_USER:
			// console.log("LOGIN STATE REDUCER____", action.payload);
			return { ...state, loginSuccess: action.payload };
		case AUTH_USER:
			return { ...state, userData: action.payload };
		case LOGOUT_USER:
			return { ...state };
		default:
			return state;
	}
};
