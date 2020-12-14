import React from "react";
import s from './Message.module.css';

const Message = (props) => {
    return <div className={s.Message}>{props.name}</div>
}

export default Message;