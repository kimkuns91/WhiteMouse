import axios from 'axios';
import baseUrl from './apiConfig';

export const createBoard = ({ category, title, content }) => {
  return axios.post(`${baseUrl}/board`, { category, title, content });
};
export const readBoard = ({ postId }) => {
  return axios.get(`${baseUrl}/board/${ postId }`);
};
export const loadBoard = () => {
  return axios.get(`${baseUrl}/board`);
};
export const updateBoard = ({ postId, category, title, content }) => {
  return axios.put(`${baseUrl}/board/${ postId }`, { category, title, content });
};
export const deleteBoard = ({ postId }) => {
  return axios.delete(`${baseUrl}/board/${ postId }`);
};
