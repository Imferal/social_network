import {connect} from "react-redux";
import { AppStateType } from "../../../../redux/state";
import ProfileInfo from "./ProfileInfo";

const mapStateToProps = (state: AppStateType) => ({
  profile: state.profile.userProfile,
})

export default connect(mapStateToProps, {})(ProfileInfo)