import axios from 'axios';

const api = axios.create({
  baseURL: 'https://prd-nutrieasy.herokuapp.com/nutrieasy',
});

export default api;
