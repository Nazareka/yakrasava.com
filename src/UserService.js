import axios from 'axios';
const API_URL = 'http://127.0.0.1:8001';

export default class UserService{

    constructor(){}


    getUsers() {
        const url = `${API_URL}/api/users/`;
        return axios.get(url).then(response => response.data);
    }
}