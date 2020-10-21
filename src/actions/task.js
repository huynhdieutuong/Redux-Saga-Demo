import * as taskConstants from '../contants/task';

export const fetchListTask = () => ({
  type: taskConstants.FETCH_TASK,
});

export const fetchListTaskSuccess = (data) => ({
  type: taskConstants.FETCH_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const fetchListTaskFailed = (error) => ({
  type: taskConstants.FETCH_TASK_FAILED,
  payload: {
    error,
  },
});

export const filterListTask = (keyword) => ({
  type: taskConstants.FILTER_TASK,
  payload: {
    keyword,
  },
});

export const filterListTaskSuccess = (data) => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const filterListTaskFailed = (error) => ({
  type: taskConstants.FILTER_TASK_FAILED,
  payload: {
    error,
  },
});

export const addTask = (newTask) => ({
  type: taskConstants.ADD_TASK,
  payload: {
    newTask,
  },
});

export const addTaskSuccess = (data) => ({
  type: taskConstants.ADD_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const addTaskFailed = (error) => ({
  type: taskConstants.ADD_TASK_FAILED,
  payload: {
    error,
  },
});
