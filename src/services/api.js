import 'dotenv/config';
import axios from 'axios';

if(process.env.NODE_ENV === 'development') {
  url = 'http://localhost:3333'
}

if(process.env.NODE_ENV === 'production') {
  url = ''
}

const api = axios.create({
  baseURL: url,
});

export default api;
