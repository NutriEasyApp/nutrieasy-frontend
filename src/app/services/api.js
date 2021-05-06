import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.15.121:3080/nutrieasy',
  baseURL: 'https://prd-nutrieasy.herokuapp.com/nutrieasy',
});

export default api;
