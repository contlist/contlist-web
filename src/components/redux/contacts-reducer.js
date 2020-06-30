import { contactsAPI } from "../API/api";

const GET_CONTACTS = 'GET_CONTACTS'

const initialState = {
    contacts: []
}

const ContactsReducer = (state =initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                ...action
            }

    
        default:
            return state;
    }
} 

export const getUsers = (contacts) => ({
    type: GET_CONTACTS, contacts
})

export const getUsers = () => () => {
    return async(dispatch) => {
        let contactsData = await contactsAPI.requestContacts();
        dispatch(getUsers(contactsData.contactsList))
    }
}

export default ContactsReducer