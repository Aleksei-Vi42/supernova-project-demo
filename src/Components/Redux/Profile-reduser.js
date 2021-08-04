const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

export const addPostAction = (text) => {
    return {type: ADD_POST, text: text}
}

export const updateNewPostAction = (text) => {
    return {type: UPDATE_NEW_POST, newText: text}
}

const profileReduser = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            state.dataPosts.unshift(newPost)
           state.newPostText = ''
            return state
        case UPDATE_NEW_POST:
            state.newPostText = action.newText
            return state

        default:
            return state
    }
}


export default profileReduser