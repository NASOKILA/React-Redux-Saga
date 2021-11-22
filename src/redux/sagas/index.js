import { all } from 'redux-saga/effects';
import userSaga from './userSaga';

// Combines all sagas into a rootSaga
export default function* rootSaga() {
    yield all([
        userSaga(),
    ]);
}