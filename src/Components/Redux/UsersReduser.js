const FOLLOW = 'FOLLOW '
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export const isFollowAC = (userId) => {
    return {type: FOLLOW, userId}
}

export const isUnfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
}

export const setUsersAC = (users) => {
   return {type: SET_USERS, users}
}

let initialState = {
    users:[]
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
        default:
            return state
    }
}


export default usersReduser