import React from 'react'
import s from './Registration.module.css'
import { register } from '../../redux/auth-reducer'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';


const RegistrationForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={s.form}>

            <div className={s.header}>
                <h1 className={s.Contacts}>Contacts</h1>
                <h2 className={s.SignIn}>Create your Account</h2>
            </div>

            <div className={s.inputs}>
                <h3 className={s.inputSubtitle}>Username</h3>
                <Field component="input" type="text" name="username" label="Name1@gmail.com" className={s.input} />
                <h3 className={s.inputSubtitle}>Password</h3>
                <Field component="input" type="password" name="password" label="password" className={s.input} />
            </div>

            <div className={s.links}>
                <Link to={"/login"} className={s.link}>Cancel</Link>
                <button className={s.link} onClick={() => <Redirect to={'/login'}></Redirect>}>Register</button>
            </div>

        </form>
    )
}

const RegistrationReduxForm = reduxForm({ form: 'registration' })(RegistrationForm)

const Registration = (props) => {
    const Submit = (formData) => {
        props.register(formData.username, formData.password);
    }

    if (props.isAuth) 
        return <Redirect to={"/contacts"} />

    return <div>
        <RegistrationReduxForm onSubmit={Submit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {register})(Registration)