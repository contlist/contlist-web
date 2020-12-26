import React from 'react'
import './UpdateForm.css'
import { Field, reduxForm } from 'redux-form';
import { updateContact } from '../../redux/contacts-reducer';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup'


const UpdateContactForm = ({ setContactMode, handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit} className="popup-form">
			<div className="popup-header">
				<h2>Change contact information</h2>
			</div>

			<div className="popup-content">
				<h3 className="popup-inputSubtitle">Contact Name</h3>
				<Field component="input" type="text" name="contact_name" label="name1" className="popup-input" />
				<h3 className="popup-inputSubtitle">Phone Number</h3>
				<Field component="input" type="text" name="phone_number" label="phoneNumber1" className="popup-input" />
			</div>

			<div className="popup-footer">
				<button onClick={() => setContactMode(false)} type="button" className="link">Cancel</button>
				<button className="link">Save</button>
			</div>
		</form>
	)
}

const UpdateContactReduxForm = reduxForm({ form: 'updateContact' })(UpdateContactForm)

const UpdateContact = (props) => {
	const Submit = (formData) => {
		props.updateContact(formData.contact_name, formData.phone_number, props.currentId, props.token)
	}

	return <Popup open={props.updateContactMode} closeOnDocumentClick onClose={() => props.setContactMode(false)} >
		<UpdateContactReduxForm onSubmit={Submit} setContactMode={props.setContactMode} />
	</Popup>
}

export default connect(null, { updateContact })(UpdateContact)