import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

interface ErrorResponse {
  message: string;
}

api.interceptors.response.use(
  response => response,
  (error: AxiosError<ErrorResponse>) => {
    const errMessage = error.response ? error.response.data.message : error.message;
    throw new Error(errMessage);
  },
);

export default api;