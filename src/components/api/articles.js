import { BASE_URL } from "./index.js";
import axios from "axios";

export const getAllArticles = () => {
  return axios.get(`${BASE_URL}/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = id => {
  return axios.get(`${BASE_URL}/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getArticlesByTopic = id => {
  return axios.get(`${BASE_URL}/topics/${id}/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const patchArticleVote = (id, direction) => {
  return axios.patch(`${BASE_URL}/articles/${id}?vote=${direction}`);
};

export const postArticle = (body, title, userId, topic) => {
  return axios
    .post(`${BASE_URL}/topics/${topic}/articles`, {
      body,
      title,
      created_by: userId
    })
    .then(({ data }) => {
      return data;
    });
};
