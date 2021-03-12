import React from 'react'
import './ContactList.css'
import UpdateContact from './UpdateForm/UpdateForm';
import { useSelector } from 'react-redux';
import ContactList from './ContactsList';


const Contacts = (props) => {  	
	let [updateContactMode, setContactMode] = React.useState(false)
	let [currentId, setCurrentId] = React.useState(null)

	let changeContactInfo = (id) => {
		setContactMode(true)
		setCurrentId(id)
	}

	const form = useSelector(state => state.form.searchBar)

	return (
		<>
			<ContactList 
				changeContactInfo={changeContactInfo}
				contacts={props.contacts} 
				form={form} 
				deleteContact={props.deleteContact} 
				token={props.token} />
			{updateContactMode 
				? <UpdateContact currentId={currentId} token={props.token} updateContactMode={updateContactMode} setContactMode={setContactMode} /> 
				: null}
		</>
	)
}

export default Contacts