import React from 'react';
import Dialog from './Dialog/Dialog';
// import s from 'Dialogs.module.scss';

const Dialogs = () => {
    return (
        <div>
            Dialogs
            <div>
                <textarea name="comment" id="" cols="30" rows="10"></textarea>
                <button>Add Dialog</button>
            </div>

            <div>
                <Dialog />
            </div>
        </div>
    )
}

export default Dialogs