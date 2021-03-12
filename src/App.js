import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.css'
import Main from './components/Main/Main'
import Login from './components/Login/LoginPage/Login';
import Registration from './components/Login/RegistrationPage/Registration';
import { Provider, connect } from 'react-redux'
import { store } from './components/redux/store'
import ForgetPassword from './components/Login/ForgetPassword/ForgetPassword';
import { PrivateRoute } from './hoc/PrivateRoute';
import { login } from './components/redux/auth-reducer'


const App = (props) => {
	return <div className="App">
		<Switch>
			<Route exact path='/' component={() => <Redirect to="/login" />} />
			<Route path='/login' component={Login} />
			<PrivateRoute isAuth={props.isAuth} token={props.token} path='/contacts' component={Main} />
			<Route path='/change' component={ForgetPassword} />
			<Route path='/registration' component={Registration} />
		</Switch>
	</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	token: state.auth.token
})

const AppContainer = connect(mapStateToProps, {login})(App)

const Contacts = () => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>
}


export default Contacts;