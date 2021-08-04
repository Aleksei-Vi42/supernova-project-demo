const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

export const addMessageAction = (newMessage) => {
    return {type: ADD_MESSAGE, newMessage: newMessage}
}

export const updateNewMessageAction = (text) => {
    return {type: UPDATE_NEW_MESSAGE, newText: text}
}

const dialogReduser = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessageText
            }
            state.dataMessages.unshift(newMessage)
            state.newMessageText = ''
            return state
        case  UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newText

            return state
        default:
            return state
    }
}



export default dialogReduser