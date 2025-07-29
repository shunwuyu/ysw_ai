import  axios from './config'

export const getDetail = async (id) => {
    return axios.get(`/detail/${id}`);
}