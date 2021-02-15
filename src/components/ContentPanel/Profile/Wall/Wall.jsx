import React from 'react';
import s from './Wall.module.scss';

export default class Wall extends React.Component {

    render() {
        return (
            <div className={s.wall + ' ' + s.wall_indent}>
                <h2>Wall</h2>
                <form action="#" className={s.wall__form}>
                    <textarea
                        className={s.wall__newMessage}
                        name="message"
                        id="message"
                        placeholder='Расскажите о чём-нибудь здесь...' />
                    <button className={s.wall__sentButton + ' ' + s.wall__sentButton_effect} type='submit'>
                        <span>Запостить</span>
                    </button>
                </form>
            </div>)
    }

} 