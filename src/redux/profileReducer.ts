const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export type InitialStateType = {
    newPostText: string,
    posts: Array<NewPostType>
}

type NewPostType = {
    id: number,
    message: string,
    likesCount: number,
    date: string,
}

const initialState: InitialStateType = {
    newPostText: '',
    posts: []
}

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {

        case UPDATE_NEW_POST_TEXT: {
            // state.newPostText = action.text
            return {...state, newPostText: action.text};
        }

        case ADD_POST: {
            let today = new Date();
            let month = today.getMonth();

            let newPost: NewPostType = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
                date: '' +
                    today.getDate() +
                    '-' + ++month +
                    '-' + today.getFullYear() +
                    ' ' + today.getHours() +
                    ':' + today.getMinutes() +
                    ':' + today.getSeconds(),
            }

            state.posts.push(newPost)
            state.newPostText = ''
            return {...state, posts: []};
        }

        default:
            return {...state};
    }
}

type AddPostActionType = {
    type: typeof ADD_POST,
}
export const addPost = (): AddPostActionType => ({type: ADD_POST})

type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    text: string,
}
export const updateNewPostText = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, text})

export default profileReducer

