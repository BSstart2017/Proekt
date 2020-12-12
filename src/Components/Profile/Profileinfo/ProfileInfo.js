import React from 'react';
import s from './Profileinfo.module.css';

const Profileinfo = () => {
    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-07/1562069947_1.jpg" alt="logo2"/>
            </div>
            <div className={s.DispleiblockAddPost}>
                <h3>Мои посты!</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Добавить пост</button>
                </div>
            </div>
        </div>
    )
}

export default Profileinfo;