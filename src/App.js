import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import s from'./App.module.css'
import Main from './components/Main/Main'
import Login from './components/Login/LoginPage/Login';
import Registration from './components/Login/RegistrationPage/Registration';
import { Provider, connect } from 'react-redux'
import store from './components/redux/store'
import ForgetPassword from './components/Login/ForgetPassword/ForgetPassword';

const App = (props) => {
    console.log(props.isAuth);
    return <div className={s.App}>
        {/* {
            (!props.isAuth) ? 
                <Login /> :
                <Main />
        } */}
        <Main />
        {/* <Route path='/contacts' component={Main}/> */}
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/change' component={ForgetPassword}/>
            <Route path='/registration' component={Registration}/>
        </Switch>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const AppContainer = connect(mapStateToProps, {})(App)

const Contacts = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}


export default Contacts;