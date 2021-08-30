import {authApi, usersApi} from "../../Api/Api";


const SET_USER_DATA = 'SET_USER_DATA'

export const setAuthUserData = (id, login, email) => {
    return {type: SET_USER_DATA, data: {id, login, email}}
}


export const authMeThunkCreator = () => {
    return  (dispatch) => {
        authApi.getAuthMe()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}



let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
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