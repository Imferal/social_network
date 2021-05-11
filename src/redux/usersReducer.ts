import {UserType} from "../types/types";

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

export type usersInitialStateType = {
  users: Array<UserType>,
  totalUsersCount: number,
  currentPage: number,
  pageSize: number,
}

const initialState: usersInitialStateType = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 50,
}

const usersReducer =
  (state = initialState, action: any): usersInitialStateType => {
    switch (action.type) {

      // Находим юзера по id и возвращаем его изменённую копию
      case FOLLOW_USER: {
        return {
          ...state,
          users: state.users.map(user => {
            if (user.id === action.id) {
              return {...user, followed: true}

            }
            return user
          })
        }
      }

      case UNFOLLOW_USER: {
        return {
          ...state,
          users: state.users.map(user => {
            if (user.id === action.id) {
              return {...user, followed: false}

            }
            return user
          })
        }
      }

      // Меняем активную страницу
      case SET_CURRENT_PAGE: {
        return {...state, currentPage: action.page}
      }

      // Добавляем пользователей
      case SET_USERS: {
        return {...state, users: action.users}
      }

      // Добавляем общее число пользователей
        case SET_TOTAL_COUNT: {
          return {...state, totalUsersCount: action.totalCount}
        }

      default:
        return state;
      }
    }

    export default usersReducer

    type followUserActionType = { type: typeof FOLLOW_USER, id: number }
    export const followUser = (id: number): followUserActionType => (
      {type: FOLLOW_USER, id}
    )

    type unFollowUserActionType = { type: typeof UNFOLLOW_USER, id: number }
    export const unFollowUser = (id: number): unFollowUserActionType => (
      {type: UNFOLLOW_USER, id}
    )

    type setCurrentPageActionType = { type: typeof SET_CURRENT_PAGE, page: number }
    export const setCurrentPage = (page: number): setCurrentPageActionType => (
      {type: SET_CURRENT_PAGE, page}
    )

    type setUsersActionType = { type: typeof SET_USERS, users: Array<UserType> }
    export const setUsers = (users: Array<UserType>): setUsersActionType => (
      {type: SET_USERS, users}
    )

type setTotalCountActionType = { type: typeof SET_TOTAL_COUNT, totalCount: number }
    export const setTotalCount = (totalCount: number): setTotalCountActionType => (
      {type: SET_TOTAL_COUNT, totalCount}
    )