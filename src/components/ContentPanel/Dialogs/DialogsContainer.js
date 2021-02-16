import { connect } from "react-redux"
import { addMessage, updateNewMessageText } from "../../../redux/dialogReducer"
import Dialogs from "./Dialogs"

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialog.newMessageText,
        dialogs: state.dialog.dialogs,
        messages: state.dialog.messages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessage()),
        updateNewMessageText: (text) => dispatch(updateNewMessageText(text))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer