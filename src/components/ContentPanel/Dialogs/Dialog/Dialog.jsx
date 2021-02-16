import React from "react";
import s from './Dialog.module.scss'

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            {props.dialogs}
        </div>
    )
}

export default Dialog