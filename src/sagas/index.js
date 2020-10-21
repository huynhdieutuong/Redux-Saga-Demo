import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { getList, filterList, addTask } from '../apis/task';
import {
  fetchListTaskSuccess,
  fetchListTaskFailed,
  filterListTaskSuccess,
  filterListTaskFailed,
  addTaskSuccess,
  addTaskFailed,
} from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';
import { hideModal } from '../actions/modal';
import * as taskConstants from '../contants/task';
import { toast } from 'react-toastify';

function* watchFetchListTaskAction() {
  try {
    yield put(showLoading());
    const res = yield call(getList);

    yield delay(2000);
    yield put(hideLoading());

    yield put(fetchListTaskSuccess(res.data));
  } catch (error) {
    yield put(fetchListTaskFailed(error));
    toast.error(error.message);
  }
}

function* watchFilterListTaskAction({ payload }) {
  try {
    const res = yield call(filterList, payload.keyword);
    yield put(filterListTaskSuccess(res.data));
  } catch (error) {
    yield put(filterListTaskFailed(error));
  }
}

function* watchAddTaskAction({ payload }) {
  try {
    const res = yield call(addTask, payload.newTask);
    yield delay(2000);

    yield put(addTaskSuccess(res.data));
    yield put(hideModal());
  } catch (error) {
    yield put(addTaskFailed(error));
    toast.error(error.message);
  }
}

function* rootSaga() {
  yield takeLatest(taskConstants.FETCH_TASK, watchFetchListTaskAction);
  yield takeLatest(taskConstants.FILTER_TASK, watchFilterListTaskAction);
  yield takeLatest(taskConstants.ADD_TASK, watchAddTaskAction);
}

export default rootSaga;
