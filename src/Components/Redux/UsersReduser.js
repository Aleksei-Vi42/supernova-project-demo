import {usersApi} from "../../Api/Api";

const FOLLOW = 'FOLLOW '
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FEETCHING '
const TOGGLE_IS_FOLLOWING_PROGRESS ='TOGGLE_IS_FOLLOWING_PROGRESS'


export const follow = (userId) => {return {type: FOLLOW, userId}}
export const unfollow = (userId) => {return {type: UNFOLLOW, userId}}
export const setUsers = (users) => {return {type: SET_USERS, users}}
export const setCurrentPage = (currentPage) => {return {type: SET_CURRENT_PAGE, currentPage}}
export const setTotalUsersCount = (totalUsersCount) => {return {type: SET_TOTAL_USERS_COUNT, serverCount: totalUsersCount}}
export const setToggleIsFetching = (isFetching) => {return {type: TOGGLE_IS_FETCHING ,  isFetching}}
export const toggleIsFollowingProgress = (isFetching, userId) => { return{type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}}

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return  (dispatch) => {
        dispatch(setToggleIsFetching(true))
        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(setToggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const unFollowThunkCreator = (userId) => {
    return  (dispatch) => {
       dispatch(toggleIsFollowingProgress(true, userId))
        usersApi.unFollowUsers(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

export const followThunkCreator = (userId) => {
    return  (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersApi.followUsers(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: true,
    isDisabled: []
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case  FOLLOW:
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === action.userId) {
                  return {...user, followed: true}
                }
                return user
            })
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.serverCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                isDisabled: action.isFetching
                    ? [...state.isDisabled, action.userId]
                    : state.isDisabled.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}


export default usersReduser