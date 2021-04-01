import axios from 'axios';

const api = axios.create({
  /* baseURL: 'http://192.168.15.121:3080', */
  baseURL: 'http://192.168.0.5:19000',
});

export default api;
