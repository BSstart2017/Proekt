import React from 'react';
import s from './Profileinfo.module.css';

const Profileinfo = () => {

let NewPostElement = React.createRef();

let AddPost = () => {
    let text = NewPostElement.current.value;
    alert(text);
}

    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-07/1562069947_1.jpg" alt="logo2"/>
            </div>
            <div className={s.DispleiblockAddPost}>
                <h3>Мои посты!</h3>
                <div>
                    <textarea ref={NewPostElement}></textarea>
                </div>
                <div>
                    <button onClick={AddPost}>Добавить пост</button>
                </div>
            </div>
        </div>
    )
}

export default Profileinfo;