import React from 'react'
import { login } from '../../redux/auth-reducer'
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Form } from '../../Form/Form';


const ForgetPasswordForm = ({handleSubmit, error}) => {
	console.log('change')
	return (
		Form({handleSubmit, error}, 
			'Forgot password', '/forget', 'Cancel', 'New password'
		)
	)
}

const ForgetPasswordReduxForm = reduxForm({ form: 'ChangePassword' })(ForgetPasswordForm)

const ForgetPassword = (props) => {
	const Submit = (formData) => {
		props.login(formData.username, formData.password);
	}

	return <div>
		<ForgetPasswordReduxForm onSubmit={Submit} />
	</div>
}

export default connect(null, {login})(ForgetPassword)