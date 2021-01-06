import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let DialogsElements = props.DialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let MessageElements = props.MessageData.map(m => <Message name={m.message} key={m.id}/>)
    let NewMessageBody = props.NewMessageBody;

    let OnNewMessageChange = (e) => {
     let body = e.target.value;
     props.updateNewMessageBody(body)
    }
    let OnSendMessageClick = () => {
        props.sendMessage()
    }

    if (!props.isAuth) return <Redirect to={"/Login"}/>

    return (
        <div className={s.Dialogs}>
            <div>
                {DialogsElements}
            </div>
            <div>
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