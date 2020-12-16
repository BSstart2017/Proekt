import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import Profileinfo from "./Profileinfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <Profileinfo/>
            <MyPost PostsData={props.State.PostsData}
            AddPost={props.AddPost}/>
        </div>
    )
}

export default Profile;