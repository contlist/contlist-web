import React from 'react'
import s from './Login.module.css'
import { login } from '../../redux/auth-reducer'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={s.form}>

            <div className={s.header}>
                <h1 className={s.Contacts}>Contacts</h1>
                <h2 className={s.SignIn}>Sign in</h2>
            </div>

            <div className={s.inputs}>
                <h3 className={s.inputSubtitle}>Username</h3>
                <Field component="input" type="text" name="username" label="Name1@gmail.com" className={s.input} />
                <h3 className={s.inputSubtitle}>Password</h3>
                <Field component="input" type="password" name="password" label="password" className={s.input} />
            </div>

            <div className={s.links}>
                <Link to={"/registration"} className={s.link}>Create account</Link>
                <button className={s.link}>Log In</button>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const Submit = (formData) => {
        props.login(formData.username, formData.password);
    }

    if (props.isAuth) 
        return <Redirect to={"/contacts"} />

    return <div>
        <LoginReduxForm onSubmit={Submit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)