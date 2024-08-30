
import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (username, email, password) => {
  return AxiosInstance.post('register/', { username, email, password });
};

export const loginUser = async (username, password) => {
  return AxiosInstance.post('login/', { username, password });
};

export const fetchExpenses = async () => {
  return AxiosInstance.get('expenses/');
};

export const createExpense = async (expense) => {
  return AxiosInstance.post('expenses/', expense);
};

export const createTrip = async (trip) => {
  return AxiosInstance.post('trips/', trip);
};

export default AxiosInstance;
