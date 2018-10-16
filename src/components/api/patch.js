import axios from 'axios';
import {BASE_URL} from './get.js'

export const patchVote = (id, type, direction) => {
    //console.log(id, type, direction);
    return axios.patch(`${BASE_URL}/${type}s/${id}?vote=${direction}`)
    .then((data) => {
        console.log(data);
    })
}