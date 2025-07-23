import axios from './config';

export const getUser = () => {
    return axios.get('/user');
}

export const doLogin = (data) => {
    return axios.post('/login', data);
} 

// export const getUserArticles = () => {
//     return axios.get('/user');
// }