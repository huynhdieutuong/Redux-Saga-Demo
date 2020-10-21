import * as taskConstants from '../contants/task';

const initialState = {
  loadingBtn: false,
  listTask: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case taskConstants.FETCH_TASK:
      return {
        ...state,
        listTask: [],
      };
    case taskConstants.FETCH_TASK_SUCCESS:
    case taskConstants.FILTER_TASK_SUCCESS:
      return {
        ...state,
        listTask: payload.data,
      };
    case taskConstants.FETCH_TASK_FAILED:
    case taskConstants.FILTER_TASK_FAILED:
      return {
        ...state,
        listTask: [],
      };
    case taskConstants.ADD_TASK:
      return {
        ...state,
        loadingBtn: true,
      };
    case taskConstants.ADD_TASK_SUCCESS:
      return {
        ...state,
        listTask: [...state.listTask, payload.data],
        loadingBtn: false,
      };
    case taskConstants.ADD_TASK_FAILED:
      return {
        ...state,
        loadingBtn: false,
      };
    default:
      return state;
  }
};

export default reducer;
