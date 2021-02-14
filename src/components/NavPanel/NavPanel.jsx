import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavPanel.module.scss';

export default class NavPanel extends React.Component {

    render() {
        return <section className={s.navPanel}>
            <h2>Навигация</h2>
            <nav className={s.navPanel__menu}>
                <ul className={s.navPanel__list}>
                    <li className={`${s.navPanel__item} ${s.navPanel__item_indent}`}>
                        <NavLink className={s.navPanel__link} to="/profile" activeClassName={s.navPanel__link_active}>Профиль</NavLink>
                    </li>
                    <li className={`${s.navPanel__item} ${s.navPanel__item_indent}`}>
                        <NavLink className={s.navPanel__link} to="/dialogs" activeClassName={s.navPanel__link_active}>Диалоги</NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    }

}