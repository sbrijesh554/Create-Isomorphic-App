import axios from 'axios';
import {constant} from '../constant/constant';
const api = {
    authenticateUser: (username, password) => {
        const data = {
            username: username,
            password: password
        };
        return axios.post(`${constant.baseUrl}${constant.authenticateUser}`,data)
    }
}


export default api;