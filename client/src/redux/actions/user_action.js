import axios from "axios";
import{
    SIGNUP_USER,
    LOGIN_USER,
    AUTH_USER,
    LOGOUT_USER,
} from"./actiontype";
//import { USER_SERVER }from "../components/Config.js";


export function signupUser(dataToSubmit){
     const request = axios.post(`http://localhost:3000/api/users/register`,dataToSubmit)
     .then((response) => response.data);
	  return{
        type: SIGNUP_USER,
        payload: request,
    };
}

export function loginUser(dataToSubmit) {
	const request = axios
		.post(`http://localhost:3000/api/users/register/login`, dataToSubmit)
		.then((response) => response.data);
    console.log("------------action is connected all fine")
	return {
		type: LOGIN_USER,
		payload: request,
	};
}

export function auth() {
	const request = axios
		.get(`http://localhost:3000/api/users/register/auth`)
		.then((response) => response.data);

	return {
		type: AUTH_USER,
		payload: request,
	};
}
export function logoutUser() {
	const request = axios
		.get(`http://localhost:3000/api/users/register/logout`)
		.then((response) => response.data);

	return {
		type: LOGOUT_USER,
		payload: request,
	};
}


