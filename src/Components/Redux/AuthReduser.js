import {authApi, usersApi} from "../../Api/Api";


const SET_USER_DATA = 'SET_USER_DATA'
const LOGIN_USER = 'AUTH_USER'


export const setAuthUserData = (id, login, email) => {
    return {type: SET_USER_DATA, data: {id, login, email}}
}

export const loginUser = (email, password, isRememberMe) => {
    return   {type: LOGIN_USER, data: {email, password, isRememberMe}}
}



export const authMeThunkCreator = () => {
    return  (dispatch) => {
        authApi.getAuthMe()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }
}


export const loginUserThunkCreator = () => {
    return  (dispatch) => {
        authApi.loginUser()
            .then(data => {
                if(data.resultCode === 0) {
                    let {email, password, isRememberMe} = data.data
                    dispatch(loginUser(email, password, isRememberMe))
                }
            })
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

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case   SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export default authReduser