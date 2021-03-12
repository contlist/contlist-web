import { stopSubmit, SubmissionError } from "redux-form"
import { authApi, registerAPI } from "../API/api"


// action.types
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const LOGOUT = 'LOGOUT'

let initialState = {
	username: null,
	token: null,
	isAuth: false
}

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.payload
			}

		case LOGOUT:
			return initialState 

		default:
			return state
	}
}

export const setAuthUserData = (username, token, isAuth) => ({
	type: SET_AUTH_USER_DATA, payload: { username, token, isAuth }
})

export const logoutAC = () => ({
	type: LOGOUT
})

export const login = (username, password) => {
	return async (dispatch) => {
		try {
			let response = await authApi.login(username, password)

			if (response.status === 200) {
				// set user data
				dispatch(setAuthUserData(response.data.username, response.data.token, true))
			}
		} catch (error) {
			// show error message
			dispatch(stopSubmit('login', { _error: "Incorrect login or password" }))
		}
	}
}

export const register = (username, password) => {
	return async (dispatch) => {
		await registerAPI.register(username, password)
		dispatch(login(username, password))
	}
}

export const logout = () => {
	return async (dispatch) => {
		dispatch(logoutAC())
	}
}


export default AuthReducer