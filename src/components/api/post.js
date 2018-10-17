import axios from 'axios';
import {BASE_URL} from './get.js'

export const postComment = (body, userId, articleId) => {
    return axios.post(`${BASE_URL}/articles/${articleId}/comments`, {body, created_by: userId})
    .then(({data}) => {
        return data;
    })
}

export const postArticle = (body, title, userId, topic) => {
    return axios.post(`${BASE_URL}/topics/${topic}/articles`, {body, title, created_by: userId})
    .then(({data}) => {
        return data;
    })
}