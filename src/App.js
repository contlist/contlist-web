import React from 'react'
import { BrowserRouter, Redirect,Route } from "react-router-dom";
import s from'./App.module.css'
import Main from './components/Main/Main'
import Login from './components/Login/LoginPage/Login';


const App = () => {
    let Auth = {
        isAuthenticated: false,
    }

    return (
        <BrowserRouter>
            <div className={s.App}>
                <Route render={() => (
                    Auth.isAuthenticated
                    ? <Main Auth={Auth}/>
                    : <Login Auth={Auth} />
                )} /> 
            </div>
        </BrowserRouter>
    );
}

export default App;
