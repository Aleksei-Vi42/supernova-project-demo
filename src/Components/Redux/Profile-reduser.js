import {profileApi, usersApi} from "../../Api/Api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const SET_USERS_PROFILE = 'SET_USER_PROFILE'

const GET_USER_STATUS = 'GET_USER_STATUS'
const UPDATE_USER_STATUS = 'UPDATE_STATUS'

export const getUserStatus = (status) => {
    return {type: GET_USER_STATUS, status}
}

export const updateUserStatus = (status) => {
    return {type: UPDATE_USER_STATUS, status}
}




export const addPostAction = (newPostText) => {
    return {type: ADD_POST, text: newPostText}
}
export const setUsersProfile = (profile) => {
    return {type: SET_USERS_PROFILE, profile}
}
export const updateNewPostAction = (text) => {
    return {type: UPDATE_NEW_POST, newText: text}
}


export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        usersApi.getProfile(userId)
            .then(data => {
                dispatch(setUsersProfile(data))
            })
    }
}
export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileApi. getProfileStatus(userId)
            .then(data => {
                dispatch(getUserStatus(data))
            })
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileApi.putUserStatus(status)
            .then(data => {
                if(data.resultCode === 0)
                dispatch(getUserStatus(status))
            })
    }
}


let initialState = {
    dataPosts: [
        {id: 1, message: 'hi', likeCaunt: 20},
        {id: 2, message: 'Hello World', likeCaunt: 44}
    ],
    newPostText: '',
    profile: null,
    status: null
}

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.text,
                likeCount: 0
            }
            return {
                ...state,
                dataPosts: [newPost, ...state.dataPosts]
            }
        }
        case SET_USERS_PROFILE:
           return {
               ...state,
               profile: action.profile
           }
        case GET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }

}


export default profileReduser