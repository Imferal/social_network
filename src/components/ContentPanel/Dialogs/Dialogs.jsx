import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.scss';
import Message from './Message/Message';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <h2>Диалоги</h2>
            <div className={s.dialogs__container}>
                <div className={s.dialogs_items}>
                    <Dialog />
                </div>

                <div>
                    <Message />
                </div>
            </div>
        </div>
    )
}

export default Dialogs