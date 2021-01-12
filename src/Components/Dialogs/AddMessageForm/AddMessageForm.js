import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../Common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


const  maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="NewMessageBody"
                       validate={[required, maxLength50]}
                       placeholder="Введите текст сообщения..." />
            </div>
            <div>
                <button>Новое сообщение</button>
            </div>
        </form>
    )
}


export default reduxForm({form: "dialog-add-message-form"})(AddMessageForm);