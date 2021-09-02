const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

export const addMessageAction = (newMessageText) => {
    return {type: ADD_MESSAGE, text: newMessageText}
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
}
const dialogReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 3,
                message: action.text
            }
            return {
                ...state,
                dataMessages: [newMessage, ...state.dataMessages],
            }
        default:
            return state
    }
}
export default dialogReduser