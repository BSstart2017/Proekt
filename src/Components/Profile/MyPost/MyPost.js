import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";


const MyPost = (props) => {

    let PostsElements = props.PostsData.map(p => <Post message={p.post} LikeCount={p.LikeCount}/>)

    let NewPostElement = React.createRef();

    let NewPost = () => {
        props.AddPost();
    }

    let onchangeNewPostText = () => {
        let text = NewPostElement.current.value;
        props.apdateNewPostText(text);
    }

    return (
        <div>
            <div className={s.DispleiblockAddPost}>
                <h3>Мои посты!</h3>
                <div>
                    <textarea ref={NewPostElement} value={props.newPostText} onChange={onchangeNewPostText}/>
                </div>
                <div>
                    <button onClick={NewPost}>Добавить пост</button>
                </div>
            </div>
            <div className={s.DescriptionPost}>{PostsElements}</div>
        </div>
    )
}

export default MyPost;