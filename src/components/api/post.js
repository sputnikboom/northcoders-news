import axios from 'axios';
import {BASE_URL} from './get.js'

export const postComment = (body, userId, articleId) => {
    return axios.post(`${BASE_URL}/articles/${articleId}/comments`, {body, created_by: userId})
    .then(({data}) => {
        return data;
    })
}
