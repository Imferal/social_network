import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './NavPanel.module.scss';

export default function NavPanel() {

  let menu = [{
    uri: '/profile',
    text: 'Профиль',
  }, {
    uri: '/dialogs',
    text: 'Диалоги'
  }, {
    uri: '/users',
    text: 'Пользователи'
  }]

  return <section className={s.navPanel}>
    <h2>Навигация</h2>
    <nav className={s.navPanel__menu}>
      <ul className={s.navPanel__list}>
        {menu.map((el, i) => {
            return (
              <li key={i} className={`${s.navPanel__item} ${s.navPanel__item_indent}`}>
                <NavLink className={s.navPanel__link} to={el.uri}
                         activeClassName={s.navPanel__link_active}>{el.text}</NavLink>
              </li>
            )
          }
        )}
      </ul>
    </nav>
  </section>
}