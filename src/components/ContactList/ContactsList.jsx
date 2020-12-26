import React from 'react'
import './ContactList.css'
import photo from '../images/delete.svg';


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
					{props.contacts
						.filter(contact => contact.contact_name.includes(props.form.values.search))
						.map((contact) => 
						<tr className="trContacts" key={contact.id} >
							<td className="tdContacts" onClick={() => {props.changeContactInfo(contact.id)}}>
								<div className="contactName">
									<div className="contactImg"></div>
									{contact.contact_name}  
								</div>
							</td>
							<td className="tdContacts" onClick={() => {props.changeContactInfo(contact.id)}}></td>
							<td className="tdContacts" onClick={() => {props.changeContactInfo(contact.id)}}>{contact.phone_number}</td> 
							<td className="tdContacts">
								<button className="deleteButton" onClick={() => props.deleteContact(contact.id, props.token)}>
									<img src={photo} alt="delete" />
								</button>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}

export default ContactList