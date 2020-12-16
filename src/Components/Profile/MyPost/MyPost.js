import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";


const MyPost = (props) => {

    let PostsElements = props.PostsData.map(p => <Post message={p.post} LikeCount={p.LikeCount}/>)

    let NewPostElement = React.createRef();

    let NewPost = () => {
        debugger;
        let text = NewPostElement.current.value;
        props.AddPost(text);
    }

    return (
        <div>
            <div className={s.DescriptionPost}>{PostsElements}</div>
            <div className={s.DispleiblockAddPost}>
                <h3>Мои посты!</h3>
                <div>
                    <textarea ref={NewPostElement}></textarea>
                </div>
                <div>
                    <button onClick={NewPost}>Добавить пост</button>
                </div>
            </div>
        </div>
)
}

export default MyPost;