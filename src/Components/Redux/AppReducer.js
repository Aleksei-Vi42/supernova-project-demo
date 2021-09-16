import {authMeThunkCreator, setAuthUserData} from "./AuthReducer";

const USER_INITIALIZING = 'USER_INITIALIZING'

export const userInitializing = (initialized) => {
    return {type: USER_INITIALIZING, initialized}
}





let initialState = {
    initialized: false
}


export  const initializingApp = () => (dispatch) => {
    let promise = dispatch(authMeThunkCreator())
    Promise.all([promise])
        .then(() => {
            dispatch(userInitializing())
        })
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case   USER_INITIALIZING :
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export default appReducer