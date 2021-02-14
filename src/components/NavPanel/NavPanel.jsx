import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavPanel.module.scss';

export default class NavPanel extends React.Component {

    render() {
        return <section className={s.navPanel}>
            {/* <h2 className={s.navPanel__content}>Это панель навигации</h2> */}
            <nav>
                <ul className={s.navPanel__list}>
                    <li className={`${s.navPanel__item} ${s.navPanel__item_active}`}><NavLink className={s.navPanel__link} to="/profile">Профиль</NavLink></li>
                    <li className={s.navPanel__item}><NavLink className={s.navPanel__link} to="/dialogs">Диалоги</NavLink></li>
                </ul>
            </nav>
        </section>
    }

}