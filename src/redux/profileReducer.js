const ADD_POST_TEXT = 'ADD_POST_TEXT';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    newPostText: '',
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_POST_TEXT: {
            debugger
            state.newPostText = action.text
            return { ...state };
        }

        case ADD_POST_TEXT: {

            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return { ...state };
        }

        default:
            return { ...state };
    }
}

export const addPostText = () => ({ type: ADD_POST_TEXT })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, text })

export default profileReducer