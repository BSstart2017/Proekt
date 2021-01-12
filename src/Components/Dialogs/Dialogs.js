import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let DialogsElements = props.DialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let MessageElements = props.MessageData.map(m => <Message name={m.message} key={m.id}/>)
    let NewMessageBody = props.NewMessageBody

    const AddMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component="textarea" name="NewMessageBody" placeholder="Введите текст сообщения..." />
                </div>
                <div>
                    <button>Новое сообщение</button>
                </div>
            </form>
        )
    }

    const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


export default Dialogs;