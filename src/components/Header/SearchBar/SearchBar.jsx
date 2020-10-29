import React from 'react'
import './SearchBar.css'
import { Field, reduxForm } from 'redux-form'


const SearchBar = () => {
	return (
		<Field
			name="search"
			component="input"
			type="text" 
			className="search-input"
			placeholder="Search" />
	)
}

export default reduxForm({
	form: "searchBar",
	initialValues: {
    search: ""
	}
})(SearchBar)