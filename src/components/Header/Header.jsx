import React from 'react'
import s from './Header.module.css'
import menu from '../images/menu.svg'
import { connect } from 'react-redux'
import { logout } from '../redux/auth-reducer'

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
                <button className={s.login} onClick={() => props.logout()}>Logout</button>
            </div>
        </header>
    )
}

export default connect(null, {logout})(Header)