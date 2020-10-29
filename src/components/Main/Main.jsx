import React from 'react'
import Header from '../Header/Header'
import {connect} from 'react-redux'
import {requestContacts, deleteContact} from '../redux/contacts-reducer'
import Sidebar from '../Sidebar/Sidebar'
import ContactList from '../ContactList/ContactList'
import { Redirect } from 'react-router-dom'
import './Main.css'


const Main = (props) => {
	if (!props.isAuth) {
		return <Redirect to={"/login"} />
	}
	
	return (
		<div>
			<Header />
			<div className="app-container">
				<Sidebar />
				<ContactList />
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	contacts: state.contacts.contacts,
	isAuth: state.auth.isAuth,
	token: state.auth.token
})

export default connect(mapStateToProps, {requestContacts, deleteContact})(Main)