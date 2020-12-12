import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";


const MyPost = () => {

    let PostsData = [
        {id: 1, post: 'Че молчим на че не пишем а?', LikeCount: '9' },
        {id: 2, post: 'Привет Мир!', LikeCount: '12' },
        {id: 3, post: 'Ну здарова чувак!', LikeCount: '32' }
    ]

    let PostsElements = PostsData.map(p => <Post message={p.post} LikeCount={p.LikeCount}/>)

    return (
        <div className={s.DescriptionPost}>
            {PostsElements}
        </div>
    )
}

export default MyPost;