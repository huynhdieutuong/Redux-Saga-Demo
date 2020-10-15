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
