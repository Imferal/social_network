import React from "react";
import axios from "axios";
import Preloader from "../../_shared/Preloader/Preloader";
import {setFetchingStatus, setUserProfile} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/state";
import {ProfileType} from "../../../types/types";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";

type Props = {
  isFetching: boolean,
  setFetchingStatus: (isFetching: boolean) => void,
  setUserProfile: (profile: object) => void,
  match: {
    isExact: boolean,
    params: { userId: string },
    userId: string,
    path: string,
    url: string,
  }
}

class ProfileContainer extends React.Component<Props, ProfileType> {


  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    let userId = this.props.match.params.userId

    this.props.setFetchingStatus(true)
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
        this.props.setFetchingStatus(false)
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : <Profile/>}
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isFetching: state.profile.isFetching,
})

// @ts-ignore
const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setFetchingStatus, setUserProfile})(WithUrlDataContainerComponent)