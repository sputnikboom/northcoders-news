import { BASE_URL } from "./index.js";
import axios from "axios";

export const getAllTopics = () => {
  return axios.get(`${BASE_URL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getTopicById = id => {
  return axios.get(`${BASE_URL}/topics/${id}`).then(({ data }) => {
    return data.topic;
  });
};
