import React from 'react';
import WallContainer from './Wall/WallContainer';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default class Profile extends React.Component {

    render() {
        return <section className={s.profile__wrapper}>
            <ProfileInfo />
            <WallContainer />
        </section>
    }

} 