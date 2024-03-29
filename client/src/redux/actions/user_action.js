import axios from "axios";
import {
	FETCH_CONFIG,
	FETCH_RISK,
	ADD_CONFIG,
	AUTH_USER,
	LOGOUT_USER,
	LOGIN_SUCCESS,
	USER_PROFILE,
	FETCH_PASSWORDS,
	FETCH_VULNERABILITIES
} from "./actiontype";

const FetchVulSuccess = (data) =>{
	return {
		type: FETCH_VULNERABILITIES,
		payload: data
	}
}
export const fetchVulnerabilities = (id) =>{
	return (dispatch)=>{
		axios.get(`http://localhost:5000/api/dashboard/vulnerabilities/${id}`)
		.then(response=>{
			dispatch(FetchVulSuccess(response.data))
		})
		.catch(err=>{
			console.log('ERROR IN FETCHING VULNEARBILITIES---', err)
		})
	}
}

export const fetchPasswords=(passwords)=>{
	return {
		type: FETCH_PASSWORDS,
		payload: passwords
	}
}

export const fetchExposedPasswords=(id)=>{
	return(dispatch)=>{
		console.log("fetching Passwrds........with::", id)
		axios.post(`https://floating-beach-82979.herokuapp.com/api/dashboard/exposed-data`, {userId:id})
		.then((response)=>{
			const passwords = response.data
			console.log("exposedpasswords AFTER FETCHING___", passwords)
			dispatch(fetchPasswords(passwords));
		}).catch(err=>{
			console.log("ERROR IN FETCHING PASSWORDS ALL!!!!!", err)
		})
	}
}

export const fetchRisk=(risk)=>{
	return {
		type: FETCH_RISK,
		payload: risk
	}
}
export const fetchAllRisk=(id)=>{
	return(dispatch)=>{
		console.log("fetching Risk........with::", id)
		axios.post(`https://floating-beach-82979.herokuapp.com/api/dashboard/risk-score`, {userId:id})
		.then((response)=>{
			const risk = response.data
			console.log("RISK AFTER FETCHING___", risk)
			dispatch(fetchRisk(risk));
		}).catch(err=>{
			console.log("ERROR IN FETCHING RISK ALL!!!!!", err)
		})
	}
}

export const fetchConfig=(config)=>{
	return {
		type: FETCH_CONFIG,
		payload: config
	}
}
export const fetchAllConfig=(id)=>{
	return(dispatch)=>{
		console.log("fetching all.............with::", id)
		axios.post(`https://floating-beach-82979.herokuapp.com/api/config`, id)
		.then((response)=>{
			const allConfig = response.data
			console.log("AFTER FETCHING___", allConfig)
			dispatch(fetchConfig(allConfig));
		}).catch(err=>{
			console.log("ERROR IN ADDINg FETCHING CONFIG ALL!!!!!", err)
		})
	}
}


export const updateConfig=(config)=>{
	return {
		type: ADD_CONFIG,
		payload: config
	}
}


export const addUrlConfig=(data)=>{
	return(dispatch)=>{
		axios.post(`https://floating-beach-82979.herokuapp.com/api/config/add-urls`, data)
		.then((response)=>{
			const url = response.data
			dispatch(updateConfig(url));
		}).catch(err=>{
			console.log("ERROR IN ADDINg URLS!!!!!", err)
		})
	}
}
export const addDeviceConfig=(data)=>{
	return(dispatch)=>{
		axios.post(`https://floating-beach-82979.herokuapp.com/api/config/add-devices`, data)
		.then((response)=>{
			const device = response.data
			dispatch(updateConfig(device));
		}).catch(err=>{
			console.log("ERROR IN ADDINg deviceS!!!!!", err)
		})
	}
}
export const addEmailConfig=(data)=>{
	return(dispatch)=>{
		axios.post(`https://floating-beach-82979.herokuapp.com/api/config/add-emails`, data)
		.then((response)=>{
			const email = response.data
			dispatch(updateConfig(email));
		}).catch(err=>{
			console.log("ERROR IN ADDINg emailS!!!!!", err)
		})
	}
}

export const addPasswordConfig=(data)=>{
	return(dispatch)=>{
		axios.post(`https://floating-beach-82979.herokuapp.com/api/config/add-passwords`, data)
		.then((response)=>{
			const password = response.data
			dispatch(updateConfig(password));
		}).catch(err=>{
			console.log("ERROR IN ADDINg passwordS!!!!!", err)
		})
	}
}


export const userSuccess = (user) => {
	localStorage.setItem('user', JSON.stringify(user))
	const userData = JSON.parse(localStorage.getItem('user'))
	return {
		type: LOGIN_SUCCESS,
		payload: userData,
	};
};


export const loginUser = (dataToSubmit) => {
	return (dispatch) => {
		axios
			.post(`https://floating-beach-82979.herokuapp.com/api/users/login`, dataToSubmit)
			.then((response) => {
				const user = response.data;
				dispatch(userSuccess(user));
			})
			.catch((err) => {
				console.log("ERROR IN LOGIN ACTION NEW____", err);
			});
	};
};

export const signupUser = (dataToSubmit, id) => {
	let newData = { ...dataToSubmit, stripeId: id };
	return (dispatch) => {
		axios
			.post(`https://floating-beach-82979.herokuapp.com/api/users/register`, newData)
			.then((response) => {
				const user = response.data;
				dispatch(userSuccess(user));
			})
			.catch((err) => {
				console.log("ERROR IN SIGNUP ACTION NEW____", err);
			});
	};
};


export const fetchProfile=(user)=>{
	return{
	  type:USER_PROFILE,
	  payload: user
	}
  }
  export const profileUser = ( id) => {
	  console.log("User Profile data=============",id)
	  return(dispatch)=>{
	  axios
	  .get(`https://floating-beach-82979.herokuapp.com/api/profile/profileUser/${id}`)
	  .then((response) => {
	   const user = response.data
	   dispatch(fetchProfile(user));
		}).catch(err=>{
		console.log("errror in user profile", err)
		});
	}
  }

export function auth() {
	const request = axios
		.get(`https://floating-beach-82979.herokuapp.com/api/users/auth`)
		.then((response) => response.data);

	return {
		type: AUTH_USER,
		payload: request,
	};
}
export function logoutUser() {
	const request = axios
		.get(`https://floating-beach-82979.herokuapp.com/api/users/logout`)
		.then((response) => response.data);

	return {
		type: LOGOUT_USER,
		payload: request,
	};
}
