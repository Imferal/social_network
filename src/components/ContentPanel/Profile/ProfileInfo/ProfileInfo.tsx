import React from 'react';
import s from './ProfileInfo.module.scss';
import profile_avatar from '../../../../assets/img/avatar_male.svg';
import profileImg from '../../../../assets/img/profile_photo.jpg';
import Preloader from "../../../_shared/Preloader/Preloader";

type Props = {
  profile: any,
}

const ProfileInfo = (props: Props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (<div className={s.profileInfo}>
    <img className={s.profileInfo__bg} src={profileImg} alt="Дорога через мистический лес"/>
    <div className={s.profileInfo__avatarContainer}>
      <div className={s.profileInfo__avatar}>
        <img src={props.profile.photos?.small ?? profile_avatar} alt="Аватар пользователя"/>
      </div>
    </div>
    <div className={s.profileInfo__content}>
      <h3 className={s.profileInfo__name}>{`${props.profile.fullName} (${props.profile.userId})`}</h3>
      <div className={s.profileInfo__job}>
        <div className={s.profileInfo__lookingForAJob}>
          {props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}
        </div>
        <div className={s.profileInfo__lookingForAJobDescription}>
          {props.profile.lookingForAJobDescription}
        </div>
      </div>
      <div className={s.profileInfo__aboutMe}>
        {props.profile.aboutMe}
      </div>
      <div className={s.profileInfo__contacts}>
        <div className={s.profileInfo__contacts_facebook}>
          {props.profile.contacts.facebook}
        </div>
        <div className={s.profileInfo__contacts_vk}>
          {props.profile.contacts.vk}
        </div>
        <div className={s.profileInfo__contacts_twitter}>
          {props.profile.contacts.twitter}
        </div>
        <div className={s.profileInfo__contacts_instagram}>
          {props.profile.contacts.instagram}
        </div>
        <div className={s.profileInfo__contacts_youtube}>
          {props.profile.contacts.youtube}
        </div>
        <div className={s.profileInfo__contacts_github}>
          {props.profile.contacts.github}
        </div>
        <div className={s.profileInfo__contacts_mainLink}>
          {props.profile.contacts.mainLink}
        </div>
        <div className={s.profileInfo__contacts_website}>
          {props.profile.contacts.website}
        </div>
      </div>
    </div>

  </div>)
}

export default ProfileInfo