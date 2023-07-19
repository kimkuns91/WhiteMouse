import axios from 'axios';
import baseUrl from './apiConfig';

export const chatAi = ({ chat }) => {
  return axios.post(`${baseUrl}/openai`, { chat });
};
