import { createStore, combineReducers, applyMiddleware } from 'redux'
import AuthReducer from './auth-reducer'
import ContactsReducer from './contacts-reducer'
import thunk from "redux-thunk"
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
	auth: AuthReducer,
	contacts: ContactsReducer,
	form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

window.__store__ = store

export default store