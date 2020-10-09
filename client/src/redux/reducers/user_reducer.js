import {
	SIGNUP_USER,
	LOGIN_USER,
	AUTH_USER,
	FETCH_CONFIG,
	ADD_CONFIG,
	LOGOUT_USER,
	LOGIN_SUCCESS,
} from "../actions/actiontype";

export const UserReducer = (state = {user:{}, config:{} }, action) => {
	switch (action.type) {
		case SIGNUP_USER:
			return { ...state, signup: action.payload };
		case LOGIN_USER:
			return { ...state, loginSuccess: action.payload };
		case LOGIN_SUCCESS:
			console.log("LOGIN STATE REDUCER____", action.payload);
			return { ...state, user: action.payload };
		case ADD_CONFIG:
			console.log("ADD_CONFIG RESPONSE++++++++++", state)
			return { ...state, config: {...state.config, [action.payload]: action.payload}}
		case FETCH_CONFIG:
			console.log("FETCHED CONFIG IN REDUCER", action.payload)
			return {...state, config:action.payload}
		case AUTH_USER:
			return { ...state, userData: action.payload };
		case LOGOUT_USER:
			return { ...state };
		default:
			return state;
	}
};
