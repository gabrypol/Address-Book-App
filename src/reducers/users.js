import {
	GET_USERS,
	SET_END_USERS_REQUEST,
	SET_IS_LOADING,
	SET_REQUEST_SENT,
	SET_NAT
} from "../actions/types";

const initialState = {
	users: [],
	isLoading: true,
	requestSent: true,
	endUsersRequest: false,
	nat: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload,
				isLoading: false,
				requestSent: false
			};
		case SET_IS_LOADING:
			return {
				...state,
				isLoading: action.payload
			};
		case SET_END_USERS_REQUEST:
			return {
				...state,
				endUsersRequest: action.payload
			};
		case SET_REQUEST_SENT:
			return {
				...state,
				requestSent: action.payload
			};
		case SET_NAT:
			return {
				...state,
				nat: action.payload,
				users: []
			};
		default:
			return state;
	}
}
