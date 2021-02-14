import React from 'react';
import s from './Profile.module.scss';

export default class Profile extends React.Component {

    render() {
        return <section className={s.profile__wrapper}>
            <h2 className={s.profile__content}>Это панель навигации</h2>
        </section>
    }

}