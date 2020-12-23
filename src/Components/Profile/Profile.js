import React from 'react';
import s from './Profile.module.css';
import Profileinfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostContainers";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <Profileinfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;