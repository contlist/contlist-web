import React from 'react'
import s from './Header.module.css'
import menu from '../images/menu.svg'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div>
                <img src={menu} className={s.menu} alt=""/>
                <div className={s.contactsImg}></div>
                <h1 className={s.Contacts}>Contacts</h1>
            </div>
            <div>
                <img alt=""/>
                <a href="#" className={s.login} onClick={
                    props.Auth.isAuthenticated = false
                }>Logout</a>
            </div>
        </header>
    );
}

export default Header