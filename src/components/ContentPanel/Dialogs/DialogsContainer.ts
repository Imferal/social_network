import { connect } from "react-redux"
import { addMessage, updateNewMessageText } from "../../../redux/dialogReducer"
import Dialogs from "./Dialogs"

const mapStateToProps = (state : any) => {
    return {
        newMessageText: state.dialog.newMessageText,
        dialogs: state.dialog.dialogs,
        messages: state.dialog.messages,
    }
}

const mapDispatchToProps = (dispatch : any) => {
    return {
        addMessage: () => dispatch(addMessage()),
        updateNewMessageText: (text : string) => dispatch(updateNewMessageText(text))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer