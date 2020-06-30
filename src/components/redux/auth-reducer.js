import { authApi } from "../API/api"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

let initialState = {
    username: null,
    password: null,
    token: null,
    isAuth: false
}

const AuthReducer = (state= initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA :
            return {
                ...state,
                ...action.payload
            }
        
        default:
            return state
    }
}

export const setAuthUserData = (username, password, token, isAuth) => ({
    type: SET_AUTH_USER_DATA, payload: {username, password, token, isAuth} 
})

export const login = (username, password) => async(dispatch) => {
    let response = await authApi.login(username, password)

    if (response.status !== 400)
        dispatch(setAuthUserData(response.data.username, response.data.password, response.data.token))
}


export default AuthReducer