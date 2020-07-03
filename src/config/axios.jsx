import axios from "axios";

const instance = axios.create({ 
  mode: 'no-cors', 
  timeout: 5000,
  baseURL: window.location.hostname !== 'localhost' ? 'https://api.visiona.cat' : 'http://localhost:4000',
});

export default instance;