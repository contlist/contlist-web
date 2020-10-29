import React from 'react'
import { register } from '../../redux/auth-reducer'
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form } from '../../Form/Form';


const RegistrationForm = ({handleSubmit, error}) => {
	const handleClick = () => "<Redirect to={'/login'}></Redirect>"

	return (
		Form({handleSubmit, error}, 
			'Create your account', '/login', 'Cancel', 'Create',
			handleClick
		)
	)
}

const RegistrationReduxForm = reduxForm({ form: 'registration' })(RegistrationForm)

const Registration = (props) => {
	const Submit = (formData) => {
		props.register(formData.username, formData.password);
	}

	if (props.isAuth) 
		return <Redirect to={"/contacts"} />

	return <div>
		<RegistrationReduxForm onSubmit={Submit} />
	</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {register})(Registration)