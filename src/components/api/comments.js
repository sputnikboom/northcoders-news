import { BASE_URL } from "./index.js";
import axios from "axios";

export const getCommentsByArticle = id => {
  return axios.get(`${BASE_URL}/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchCommentVote = (id, direction) => {
  return axios.patch(`${BASE_URL}/comments/${id}?vote=${direction}`);
};

export const postComment = (body, userId, articleId) => {
  return axios
    .post(`${BASE_URL}/articles/${articleId}/comments`, {
      body,
      created_by: userId
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const removeComment = id => {
  return axios.delete(`${BASE_URL}/comments/${id}`).then(({ data }) => {
    return data;
  });
};
