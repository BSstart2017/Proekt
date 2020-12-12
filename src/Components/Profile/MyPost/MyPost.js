import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";


const MyPost = () => {
    return (
        <div className={s.DescriptionPost}>
            <Post message='Че молчим на че не пишем а?' LikeCount='9'/>
            <Post message='Привет Мир!' LikeCount='3'/>
            <Post message='Ну здарова чувак!' LikeCount='333'/>
        </div>
    )
}

export default MyPost;