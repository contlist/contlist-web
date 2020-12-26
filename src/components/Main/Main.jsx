import React from 'react'
import Header from '../Header/Header'
import {connect} from 'react-redux'
import {requestContacts, deleteContact} from '../redux/contacts-reducer'
import Sidebar from '../Sidebar/Sidebar'
import ContactsContainer from '../ContactList/ContactsContainer'
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
				<ContactsContainer />
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {requestContacts, deleteContact})(Main)