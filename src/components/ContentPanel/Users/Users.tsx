import * as React from "react"
import s from './Users.module.scss'
import avatar_male from '../../../assets/img/avatar_male.svg'
import {UserType} from "../../../types/types";
import { NavLink } from "react-router-dom";

type Props = {
  users: Array<UserType>
  totalUsersCount: number,
  currentPage: number,
  pageSize: number,
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  onPageChanged: (page: number) => void
}

const Users = (props: Props) => {

  let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.pagination}>
        {pages.map((page: number) => {
          return <span
            key={page}
            className={`${s.pagination__button} ${page === props.currentPage && s.pagination__button_selected}`}
            onClick={() => props.onPageChanged(page)}
          >{page}</span>
        })}
      </div>
      {props.users.map(user => <div className={s.user} key={user.id}>
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img src={
              user.photos.small ?? avatar_male
            } alt={`Фотография пользователя ${user.name}`}/>
            </NavLink>
            <button className={s.user__followed} onClick={() => {
              user.followed ?
                props.unFollowUser(user.id) :
                props.followUser(user.id)
            }}>
              {user.followed ? 'unfollow' : 'follow'}
            </button>
          </div>
          <div>
            <h3>{user.name}</h3>
            <p>Статус: {user.status}</p>
          </div>
        </div>
      )}
    </div>
  )
}


export default Users