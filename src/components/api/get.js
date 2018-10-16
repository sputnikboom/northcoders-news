import axios from 'axios'

const BASE_URL = "https://nc-news-rachael.herokuapp.com/api"

export const getAllOfType = (type) => {
    return axios.get(`${BASE_URL}/${type}`).then(({data}) => {
        return(data[type]);
    })
}

export const getTypeById = (id, type) => {
    return axios.get(`${BASE_URL}/${type}s/${id}`).then(({data}) => {
        return data.user;
    })
}