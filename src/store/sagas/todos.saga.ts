import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions } from '../slices';
import { request } from 'utils';
import { ResponseGenerator } from 'store/types';

function* getTodosListRequest() {
  try {
    const response: ResponseGenerator = yield call(request, {
      url: `https://jsonplaceholder.typicode.com/todos`,
      method: 'GET',
    });
    console.log('response:', response);
    const responseData = response.data;
    console.log('responseData:', responseData);

    yield put(
      Actions.todos.getTodosListSuccess({
        todos: <any>responseData,
      })
    );
  } catch (err) {
    yield put(Actions.todos.getTodosListFailure());
  }
}

export function* todosSaga(): Generator<unknown> {
  yield takeLatest('todos/getTodosListRequest', getTodosListRequest);
}
