import axios from './config'
// todos接口
export const getTodos = () => {
    return axios.get('/api/todos')
}

export const getRepos = () => {
    return axios.get('/repos')
}