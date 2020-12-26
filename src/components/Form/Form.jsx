import React from 'react';
import './Form.css'
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';


export const Form = ({handleSubmit, error}, signHeader, link, linkText, linkText2, handleClick = '') => {
	return (
		<form onSubmit={handleSubmit} className="form">

			<div className="login-head">
				<h1 className="login-title">Contacts</h1>
				<h2 className="SignIn">{signHeader}</h2>
			</div>

			<div className="inputs">
				<h3 className="inputSubtitle">Username</h3>
				<Field component="input" type="text" name="username" label="Name1@gmail.com" className="login-input" />
				<h3 className="inputSubtitle">Password</h3>
				<Field component="input" type="password" name="password" label="password" className="login-input" />
			</div>

			<div className="login-links">
				<Link to={link} className="link">{linkText}</Link>
				{handleClick === '' ?   
					<button className="link">{linkText2}</button> :
					<button onClick={() => handleClick()} className="link">{linkText2}</button>
				}	
			</div>
			
		</form>
	)
}