import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";


const MyPost = () => {

    let PostsData = [
        {id: 1, post: 'Че молчим на че не пишем а?', LikeCount: '9' },
        {id: 2, post: 'Привет Мир!', LikeCount: '12' },
        {id: 3, post: 'Ну здарова чувак!', LikeCount: '32' }
    ]

    return (
        <div className={s.DescriptionPost}>
            <Post message={PostsData[0].post} LikeCount={PostsData[0].LikeCount}/>
            <Post message={PostsData[1].post} LikeCount={PostsData[1].LikeCount}/>
            <Post message={PostsData[2].post} LikeCount={PostsData[2].LikeCount}/>
        </div>
    )
}

export default MyPost;