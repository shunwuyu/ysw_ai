import axios from './config'

export const getImages = (page) => {
    return axios.get('/images', {
        params: {page}
    })
}