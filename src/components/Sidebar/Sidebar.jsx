import React from 'react'
import { connect } from 'react-redux'
import { addContact, changePassword } from '../redux/contacts-reducer'
import './Sidebar.css'
import SidebarButtons from './SidebarButtons/SidebarButtons'
import { ReactComponent as SidebarContactsSVG } from '../images/sidebar-contacts.svg'
import { ReactComponent as SidebarGroupSVG } from '../images/sidebar-group.svg'
import { ReactComponent as SidebarTrashSVG } from '../images/sidebar-trash.svg'


const Sidebar = (props) => {
	const classnames = [
		'sidebar',
		props.sidebarMode && 'sidebar--open'
	].filter(Boolean)

	return (
		<div className={classnames.join(' ')} >
			<SidebarButtons addContact={props.addContact}/>
			<div className="sidebar-nav">
				<div className="sidebar-nav_el selected">
					<a href="">
						<span className="sidebar-nav-svg"><SidebarContactsSVG /></span>
						<span className="sidebar-nav-head">Contacts</span>
						<span>{props.contactsLength}</span>
					</a>
				</div>
				<hr/>
				<div className="sidebar-nav_el">
					<a href="">
						<span className="sidebar-nav-svg"><SidebarGroupSVG /></span>
						<span>Groups</span>
					</a>
				</div>
				<hr/>
				<div className="sidebar-nav_el">
					<a href="">
						<span className="sidebar-nav-svg"><SidebarTrashSVG /></span>
						<span>Trash</span>
					</a>
				</div>
				<div className="sidebar-nav_el">
					<a href="">
						<span>Change Password</span>
					</a>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
	sidebarMode: state.contacts.sidebarMode,
	contactsLength: state.contacts.contacts.length
})

export default connect(mapStateToProps, { addContact, changePassword })(Sidebar)