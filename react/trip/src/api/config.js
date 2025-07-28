import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5173/api';

axios.interceptors.request.use((config) => {
    // token
    return config;
});
// 响应拦截
axios.interceptors.response.use((data) => {
    return data.data
})

export default axios