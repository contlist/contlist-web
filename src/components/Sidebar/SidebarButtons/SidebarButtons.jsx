import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { changePassword } from '../../redux/contacts-reducer'
import '../Sidebar.css'
import { ReactComponent as AddContactSvg } from "../../images/new-contact.svg"
import Popup from 'reactjs-popup'


const AddContactsForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit} className="popup-form sidebar-form">
			<div className="popup-header sidebar-form_header">
				<h2>Create contact</h2>
			</div>
			<div className="popup-content sidebar-form_content">
				<h3 className="popup-inputSubtitle">Username</h3>
				<Field component="input" type="text" name="username" label="username1" className="popup-input sidebar-input" />
				<h3 className="popup-inputSubtitle">Phone number</h3>
				<Field component="input" type="text" name="phoneNumber" label="phoneNumber1" className="popup-input sidebar-input" />
			</div>
			<div className="popup-footer sidebar-form_footer">
				<button className="sidebar-buttonSubmit">add contact</button>
			</div>
		</form>
	)
}

const AddContactsReduxForm = reduxForm({ form: 'addContact' })(AddContactsForm)

const ChangePasswordForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h3 className="sidebar-inputSubtitle">New password</h3>
				<Field component="input" type="text" name="password" label="password1" className="sidebar-input" />
				<button className="sidebar-buttonSubmit">change password</button>
			</div>
		</form>
	)
}

const ChangePasswordReduxForm = reduxForm({ form: 'changePassword' })(ChangePasswordForm)

const SidebarButtons = (props) => {
	const SubmitAddContact = formData => {
		props.addContact(formData.username, formData.phoneNumber, props.token)
	}

	const SubmitChangePassword = formData => {
		props.changePassword(formData.password, props.token)
	}

	let [addContactMode, setAddContactMode] = React.useState(false)
	let [changePassword, changePasswordMode] = React.useState(false)

	return (
		<div className="sidebar-buttons" >
			<button className="sidebar-button addContact" onClick={() => {
				setAddContactMode(!addContactMode); changePasswordMode(false)
			}}>
				<AddContactSvg />
				<span>New contact</span>
			</button>
			
			<Popup open={addContactMode} closeOnDocumentClick onClose={() => setAddContactMode(false)} >
				<AddContactsReduxForm onSubmit={SubmitAddContact} />
			</Popup>

			{/* <button className="sidebar-button changePassword" onClick={() => {
				changePasswordMode(!changePassword); setAddContactMode(false)
			}}>Change Password</button>
			{changePassword
				? <ChangePasswordReduxForm onSubmit={SubmitChangePassword} changePasswordMode={changePasswordMode} changePassword={changePassword} />
				: null} */}
		</div>
	)
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
	sidebarMode: state.contacts.sidebarMode
})

export default connect(mapStateToProps, { changePassword })(SidebarButtons)