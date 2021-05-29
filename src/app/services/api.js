import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.10:3080/nutrieasy', //gabriel
   //baseURL: 'http://192.168.15.121:3080/nutrieasy', //lucas
  //baseURL: 'https://prd-nutrieasy.herokuapp.com/nutrieasy',
});

export default api;
