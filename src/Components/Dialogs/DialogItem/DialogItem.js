import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.Dialog + ' ' + s.action}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}

export default DialogItem;