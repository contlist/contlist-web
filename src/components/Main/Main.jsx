import React from 'react'
import Header from '../Header/Header'
import {connect} from 'react-redux'
import {requestContacts, deleteContact} from '../redux/contacts-reducer'
import Sidebar from '../Sidebar/Sidebar'
import ContactsContainer from '../ContactList/ContactsContainer'
import { Redirect } from 'react-router-dom'
import './Main.css'


const Main = (props) => {
	return (
		<div>
			<Header />
			<div className="app-container">
				<Sidebar />
				<ContactsContainer />
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	// token: state.auth.token,
	// isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {requestContacts, deleteContact})(Main)