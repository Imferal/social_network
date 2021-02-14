import React from 'react';
import s from './Wall.module.scss';

export default class Wall extends React.Component {

    render() {
        return (
            <div className={s.wall + ' ' + s.wall_indent}>
                <h2>Wall</h2>
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Расскажите о чём-нибудь здесь...'></textarea>
                <button type='submit'>Запостить</button>
            </div>)
    }

} 