import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.Dialog}>
        <div>
            <img src="https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=1400&h=9999" alt="ava"/>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    </div>
}

export default DialogItem;