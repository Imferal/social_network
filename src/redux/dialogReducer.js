const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
    dialogs: [{ id: 1, name: 'ВинниПух' }, { id: 2, name: 'Пятачок' }],
    messages: [{ id: 1, message: 'Привет!' }, { id: 2, message: 'Здарова!' }],
    newMessageText: '',
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.text
            return state
        }

        case ADD_MESSAGE: {
            let newMessage = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({ id: 6, message: newMessage });
            return state
        }

        default:
            return state
    }
}

export const updateNewMessageText = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, text })
export const addMessage = () => ({ type: ADD_MESSAGE })

export default dialogReducer