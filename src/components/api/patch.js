import axios from 'axios';
import {BASE_URL} from './get.js'

export const patchVote = (id, type, direction) => {
    return axios.patch(`${BASE_URL}/${type}s/${id}?vote=${direction}`)
}