import React, {useEffect} from 'react'
import './ContactList.css'
import {connect, useSelector} from 'react-redux';
import {requestContacts, deleteContact, updateContact} from '../redux/contacts-reducer'
import photo from '../images/delete.svg';
import UpdateContact from './UpdateForm/UpdateForm';


const ContactList = (props) => {  	
	useEffect(() => {     
		props.requestContacts(props.token)
	}, []) 

	let [updateContactMode, setContactMode] = React.useState(false)
	let [currentId, setCurrentId] = React.useState(null)

	let changeContactInfo = (id) => {
		setContactMode(true)
		setCurrentId(id)
	}

	const form = useSelector(state => state.form.searchBar)

	return (
		<div className="contactList">
			<table className="tableContacts">
				<thead className="theadContacts"> 
					<tr>
						<td className="tdContacts">Name</td>
						<td className="tdContacts">Email mail</td>
						<td className="tdContacts">Phone Number</td>
						<td className="tdContacts"></td>
					</tr>
				</thead>
				<tbody className="tbodyContacts">
					<tr>
						<td className="contactsLength">Contacts ({props.contacts.length})</td>
					</tr>
					{props.contacts
						.filter(contact => contact.contact_name.includes(form.values.search))
						.map((contact) => 
						<tr className="trContacts" key={contact.id} >
							<td className="tdContacts" onClick={() => {changeContactInfo(contact.id)}}>
								<div className="contactName">
									<div className="contactImg"></div>
									{contact.contact_name}  
								</div>
							</td>
							<td className="tdContacts" onClick={() => {changeContactInfo(contact.id)}}></td>
							<td className="tdContacts" onClick={() => {{changeContactInfo(contact.id)}}}>{contact.phone_number}</td> 
							<td className="tdContacts">
								<button className="deleteButton" onClick={() => props.deleteContact(contact.id, props.token)}>
									<img src={photo} alt="delete" />
								</button>
							</td>
						</tr>
					)}
				</tbody>
			</table>
			{updateContactMode 
				? <UpdateContact currentId={currentId} token={props.token} updateContactMode={updateContact} setContactMode={setContactMode} /> 
				: null}
		</div>
	)
}

const mapStateToProps = (state) => ({
	contacts: state.contacts.contacts,
	auth: state.auth.isAuth,
	token: state.auth.token
})

export default connect(mapStateToProps, {requestContacts, deleteContact, updateContact})(ContactList)