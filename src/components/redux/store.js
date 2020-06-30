import { createStore, combineReducers, applyMiddleware } from 'redux'
import AuthReducer from './auth-reducer'
import ContactsReducer from './contacts-reducer'
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    auth: AuthReducer,
    contacts: ContactsReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store

export default store