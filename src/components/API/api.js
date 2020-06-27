import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://<domen>:8000/user/',
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
    },
    logout() {
        return instance.delete(`login`)
    }
}