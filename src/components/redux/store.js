import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import AuthReducer from './auth-reducer'
import ContactsReducer from './contacts-reducer'
import thunk from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

// reducers
let reducers = combineReducers({
	auth: AuthReducer,
	contacts: ContactsReducer,
	form: formReducer
})

// store with redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.__store__ = store
