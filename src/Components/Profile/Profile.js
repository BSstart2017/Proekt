import React from 'react';
import s from './Profile.module.css';
import Profileinfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostContainers";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <Profileinfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
