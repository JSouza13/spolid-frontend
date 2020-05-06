import 'dotenv/config';
import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://spolid-backend.herokuapp.com',
  baseURL: 'http://localhost:3333',
});

export default api;
