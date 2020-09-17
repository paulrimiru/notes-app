import axios from 'axios';

export const http = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
    timeout: 90000,
  });
};
