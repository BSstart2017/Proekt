import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/State";

const Dialogs = (props) => {

    let State = props.store.getState().DialogsPage;

    let DialogsElements = State.DialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let MessageElements = State.MessageData.map(m => <Message name={m.message}/>)
    let NewMessageBody = State.NewMessageBody;

    let OnNewMessageChange = (e) => {
     let body = e.target.value;
     props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    let OnSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }


    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {DialogsElements}
            </div>
            <div className={s.Messages}>
                {MessageElements}
                <div>
                    <div>
                        <textarea
                            value={NewMessageBody}
                            onChange={OnNewMessageChange}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={OnSendMessageClick}>Новое сообщение</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;