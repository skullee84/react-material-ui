import axios from 'axios';

axios.defaults.timeout = 5000;

axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  bindError(error);
  return Promise.reject(error.response);
});

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  bindError(error);
  return Promise.reject(error.response);
});

const bindError = (error) => {
  console.log(error);
};

export default axios;
