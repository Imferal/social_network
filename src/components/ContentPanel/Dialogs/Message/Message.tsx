import React from 'react';
import s from './Message.module.scss'

type PropsType = {
    messages: Array<object>
}

const Message = (props: PropsType) => {
    return (
        <div className={s.message}>
            {props.messages}
        </div>
    )
}

export default Message