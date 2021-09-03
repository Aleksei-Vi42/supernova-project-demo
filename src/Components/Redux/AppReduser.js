import {authMeThunkCreator} from "./AuthReduser";

const USER_INITIALIZING = 'USER_INITIALIZING'

export const userInitializing = () => {
    return {type: USER_INITIALIZING}
}





let initialState = {
    initialized: false
}

export const initializingApp = () => (dispatch) => {
    let promise = dispatch(authMeThunkCreator())
    Promise.all([promise]).then(() => {dispatch(userInitializing())})

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