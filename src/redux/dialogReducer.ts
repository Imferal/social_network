const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

export type InitialStateType = {
    dialogs: Array<dialog>
    messages: Array<message>
    newMessageText: string
}

type dialog = {
    id: number
    name: string
}

type message = {
    id: number
    message: string
    date: string
}

const initialState: InitialStateType = {
    dialogs: [
        {id: 1, name: 'Vinnie The Pooh'}, {id: 2, name: 'Пятачок'}
    ],
    messages: [
        {id: 1, message: 'Hi!', date: '17-2-2021 11:24:20'},
        {id: 2, message: 'Yo!', date: '17-2-2021 11:24:20'}
    ],
    newMessageText: '',
}

const dialogReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.text
            return state
        }

        case ADD_MESSAGE: {
            let today = new Date();
            let month = today.getMonth();

            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
                date: '' +
                    today.getDate() +
                    '-' + ++month +
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

type UpdateNewMessageTextActionType ={
    type: typeof UPDATE_NEW_MESSAGE_TEXT,
    text: string
}
export const updateNewMessageText = (text: string) : UpdateNewMessageTextActionType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, text})

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
}
export const addMessage = () : AddMessageActionType => ({type: ADD_MESSAGE})

export default dialogReducer