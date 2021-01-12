import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let DialogsElements = props.DialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let MessageElements = props.MessageData.map(m => <Message name={m.message} key={m.id}/>)
    let NewMessageBody = props.NewMessageBody


    let addNewMessage = (values) => {
        props.sendMessage(values.NewMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/Login"}/>

    return (
        <div className={s.Dialogs}>
            <div>
                {DialogsElements}
            </div>
            <div>
                {MessageElements}
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;