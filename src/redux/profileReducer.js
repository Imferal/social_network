const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    newPostText: '',
    posts: [],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.text
            return { ...state };
        }

        case ADD_POST: {
            let today = new Date();

            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
                date: '' +
                    today.getDate() +
                    '-' + parseInt(today.getMonth() + 1) +
                    '-' + today.getFullYear() +
                    ' ' + today.getHours() +
                    ':' + today.getMinutes() +
                    ':' + today.getSeconds(),
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return { ...state };
        }

        default:
            return { ...state };
    }
}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, text })

export default profileReducer