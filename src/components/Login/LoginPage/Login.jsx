import React from 'react'
import s from './Login.module.css'


const Login = (props) => {       
    return (
        <div className={s.Block}>
            <div className={s.header}>
                <h1 className={s.Contacts}>Contacts</h1>
                <h2 className={s.SignIn}>Sign in</h2>
            </div>

            <div className={s.inputs}>
                <h3 className={s.inputSubtitle}>Email</h3>
                <input type="text" value="Name1@gmail.com" className={s.input} />
                <h3 className={s.inputSubtitle}>Password</h3>
                <input type="password" value="password" className={s.input} />
            </div>

            <div className={s.links}>
                <a href="#" className={s.link}>Create account</a>
                <a href="#" className={s.link} onClick={
                    props.Auth.isAuthenticated = true
                }>Login</a>
            </div>
            
        </div>
    );
}

export default Login