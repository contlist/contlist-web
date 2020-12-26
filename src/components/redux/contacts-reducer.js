import { contactsAPI } from "../API/api";

const GET_CONTACTS = 'GET_CONTACTS'
const ADD_CONTACT = 'ADD_CONTACT'
const UPDATE_CONTACT = 'UPDATE_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'
const SIDEBAR_MODE = 'SIDEBAR_MODE'

const initialState = {
	contacts: [{contact_name: "", phone_number: "", contactId: ""}],
	sidebarMode: true
}

const ContactsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				...action
			}

		case ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.newContact]
			}

		case UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts.map(c => {
					if (c.id === action.updatedContact.contactId) {
						c.contact_name = action.updatedContact.contact_name
						c.phone_number = action.updatedContact.phone_number
						c.id = action.updatedContact.contactId
						return c
					} else
						return c
				})
			}

		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(c => c.id !== action.contactId)
			}

		case SIDEBAR_MODE:
			return {
				...state,
				sidebarMode: !state.sidebarMode
			}

		default:
			return state;
	}
}

// action creators

export const getContacts = (contacts) => ({
	type: GET_CONTACTS, contacts
})

export const addContactAC = (contact_name, phone_number, id) => ({
	type: ADD_CONTACT, newContact: { id, contact_name, phone_number }
})

export const updateContactAC = (contact_name, phone_number, contactId) => ({
	type: UPDATE_CONTACT, updatedContact: { contact_name, phone_number, contactId }
})

export const deleteContactAC = (contactId) => ({
	type: DELETE_CONTACT, contactId
})

export const sidebarModeAC = () => ({
	type: SIDEBAR_MODE
})

// 

export const addContact = (contact_name, phone_number, token) => {
	return async (dispatch) => {
		let contactData = await contactsAPI.addContactD(contact_name, phone_number, token)
		dispatch(addContactAC(contact_name, phone_number, contactData.data))
	}
}

export const updateContact = (contact_name, phone_number, contactId, token) => {
	return async (dispatch) => {
		contactsAPI.updateContactD(contact_name, phone_number, contactId, token)
		dispatch(updateContactAC(contact_name, phone_number, contactId))
	}
}

export const deleteContact = (contactId, token) => {
	return async (dispatch) => {
		dispatch(deleteContactAC(contactId))
		contactsAPI.deleteContactD(contactId, token)
	}
}

export const requestContacts = (token) => {
	return async (dispatch) => {
		let contactsData = await contactsAPI.requestContacts(token)
		if (contactsData.length === 0) {
			dispatch(addContact('Add your first contact', '123', token))
		}
		dispatch(getContacts(contactsData))
	}
}

export const changePassword = (password, token) => {
	return async (dispatch) => {
		contactsAPI.changePasswordD(password, token)
	}
}

export default ContactsReducer