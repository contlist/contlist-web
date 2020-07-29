import React from 'react'
import s from './ForgetPassword.module.css'
import { login } from '../../redux/auth-reducer'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const ForgetPasswordForm = ({handleSubmit, error}) => {
    console.log('change')
    return (
        <form onSubmit={handleSubmit} className={s.form}>

            <div className={s.header}>
                <h1 className={s.Contacts}>Contacts</h1>
                <h2 className={s.SignIn}>Change password</h2>
            </div>

            <div className={s.inputs}>
                <h3 className={s.inputSubtitle}>Password</h3>
                <Field component="input" type="password" name="password" label="password" className={s.input} />
            </div>

            <div className={s.links}>
                <Link to={"/login"} className={s.link}>Cancel</Link>
                <button className={s.link}>Change password</button>
            </div>

        </form>
    )
}

const ForgetPasswordReduxForm = reduxForm({ form: 'ChangePassword' })(ForgetPasswordForm)

const ForgetPassword = (props) => {
    const Submit = (formData) => {
        props.login(formData.username, formData.password);
    }

    return <div>
        <ForgetPasswordReduxForm onSubmit={Submit} />
    </div>
}

// const mapStateToProps = (state) => ({
//     isAuth: state.auth.isAuth
// })

export default connect(null, {login})(ForgetPassword)