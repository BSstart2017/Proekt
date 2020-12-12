import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=1400&h=9999" alt="ava"/>
            {props.message}
            <div>
                <span>Like</span> {props.LikeCount}
            </div>
        </div>
    )
}

export default Post;