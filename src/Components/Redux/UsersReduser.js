const FOLLOW = 'FOLLOW '
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export const isFollowAC = (userId) => {
    return {type: FOLLOW, userId}
}

export const isUnfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
}

export const setUsersAC = (users) => {
   return {type: SET_USERS, users}
}

export const setCurrentPageAC = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}

let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: 54,
    currentPage: 3
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case  FOLLOW:
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === action.id) {
                  return {...user, isFollowed: true}
                }
                return user
            })
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, isFollowed: false}
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
        default:
            return state
    }
}


export default usersReduser