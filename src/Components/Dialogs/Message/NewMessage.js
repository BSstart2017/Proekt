import React from "react";
import s from './Message.module.css';

const NewMessage = (props) => {
    return (
            <div className='NewMessage'>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Отправить сообщение</button>
                </div>
            </div>
    )
}

export default NewMessage;