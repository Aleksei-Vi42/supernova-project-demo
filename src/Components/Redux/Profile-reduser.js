const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

export const addPostAction = (text) => {
    return {type: ADD_POST, text: text}
}

export const updateNewPostAction = (text) => {
    return {type: UPDATE_NEW_POST, newText: text}
}

let initialState = {
        dataPosts: [
            {id: 1, message: 'hi', likeCaunt: 20},
            {id: 2, message: 'Hello World', likeCaunt: 44}
        ],
        newPostText: ''
}

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            }
            let stateCopy = {...state}
            stateCopy.dataPosts = [...state.dataPosts]
            stateCopy.dataPosts.unshift(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST:
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy

        default:
            return state
    }
}


export default profileReduser