const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
    dialogs: [
        { id: 1, name: 'ВинниПух' }, { id: 2, name: 'Пятачок' }
    ],
    messages: [
        { id: 1, message: 'Привет!', date: '17-2-2021 11:24:20' },
        { id: 2, message: 'Здарова!', date: '17-2-2021 11:24:20' }
    ],
    newMessageText: '',
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.text
            return state
        }

        case ADD_MESSAGE: {
            let today = new Date();

            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
                date: '' +
                    today.getDate() +
                    '-' + parseInt(today.getMonth() + 1) +
                    '-' + today.getFullYear() +
                    ' ' + today.getHours() +
                    ':' + today.getMinutes() +
                    ':' + today.getSeconds(),
            };

            state.messages.push(newMessage);
            state.newMessageText = '';
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