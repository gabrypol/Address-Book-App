import axios from "axios";
import {
	GET_USERS,
	SET_END_USERS_REQUEST,
	SET_IS_LOADING,
	SET_REQUEST_SENT,
	SET_NAT
} from "./types";

export const getRandomUsers = () => (dispatch, getState) => {
	let url;
	const state = getState();
	url = "https://randomuser.me/api/?results=50&nat=" + state.user.nat.join(",");
	axios
		.get(url)
		.then(res => {
			if (res.status === 200) {
				dispatch({
					type: GET_USERS,
					payload: state.user.users.concat(res.data.results)
				});
			} else {
				window.alert("Login Failed Error " + res.status);
			}
		})
		.catch(err => {
			window.alert(err);
		});
};

export const setRequestSent = flag => dispatch => {
	dispatch({
		type: SET_REQUEST_SENT,
		payload: flag
	});
};

export const setEndUsersResquest = flag => dispatch => {
	dispatch({
		type: SET_END_USERS_REQUEST,
		payload: flag
	});
};

export const setIsLoading = flag => dispatch => {
	dispatch({
		type: SET_IS_LOADING,
		payload: flag
	});
};

export const setNat = nat => dispatch => {
	dispatch({
		type: SET_NAT,
		payload: nat
	});
};
