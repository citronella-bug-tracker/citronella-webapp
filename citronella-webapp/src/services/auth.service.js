import axios from 'axios'

const API_URL = 'http://localhost:8080/login'

class AuthenticationService {
    login(user) {
        return axios.post(API_URL, {
            email: user.email,
            password: user.password
        })
        .then(response => {
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data
        })
    }

    logout() {
        localStorage.removeItem('user')
    }
}

export default new AuthenticationService();