import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:8080/api/v1/users/'

class UserService {
    getUserById(id) {
        return axios.get(API_URL + id, { headers: authHeader() })
    }

    getLoggedInUser() {
        return axios.get(API_URL, { headers: authHeader() })
    }
}

export default new UserService()