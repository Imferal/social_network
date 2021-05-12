import {PostType} from "../types/types";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_FETCHING_STATUS = 'SET_FETCHING_STATUS';

export type profileInitialStateType = {
  newPostText: string,
  posts: Array<PostType>,
  userProfile: object | null,
  isFetching: boolean,
}

const initialState: profileInitialStateType = {
  newPostText: '',
  posts: [],
  userProfile: null,
  isFetching: false,
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

      case SET_USER_PROFILE: {
        return {...state, userProfile: action.userProfile}
      }

      // Переключаем статус загрузки (грузится/не грузится)
      case SET_FETCHING_STATUS: {
        return {...state, isFetching: action.isFetching}
      }

      default:
        return state;
    }
  }

type AddPostActionType = {  type: typeof ADD_POST}
export const addPost = (): AddPostActionType =>
  ({type: ADD_POST})

type UpdateNewPostTextActionType = {  type: typeof UPDATE_NEW_POST_TEXT,  text: string,}
export const updateNewPostText = (text: string): UpdateNewPostTextActionType =>
  ({type: UPDATE_NEW_POST_TEXT, text})

type SetUserProfileActionType = { type: typeof SET_USER_PROFILE, userProfile: object, }
export const setUserProfile = (userProfile: object): SetUserProfileActionType =>
  ({type: SET_USER_PROFILE, userProfile})

type setFetchingStatusActionType = { type: typeof SET_FETCHING_STATUS, isFetching: boolean }
export const setFetchingStatus = (isFetching: boolean): setFetchingStatusActionType => (
  {type: SET_FETCHING_STATUS, isFetching}
)

export default profileReducer