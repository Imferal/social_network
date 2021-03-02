import React from "react";
import s from './Dialog.module.scss';

type Props = {
    dialogs: Array<object>
}

const Dialog = (props: Props) => {
    return (
        <div className={s.dialog}>
            {props.dialogs}
        </div>
    )
}

export default Dialog