import axios from 'axios';

export const http = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://analog-notes-api.herokuapp.com',
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
    timeout: 90000,
  });
};
