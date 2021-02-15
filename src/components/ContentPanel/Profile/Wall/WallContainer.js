import { connect } from "react-redux"
import { addPost, updateNewPostText } from "../../../../redux/profileReducer"
import Wall from "./Wall"

const mapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText,
        posts: state.profile.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPost()),
        updateNewPostText: (text) => dispatch(updateNewPostText(text))
    }
}

const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall)

export default WallContainer