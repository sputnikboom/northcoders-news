import axios from 'axios'

export const BASE_URL = "https://nc-news-rachael.herokuapp.com/api"

export const getAllOfType = (type) => {
    return axios.get(`${BASE_URL}/${type}`).then(({data}) => {
        return(data[type]);
    })
}

export const getOneById = (id, type) => {
    return axios.get(`${BASE_URL}/${type}s/${id}`).then(({data}) => {
        return data[type];
    })
}

export const getListById = (id, type, listOf) => {
    return axios.get(`${BASE_URL}/${type}s/${id}/${listOf}`).then(({data}) => {
        return data[listOf];
    })
}