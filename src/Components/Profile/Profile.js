import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import Profileinfo from "./Profileinfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={s.content}>
            <Profileinfo/>
            <MyPost/>
        </div>
    )
}

export default Profile;