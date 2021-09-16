import {authApi} from "../../Api/Api"
import {stopSubmit} from "redux-form"


const SET_USER_DATA = 'authReducer/SET_USER_DATA'


export const setAuthUserData = (id, login, email, isAuth) => {
    return {type: SET_USER_DATA, data: {id, login, email, isAuth}}
}


export const authMeThunkCreator = () => async (dispatch) => {
let data = await authApi.getAuthMe()
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
}


export const loginUserThunkCreator = (email, password, isRememberMe) => async (dispatch) => {
  let response = await authApi.loginUser(email, password, isRememberMe)
            if (response.data.resultCode === 0) {
                dispatch(authMeThunkCreator())
            } else {
                let errorMessage = response.data.messages
                dispatch(stopSubmit('login', {_error: errorMessage}))
            }
}

export const logoutUserThunkCreator = () => async (dispatch) => {
   let response = await authApi.logoutUser()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}


let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
    password: null,
    isRememberMe: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case   SET_USER_DATA :
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export default authReducer