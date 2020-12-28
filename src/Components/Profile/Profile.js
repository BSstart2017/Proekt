import React from 'react';
import s from './Profile.module.css';
import Profileinfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostContainers";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <Profileinfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;