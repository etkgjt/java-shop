import {
	SET_USER_DATA,
	REMOVE_USER_DATA,
	USER_LOGGED_OUT,
} from '../actions/UserActions';
import { REDUX } from '../type';

const initialState = {};

const userReducer = function (state = initialState, action) {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
			};
		}
		case REMOVE_USER_DATA: {
			return {
				...state,
			};
		}
		case USER_LOGGED_OUT: {
			return state;
		}
		case REDUX.LOGIN: {
			return {
				...state,
				loggedIn: true,
				userInfo: action.payload,
			};
		}
		case REDUX.LOGOUT: {
			return initialState;
		}
		default: {
			return state;
		}
	}
};

export default userReducer;
