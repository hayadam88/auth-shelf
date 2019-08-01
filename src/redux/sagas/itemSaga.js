import { put } from 'redux-saga/effects';
import Axios from 'axios';

function* itemSaga(){
    try{
        const response = yield Axios.get('/api/shelf');
        console.log('itemSaga')
        console.log(response.data);
        yield put({type: 'SET_ITEM_LIST', payload: response.data})
    }
    catch(error){
        console.log('error in itemSaga', error);
    }
}

export default itemSaga;