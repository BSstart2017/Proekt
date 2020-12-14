import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";

const Dialogs = () => {

    let DialogsData = [
        {id: 1, name: 'Саня'},
        {id: 2, name: 'Андрей'},
        {id: 3, name: 'Никита'},
        {id: 4, name: 'Олеся'},
        {id: 5, name: 'Полина'},
        {id: 6, name: 'Алиса'}
    ]

    let MessageData = [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Ну здарова'},
        {id: 3, message: 'Здоровей видали'}
    ]

    let DialogsElements = DialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let MessageElements = MessageData.map(m => <Message name={m.message}/>)

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {DialogsElements}
            </div>
            <div className={s.Messages}>
                {MessageElements}
            </div>
        </div>
    )
}

export default Dialogs;