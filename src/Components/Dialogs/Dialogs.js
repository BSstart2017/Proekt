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

    let DialogsData = [
        {id: 1, name: 'Саня' },
        {id: 2, name: 'Андрей' },
        {id: 3, name: 'Никита' },
        {id: 4, name: 'Олеся' },
        {id: 5, name: 'Полина' },
        {id: 6, name: 'Алиса' }
    ]

   let MessageData = [
        {id: 1, message: 'Привет' },
        {id: 2, message: 'Ну здарова' },
        {id: 3, message: 'Здоровей видали' }
    ]

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
                <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}/>
                <DialogItem name={DialogsData[5].name} id={DialogsData[5].id}/>
            </div>
            <div className={s.Messages}>
                <Message name={MessageData[0].message}/>
                <Message name={MessageData[1].message}/>
                <Message name={MessageData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;