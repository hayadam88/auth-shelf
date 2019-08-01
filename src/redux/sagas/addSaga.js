import {put} from 'redux-saga/effects';
import Axios from 'axios';

function* addSaga(action) {
    try {
        yield Axios.post(`/api/shelf`, action.payload)
        yield put({type: 'FETCH_ITEM'})
    } catch (error) {
        console.log('error in addSaga', error)
    }
}

export default addSaga;