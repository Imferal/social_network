import React from "react";
import s from './Dialog.module.scss'

const Dialog = () => {
    return (
        <div className={s.dialog}>
            <img className={s.dialog__avatar} src="https://icon-library.com/images/cool-anime-icon/cool-anime-icon-3.jpg" alt="" />
            <span>Like</span>
        </div>
    )
}

export default Dialog