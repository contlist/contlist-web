import React from 'react'
import { login } from '../../redux/auth-reducer'
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form } from '../../Form/Form';


const LoginForm = ({handleSubmit, error}) => {
	return (
		Form({handleSubmit, error}, 'Sign in', '/registration', 'Create account', 'Login', '')
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
	const Submit = (formData) => {
		props.login(formData.username, formData.password);
	}

	if (props.isAuth) 
		return <Redirect to={"/contacts"} />

	return <div>
		<LoginReduxForm onSubmit={Submit} />
	</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)