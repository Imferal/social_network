import React from 'react';
import Wall from './Wall/Wall';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default class Profile extends React.Component {

    render() {
        return <section className={s.profile__wrapper}>
            <ProfileInfo />
            <Wall />
        </section>
    }

} 