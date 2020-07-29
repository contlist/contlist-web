import React, {useEffect} from 'react'
import s from './ContactList.module.css'
import {connect} from 'react-redux';
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

    return (
        <div className={s.contactList}>
            <table className={s.tableContacts}>
                <thead className={s.theadContacts}> 
                    <tr>
                        <td className={s.tdContacts}>Name</td>
                        <td className={s.tdContacts}>Email mail</td>
                        <td className={s.tdContacts}>Phone Number</td>
                        <td className={s.tdContacts}></td>
                    </tr>
                </thead>
                <tbody className={s.tbodyContacts}>
                    <tr>
                        <td className={s.contactsLength}>Contacts ({props.contacts.length})</td>
                    </tr>
                    {props.contacts.map((contact) => (
                        <tr className={s.trContacts} key={contact.id} >
                            <td className={s.tdContacts} onClick={() => {changeContactInfo(contact.id)}}>
                                <div className={s.contactName}>
                                    <div className={s.contactImg}></div>
                                    {contact.contact_name}  
                                </div>
                            </td>
                            <td className={s.tdContacts} onClick={() => {changeContactInfo(contact.id)}}></td>
                            <td className={s.tdContacts} onClick={() => {{changeContactInfo(contact.id)}}}>{contact.phone_number}</td> 
                            <td className={s.tdContacts}>
                                <button className={s.deleteButton} onClick={() => props.deleteContact(contact.id, props.token)}>
                                    <img src={photo} alt="delete" />
                                </button>
                            </td>
                        </tr>
                    ))}
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