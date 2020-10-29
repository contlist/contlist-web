import React from 'react'
import './Header.css'
import menu from '../images/menu.svg'
import { connect } from 'react-redux'
import { logout } from '../redux/auth-reducer'
import ReactBar from './SearchBar/SearchBar'

const Header = (props) => {
	return (
		<header className="header">
			<div>
				<img src={menu} className="menu" alt=""/>
				<div className="contactsImg"></div>
				<h1 className="Contacts">Contacts</h1>
			</div>
			<ReactBar />
			<div>
				<button className="logout" onClick={() => props.logout()}>Logout</button>
			</div>
		</header>
	)
}

export default connect(null, {logout})(Header)