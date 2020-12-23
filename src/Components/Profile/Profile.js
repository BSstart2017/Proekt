import React from 'react';
import s from './Profile.module.css';
import Profileinfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostContainers";

const Profile = () => {
    return (
        <div className={s.content}>
            <Profileinfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;