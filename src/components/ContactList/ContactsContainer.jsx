import React from 'react'
import './ContactList.css'
import {connect} from 'react-redux';
import {requestContacts, deleteContact} from '../redux/contacts-reducer'
import ContactList from './Contacts';


class ContactsContainer extends React.Component {
	componentDidMount() {
		this.props.requestContacts(this.props.token)
	}

	componentDidUpdate(prev) {
		if (this.props.contacts == prev.contacts) {
			this.props.requestContacts(this.props.token)
		}
	}

	render() {
		return <>
			<ContactList form={this.form} contacts={this.props.contacts} token={this.props.token} deleteContact={this.props.deleteContact} />
		</>
	}
}

const mapStateToProps = (state) => ({
	contacts: state.contacts.contacts,
	token: state.auth.token
})

export default connect(mapStateToProps, {requestContacts, deleteContact})(ContactsContainer)