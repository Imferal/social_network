import React from 'react';
import s from './ProfileInfo.module.scss';
import profile_avatar from './../../../../img/profile/profile_avatar.jpg';
import profileImg from './../../../../img/profile/profile_photo.jpg';

export default class ProfileInfo extends React.Component {

    render() {
        return (<div className={s.profileInfo}>
            <img className={s.profileInfo__img} src={profileImg} alt="Дорога через мистический лес"/>
            <div className={s.profileInfo__avatar}>
                <img src={profile_avatar} alt="Аватар пользователя"/>
            </div>
        </div>)
    }

}