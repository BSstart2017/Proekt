import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import Profileinfo from "./Profileinfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <Profileinfo/>
            <MyPost PostsData={props.State.PostsData}
                    newPostText={props.State.newPostText}
                    dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;