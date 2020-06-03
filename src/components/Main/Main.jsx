import React from 'react'
import s from './Main.module.css'
import Header from '../Header/Header'


function createContacts(name, phoneNumber) {
    return { name, phoneNumber };
}

const contacts = [
    createContacts('Name1', '+09010000001'),
    createContacts('Name2', '+09010000002'),
    createContacts('Name3', '+09010000003'),
    createContacts('Name4', '+09010000004'),
    createContacts('Name5', '+09010000005'),
];

const Main = (props) => {    
    return (
        <>
            <Header Auth={props.Auth} />
            <table className={s.tableContacts}>
                <thead className={s.theadContacts}> 
                    <tr className={s.trContacts}>
                    <td className={s.tdContacts}>Name</td>
                    <td className={s.tdContacts}>Email mail</td>
                    <td className={s.tdContacts}>Phone Number</td>
                    </tr>
                </thead>
                <tbody className={s.tbodyContacts}>
                    <tr className={s.trContacts}>
                    <td className={s.contactsLength}>Contacts ({contacts.length})</td>
                    </tr>
                    {contacts.map((contact) => (
                        <tr className={s.trContacts} key={contact.name}>
                            <td className={s.tdContacts}>
                            <div className={s.contactName}>
                                <div className={s.contactImg}>
                                </div>
                                {contact.name}  
                            </div>
                            </td>
                            <td className={s.tdContacts}>{contact.name}@gmail.com</td>
                            <td className={s.tdContacts}>{contact.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Main