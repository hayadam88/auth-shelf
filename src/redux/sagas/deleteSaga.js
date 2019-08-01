import { put } from 'redux-saga/effects';
import Axios from 'axios';

function* deleteSaga(action){
    try{
        yield Axios.delete(`/api/shelf/${action.payload}`)
        yield put({type: 'FETCH_ITEM'})
    }
    catch(error){
        console.log('error in deleteSaga', error)
    }
}

export default deleteSaga;