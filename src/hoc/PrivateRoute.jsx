import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, isAuth, token, ...rest }) => {
	return (
		<Route {...rest} render={props => (
			isAuth && token ?
				<Component {...props} />
				: <Redirect to="/login" />
		)} />
	);
};