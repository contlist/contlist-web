import React from 'react'
import './Header.css'
import menu from '../images/menu.svg'
import contactsImg from '../images/contacts_ico.png'
import { connect } from 'react-redux'
import { logout } from '../redux/auth-reducer'
import { sidebarModeAC } from '../redux/contacts-reducer'
import ReactBar from './SearchBar/SearchBar'

const Header = (props) => {
	return (
		<header className="header">
			<img src={menu} className="menu" alt="" onClick={() => { props.sidebarModeAC() }} />
			<img src={contactsImg} alt="" className="contactsImg" />
			<h1 className="Contacts">Contacts</h1>
			<ReactBar />
			<button onClick={() => props.logout()} className="logout">Logout</button>
		</header>
	)
}

export default connect(null, { logout, sidebarModeAC })(Header)