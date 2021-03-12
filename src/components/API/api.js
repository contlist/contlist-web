import * as axios from 'axios'


const instance = axios.create({
	baseURL: 'http://185.245.186.22:3721/'
})

export const contactsAPI = {
	requestContacts(token) {
		return instance.get(`contact`, { headers: { "Authorization": `Bearer ${token}` } })
			.then(response => {
				return response.data
			})
	},
	addContactD(contact_name, phone_number, token) {
		return instance.post('contact', { contact_name, phone_number }, { headers: { "Authorization": `Bearer ${token}` } })
	},
	updateContactD(contact_name, phone_number, id, token) {
		return instance.put(`contact/${id}`, { contact_name, phone_number }, { headers: { "Authorization": `Bearer ${token}` } })
	},
	deleteContactD(id, token) {
		return instance.delete(`contact/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
	},
	changePasswordD(password, token) {
		return instance.put('user/', { password, token }, { headers: { "Authorization": `Bearer ${token}` } })
	}
}

export const registerAPI = {
	register(username, password) {
		return instance.post(`user/register`, { username, password })
	}
}

export const authApi = {
	login(username, password) {
		return instance.post(`user/login`, { username, password })
	}
}