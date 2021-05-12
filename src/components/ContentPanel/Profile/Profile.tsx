import React from 'react';
import WallContainer from './Wall/WallContainer';
import s from './Profile.module.scss';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = () => {

  return (
    <section className={s.profile__wrapper}>
      <ProfileInfoContainer/>
      <WallContainer/>
    </section>
  )
}

export default Profile