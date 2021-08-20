const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

export const addMessageAction = (text) => {
    return {type: ADD_MESSAGE, text: text}
}

export const updateNewMessageAction = (text) => {
    return {type: UPDATE_NEW_MESSAGE, newText: text}
}

let initialState = {
    dataUsers: [
        {id: '1', name: 'Rick'},
        {id: '2', name: 'Morty'},
        {id: '3', name: 'Jery'},
        {id: '4', name: 'Bet'},
    ],

    dataMessages: [
        {id: 1, message: 'Labu dabu dab'},
        {id: 2, message: 'Yo'}
    ],
    newMessageText: ''

}
const dialogReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessageText
            }

            return {
                ...state,
                dataMessages: [newMessage, ...state.dataMessages],
                newMessageText: ''
            }

        case  UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}
export default dialogReduser