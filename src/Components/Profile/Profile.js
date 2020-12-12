import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://klike.net/uploads/posts/2019-07/1562069947_1.jpg" alt="logo2"/>
            </div>
            <MyPost/>
        </div>
    )
}

export default Profile;