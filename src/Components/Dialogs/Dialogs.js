import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.Dialog + ' ' + s.action}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.Message}>{props.name}</div>
}


const Dialogs = () => {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                <DialogItem name="Саня" id="1"/>
                <DialogItem name="Андрей" id="2"/>
                <DialogItem name="Никита" id="3"/>
                <DialogItem name="Олеся" id="4"/>
                <DialogItem name="Полина" id="5"/>
                <DialogItem name="Алиса" id="6"/>
            </div>
            <div className={s.Messages}>
                <Message name='Привет'/>
                <Message name='Ну здарова'/>
                <Message name='Здоровей видали'/>
            </div>
        </div>
    )
}

export default Dialogs;