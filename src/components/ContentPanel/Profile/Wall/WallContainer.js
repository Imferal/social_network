import { connect } from "react-redux"
import { addPostText, updateNewPostText } from "../../../../redux/profileReducer"
import Wall from "./Wall"

const mapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostText: () => dispatch(addPostText()),
        updateNewPostText: (text) => dispatch(updateNewPostText(text))
    }
}

const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall)

export default WallContainer