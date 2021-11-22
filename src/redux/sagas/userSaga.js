import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .catch((error) => { throw error})
}

//Generator function
function* fetchUsers() {
    try {
        const users = yield call(getApi); //Get the users from the API call
        yield put({ type: 'GET_USERS_SUCCESS', users: users }); // Dispatches the GET_USERS_SUCCESS action
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', message: e.message });
    }
}

//Generator function
function* userSaga() {
    //Listens for GET_USERS_REQUESTED action and it will call fetchUsers generator function
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers); 
}

export default userSaga;