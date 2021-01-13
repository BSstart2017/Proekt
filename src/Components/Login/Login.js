import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Email"} name={"email"} component={Input}
                        validate={[required, maxLength20]}/></div>
            <div><Field placeholder={"Password"} name={"password"} component={Input} type={"password"}
                        validate={[required, maxLength20]}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={Input}
                        validate={[required]}/>Запомните меня</div>
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