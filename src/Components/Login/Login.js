import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "./../Common/FormsControl/FormsControls.module.css";

const maxLength20 = maxLengthCreator(20);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email",Input, [required, maxLength20] )}
            {createField("Password","password", Input, [required, maxLength20], {type: "password"} )}
            {createField(null,"rememberMe", Input, [], {type: "checkbox"},"rememberMe" )}

            {error && <div className={style.FormSummaryError}>{error}</div>}
            <div><button>Залогиниться</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth){
        return <Redirect to="/profile" />
    }

    return <div>
        <h1>Залогинься что бы было то что надо!</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
