import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../contants';

const url = 'tasks';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const filterList = (keyword) => {
  return axiosService.get(`${API_ENDPOINT}/${url}?q=${keyword}`);
};
