import 'dotenv/config';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://spolid-backend.herokuapp.com',
});

export default api;
