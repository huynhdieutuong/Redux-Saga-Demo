import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { getList } from '../apis/task';
import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/task';
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

function* rootSaga() {
  yield takeLatest(taskConstants.FETCH_TASK, watchFetchListTaskAction);
}

export default rootSaga;
