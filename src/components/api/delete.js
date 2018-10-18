import axios from 'axios';
import {BASE_URL} from './get.js'

export const removeComment = (id) => {
    return axios.delete(`${BASE_URL}/comments/${id}`)
    .then(({data}) => {
        return data;
    })
}