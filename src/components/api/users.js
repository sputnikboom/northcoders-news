import { BASE_URL } from "./index.js";
import axios from "axios";

export const getUserByUsername = username => {
  return axios.get(`${BASE_URL}/users/${username}`).then(({ data }) => {
    return data.user;
  });
};
