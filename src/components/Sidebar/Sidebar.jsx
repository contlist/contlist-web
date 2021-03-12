import React from 'react'
import { connect } from 'react-redux'
import { addContact, changePassword } from '../redux/contacts-reducer'
import './Sidebar.css'
import SidebarButtons from './SidebarButtons/SidebarButtons'
import { ReactComponent as SidebarContactsSVG } from '../images/sidebar-contacts.svg'
import { ReactComponent as SidebarGroupSVG } from '../images/sidebar-group.svg'
import { ReactComponent as SidebarTrashSVG } from '../images/sidebar-trash.svg'
import { Redirect } from 'react-router-dom'


const Sidebar = (props) => {
	const classnames = [
		'sidebar',
		props.sidebarMode && 'sidebar--open'
	].filter(Boolean)

	const onClickRedirect = (path) => {
		return <Redirect to="contacts" />
	}

	return (
		<div className={classnames.join(' ')} >
			<SidebarButtons addContact={props.addContact} />
			<div className="sidebar-nav" onClick={() => onClickRedirect("contacts")}>
				<div className="sidebar-nav_el selected">
					<span className="sidebar-nav-svg"><SidebarContactsSVG /></span>
					<span className="sidebar-nav-head">Contacts</span>
					<span>{props.contactsLength}</span>
				</div>
				<hr />
				<div className="sidebar-nav_el" onClick={() => onClickRedirect("contacts")}>
					<span className="sidebar-nav-svg"><SidebarGroupSVG /></span>
					<span>Groups</span>
				</div>
				<hr />
				<div className="sidebar-nav_el" onClick={() => onClickRedirect("contacts")}>
					<span className="sidebar-nav-svg"><SidebarTrashSVG /></span>
					<span>Trash</span>
				</div>
				<div className="sidebar-nav_el">
						<span>Change Password</span>
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