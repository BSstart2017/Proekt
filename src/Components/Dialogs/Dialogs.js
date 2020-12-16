import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage";

const Dialogs = (props) => {

    let DialogsElements = props.State.DialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let MessageElements = props.State.MessageData.map(m => <Message name={m.message}/>)

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {DialogsElements}
            </div>
            <div className={s.Messages}>
                {MessageElements}
            </div>
            <div>
                <NewMessage/>
            </div>
        </div>
    )
}

export default Dialogs;