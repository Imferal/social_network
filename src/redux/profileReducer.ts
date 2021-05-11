import {PostType} from "../types/types";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export type profileInitialStateType = {
    newPostText: string,
    posts: Array<PostType>,
}

const initialState: profileInitialStateType = {
    newPostText: '',
    posts: [],
}

const profileReducer =
    (state = initialState, action: any): profileInitialStateType => {
        switch (action.type) {

            case UPDATE_NEW_POST_TEXT: {
                return {...state, newPostText: action.text};
            }

            case ADD_POST: {
                let today = new Date();
                let month = today.getMonth();
                let newPost: PostType = {
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
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                };
            }

            default:
                return state;
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