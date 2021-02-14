import React from 'react';
import s from './Header.module.scss';

export default class Header extends React.Component {

    render() {
        return <header className={s.header}>
            <h2 className={s.header__wrapper}>Это шапка</h2>
        </header>
    }

}