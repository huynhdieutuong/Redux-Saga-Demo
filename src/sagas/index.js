import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { getList, filterList } from '../apis/task';
import {
  fetchListTaskSuccess,
  fetchListTaskFailed,
  filterListTaskSuccess,
  filterListTaskFailed,
} from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';
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

function* rootSaga() {
  yield takeLatest(taskConstants.FETCH_TASK, watchFetchListTaskAction);
  yield takeLatest(taskConstants.FILTER_TASK, watchFilterListTaskAction);
}

export default rootSaga;
