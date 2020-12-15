import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";


const MyPost = (props) => {

    let PostsElements = props.PostsData.map(p => <Post message={p.post} LikeCount={p.LikeCount}/>)

    return (
        <div className={s.DescriptionPost}>
            {PostsElements}
        </div>
    )
}

export default MyPost;