import Users from "./Users";
import {AppStateType} from "../../../redux/state";
import {connect} from "react-redux";
import {followUser, setCurrentPage, setTotalCount, setUsers, unFollowUser} from "../../../redux/usersReducer";
import {UserType} from "../../../types/types";
import * as React from "react";
import axios from "axios";

type Props = {
  users: Array<UserType>
  totalUsersCount: number,
  currentPage: number,
  pageSize: number,
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (page: number) => void
  setTotalCount: (page: number) => void
}

type Response = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

class UsersContainer extends React.Component<Props, Response> {

  constructor(props: Props) {
    super(props)
  }

  getUsers = () => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
      })
  }

  componentDidMount() {
    this.getUsers()
  }

  onPageChanged = (page: number) => {
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
      })
  }

  render() {
    return (
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             followUser={this.props.followUser}
             unFollowUser={this.props.unFollowUser}
      />
    )
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.users.users,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    followUser: (id: number) => {
      dispatch(followUser(id))
    },
    unFollowUser: (id: number) => {
      dispatch(unFollowUser(id))
    },
    setCurrentPage: (page: number) => {
      dispatch(setCurrentPage(page))
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUsers(users))
    },
    setTotalCount: (totalCount: number) => {
      dispatch(setTotalCount(totalCount))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
