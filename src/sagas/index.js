import { call, put, takeLatest } from 'redux-saga/effects';
import { getList } from '../apis/task';
import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/task';
import * as taskConstants from '../contants/task';
import { toast } from 'react-toastify';

function* watchFetchListTaskAction() {
  try {
    const res = yield call(getList);
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
