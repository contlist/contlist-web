import React from 'react'
import './ContactList.css'
import photo from '../images/delete.svg';


const Contact = ({ contact, changeContactInfo, deleteContact, token }) => {
	let changeContact = (e) => {
		changeContactInfo(contact.id)
	}

	let deleteContactEvent = (e) => {
		e.stopPropagation()
		deleteContact(contact.id, token)
	}

	return <tr className="trContacts" onClick={changeContact}>
		<td className="tdContacts">
			<div className="contactName">
				<div className="contactImg"></div>
				{contact.contact_name}
			</div>
		</td>
		<td className="tdContacts"></td>
		<td className="tdContacts">{contact.phone_number}</td>
		<td className="tdContacts tdContacts-delete">
			<button className="deleteButton" onClick={deleteContactEvent}>
				<img src={photo} alt="delete" />
			</button>
		</td>
	</tr>
}

const ContactList = (props) => {
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
					{props.contacts.length > 0 ?
						props.contacts
							.filter(contact => contact.contact_name.includes(props.form.values.search))
							.map((contact) => <Contact contact={contact} token={props.token} deleteContact={props.deleteContact} changeContactInfo={props.changeContactInfo} key={contact.id} />) :
						null}
				</tbody>
			</table>
		</div>
	)
}

export default ContactList