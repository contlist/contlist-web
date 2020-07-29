import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addContact, changePassword } from '../redux/contacts-reducer' 
import s from './Sidebar.module.css'


const AddContactsForm = ({setAddContactMode, addContactMode, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <h3 className={s.inputSubtitle}>Username</h3>
                <Field component="input" type="text" name="username" label="username1" className={s.input} />
                <h3 className={s.inputSubtitle}>Phone number</h3>
                <Field component="input" type="text" name="phoneNumber" label="phoneNumber1" className={s.input} />
                <button className={s.buttonSubmit}>add contact</button>
            </div>
        </form>
    )
}

const AddContactsReduxForm = reduxForm({ form: 'addContact' })(AddContactsForm)

const ChangePasswordForm = ({changePasswordMode, changePassword, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <h3 className={s.inputSubtitle}>New password</h3>
                <Field component="input" type="text" name="password" label="password1" className={s.input} />
                <button className={s.buttonSubmit}>change password</button>
            </div>
        </form>
    )
}

const ChangePasswordReduxForm = reduxForm({ form: 'changePassword' })(ChangePasswordForm)

const Sidebar = (props) => {
    const SubmitAddContact = formData => {
        props.addContact(formData.username, formData.phoneNumber, props.token)
    }

    const SubmitChangePassword = formData => {
        props.changePassword(formData.password, props.token)
    }

    let [addContactMode, setAddContactMode] = React.useState(false)
    let [changePassword, changePasswordMode] = React.useState(false)

    return <div className={s.sidebar}>

        <button className={s.button} onClick={() => {
            setAddContactMode(!addContactMode)
            changePasswordMode(false)
        }}>New contact</button>
        {addContactMode 
            ? <AddContactsReduxForm onSubmit={SubmitAddContact} setAddContactMode={setAddContactMode} addContactMode={addContactMode} /> 
            : null}

        <button className={s.button} onClick={() => {
            changePasswordMode(!changePassword)
            setAddContactMode(false)
        }}>Change Password</button>
        {changePassword 
            ? <ChangePasswordReduxForm onSubmit={SubmitChangePassword} changePasswordMode={changePasswordMode} changePassword={changePassword} /> 
            : null}

    </div>
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    addContactMode: state.contacts.addContactMode
})

export default connect(mapStateToProps, {addContact, changePassword})(Sidebar)