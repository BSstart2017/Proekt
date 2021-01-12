import React from 'react';
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={"login"} component={"input"}/></div>
            <div><Field placeholder={"Password"} name={"password"} component={"input"}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={"input"}/>Запомните меня</div>
            <div><button>Залогиниться</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return <div>
        <h1>Залогинься что бы было то что надо!</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}

export default Login;