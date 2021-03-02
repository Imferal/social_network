import {connect} from "react-redux"
import {addPost, updateNewPostText} from "../../../../redux/profileReducer"
import Wall from "./Wall"

const mapStateToProps = (state: any) => {
    return {
        newPostText: state.profile.newPostText,
        posts: state.profile.posts,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => dispatch(addPost()),
        updateNewPostText: (text: string) => dispatch(updateNewPostText(text))
    }
}

const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall)

export default WallContainer