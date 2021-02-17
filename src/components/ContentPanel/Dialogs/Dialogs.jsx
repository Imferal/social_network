import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.scss';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogs =
        props.dialogs
            .map((e, i) => {
                return (
                    <p key={i}>{e.name}</p>
                )
            })

    let messages =
        props.messages
            .map((e, i) => {
                return (

                    <p key={i}>{e.message}</p>

                )
            })

    let onSendMessageClick = () => {
        props.addMessage()
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <h2>Диалоги</h2>
            <div className={s.dialogs__container}>
                <div className={s.dialogs_items}>
                    <Dialog dialogs={dialogs} />
                </div>

                <div>
                    <Message messages={messages} />
                </div>

                <textarea
                    value={props.newMessageText}
                    onChange={onNewMessageChange}
                    placeholder='Введите сообщение...'></textarea>
                <button onClick={onSendMessageClick}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs