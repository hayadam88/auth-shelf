import { put } from 'redux-saga/effects';
import Axios from 'axios';

function* editSaga(action){
    try{
        yield Axios.put(`/api/shelf/${action.payload.id}`, action.payload)
        yield put({type: 'FETCH_ITEM'})
    }
    catch(error){
        console.log('error in editSaga', error);
    }
}

export default editSaga;