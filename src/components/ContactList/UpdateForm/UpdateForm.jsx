import React from 'react'
import s from './UpdateForm.module.css'
import { Field, reduxForm } from 'redux-form';
import { updateContact } from '../../redux/contacts-reducer';
import { connect } from 'react-redux';


const UpdateContactForm = ({updateContactMode, setContactMode, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.header}>
                <h2>Change contact information</h2>
            </div>
            
            <div className={s.inputs}>
                <h3 className={s.inputSubtitle}>Contact Name</h3>
                <Field component="input" type="text" name="contact_name" label="name1" className={s.input} />
                <h3 className={s.inputSubtitle}>Phone Number</h3>
                <Field component="input" type="text" name="phone_number" label="phoneNumber1" className={s.input} />
            </div>

            <div className={s.links}>
                <button onClick={() => setContactMode(!updateContact)} type="button" className={s.link}>Cancel</button>
                <button className={s.link}>Save</button>
            </div>
        </form>
    )
}

const UpdateContactReduxForm = reduxForm({ form: 'updateContact' })(UpdateContactForm)

const UpdateContact = (props) => {
    const Submit = (formData) => {
        props.updateContact(formData.contact_name, formData.phone_number, props.currentId, props.token)
    }

    return <div>
        <UpdateContactReduxForm onSubmit={Submit} updateContactMode={props.updateContactMode} setContactMode={props.setContactMode} />
    </div>
}

export default connect(null, {updateContact})(UpdateContact)