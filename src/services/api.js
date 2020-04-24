import 'dotenv/config';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://spolid-back.herokuapp.com/',
});

export default api;
