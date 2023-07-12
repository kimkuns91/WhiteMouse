import axios from 'axios';
import baseUrl from './apiConfig';

export const createUser = ({              
    id,
    password,
    name,
    email 
  }) => {
  return axios.post(`${baseUrl}/user/create`, { 
    id,
    password,
    name,
    email 
  });
};
export const readUser = ({ postId }) => {
  return axios.get(`${baseUrl}/user/${ postId }`);
};
export const signInUser = ({
  id,
  password
}) => {
  return axios.post(`${baseUrl}/user`, {  
    id,
    password
  });
};
export const updateUser = ({ postId, category, title, content }) => {
  return axios.put(`${baseUrl}/user/${ postId }`, { category, title, content });
};
export const deleteUser = ({ postId }) => {
  return axios.delete(`${baseUrl}/user/${ postId }`);
};
export const checkUnique = ({ id }) => {
  return axios.post(`${baseUrl}/user/unique`, { id });
};
