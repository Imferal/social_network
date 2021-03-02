import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.scss';
import Message from './Message/Message';
import {DialogType, MessageType} from "../../../types/types";

type Props = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    addMessage: () => void
    updateNewMessageText: (text: string) => void
}

const Dialogs = (props: Props) => {
    let jsxDialogs = props.dialogs.map((e, i) => {
        return <p key={i}>{e.name}</p>
    })

    let jsxMessages = props.messages.map((e, i) => {
        return (
            <div key={i}>
                <span>{e.date}</span>
                <p>{e.message}</p>
            </div>
        )
    })

    let onSendMessageClick = () => {
        props.addMessage()
    }

    let onNewMessageChange = (e: any) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <h2>Диалоги</h2>
            <div className={s.dialogs__container}>
                <div className={s.dialogs_items}>
                    <Dialog dialogs={jsxDialogs}/>
                </div>

                <div>
                    <Message messages={jsxMessages}/>
                </div>
            </div>

            <textarea
                value={props.newMessageText}
                onChange={onNewMessageChange}
                placeholder='Введите сообщение...'>
            </textarea>
            <button onClick={onSendMessageClick}>Отправить</button>
        </div>
    )
}

export default Dialogs