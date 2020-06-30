import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: ' http://185.245.186.22:3721/user/',
})

export const contactsAPI = {
    requestContacts() {
        return instance.get(`contacts`)
            .then(response => {
                return response.data
            })
    }
}

export const registerAPI = {
    register(username, password) {
        return instance.post(`register`, {username, password})
    }
}

export const authApi = {
    login(username, password) {
        return instance.post(`login`, {username, password})
    }
}