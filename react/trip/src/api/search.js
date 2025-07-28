// search 模块
import axios from './config'

export const getSuggestList = async (keyword) => {
    return axios.get(`/search?keyword=${keyword}`);
}

export const getHotList = async () => {
    return axios.get('/hotList');
}