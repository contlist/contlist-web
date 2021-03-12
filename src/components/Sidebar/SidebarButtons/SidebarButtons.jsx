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
				<div className="input-wrapper">
					<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11 13.5C14.416 13.5 17.1875 10.4766 17.1875 6.75C17.1875 3.02344 14.416 0 11 0C7.58398 0 4.8125 3.02344 4.8125 6.75C4.8125 10.4766 7.58398 13.5 11 13.5ZM16.5 15H14.1324C13.1785 15.4781 12.1172 15.75 11 15.75C9.88281 15.75 8.82578 15.4781 7.86758 15H5.5C2.46211 15 0 17.6859 0 21V21.75C0 22.9922 0.923828 24 2.0625 24H19.9375C21.0762 24 22 22.9922 22 21.75V21C22 17.6859 19.5379 15 16.5 15Z" fill="#dadce0"/>
					</svg>
					<Field component="input" type="text" placeholder="Username" name="username" label="username1" className="popup-input sidebar-input" />
				</div>
				<div className="input-wrapper">
					<svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.8722 17.4594L17.0597 15.2094C16.8541 15.1138 16.6257 15.0937 16.4087 15.152C16.1917 15.2103 15.9979 15.344 15.8566 15.5328L13.7254 18.3734C10.3806 16.653 7.68876 13.7165 6.11172 10.0677L8.71562 7.74266C8.88908 7.58876 9.01185 7.3774 9.06535 7.14057C9.11884 6.90375 9.10015 6.65436 9.01211 6.43016L6.94961 1.18016C6.85298 0.938473 6.68207 0.741147 6.46636 0.622203C6.25065 0.503259 6.00366 0.470153 5.76797 0.528594L1.29922 1.65359C1.07199 1.71084 0.86925 1.85041 0.724097 2.04954C0.578944 2.24867 0.499948 2.49559 0.5 2.75C0.5 14.7734 9.4332 24.5 20.4375 24.5C20.6708 24.5002 20.8972 24.414 21.0799 24.2557C21.2625 24.0973 21.3905 23.8761 21.443 23.6281L22.4742 18.7531C22.5274 18.4948 22.4965 18.2242 22.3866 17.9881C22.2767 17.752 22.0948 17.565 21.8722 17.4594V17.4594Z" fill="#dadce0"/>
					</svg>
					<Field component="input" type="text" placeholder="Phone number" name="phoneNumber" label="phoneNumber1" className="popup-input sidebar-input" />
				</div>
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
	let [addContactMode, setAddContactMode] = React.useState(false)
	let [changePassword, changePasswordMode] = React.useState(false)

	const SubmitAddContact = formData => {
		props.addContact(formData.username, formData.phoneNumber, props.token)
		setAddContactMode(false)
	}

	const SubmitChangePassword = formData => {
		props.changePassword(formData.password, props.token)
	}

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