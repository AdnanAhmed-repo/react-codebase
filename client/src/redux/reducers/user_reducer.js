import {
	SIGNUP_USER,
	LOGIN_USER,
	AUTH_USER,
	FETCH_CONFIG,
	ADD_CONFIG,
	LOGOUT_USER,
	LOGIN_SUCCESS,
	FETCH_RISK,
	USER_PROFILE,
	FETCH_PASSWORDS

} from "../actions/actiontype";

export const UserReducer = (state = {user:{}, config:{}, scoreHistory:[], risk:"Scanning...", passwords:"00" }, action) => {
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
		case FETCH_RISK:
			console.log("FETCHED RISK IN REDUCER", action.payload)
			return {...state, risk:action.payload.risk, scoreHistory:action.payload.scoreHistory}
		case FETCH_PASSWORDS:
			console.log("FETCHED PASSWORDS IN REDUCER", action.payload)
			return {...state, passwords:action.payload.passwords, }
			case AUTH_USER:
			return { ...state, userData: action.payload };
		case LOGOUT_USER:
			return { ...state };
		case USER_PROFILE:
			return { ...state, userProfile: action.payload };
           default:
        return state;
	}
};
