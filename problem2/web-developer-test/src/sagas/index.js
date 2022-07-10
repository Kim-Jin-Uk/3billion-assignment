import axios from 'axios'
import {
    all, call, fork, put, takeLatest
} from 'redux-saga/effects'
import {GET_ANIMAL_LIST_FAILURE, GET_ANIMAL_LIST_REQUEST, GET_ANIMAL_LIST_SUCCESS} from '../reducers'


function getAnimalListAPI(){
    return axios.get(
        'https://script.googleusercontent.com/macros/echo?user_content_key=-IBTkf0xO8ohdPlPmGaTJPVN9yowFd2ymnsHin7DbWbhu75-NzcfM5V9RJbMo6Ty_eLHQBcUTeXBU7L65mTU1nJsMC4p3c3Tm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMnlFFJdsZ45o9OHBZtd23PRzGqnMMtwVXxZatTcZ_ElWWQARivlerawy0qOn_ogddlOaIY5A3XJYuWNj0SVUwM&lib=MQ5y52npMqnCycenuTos7mqgLslxuhQuA'
    )
}

function* getAnimalList(){
    try{
        const result = yield call(getAnimalListAPI);
        yield put({
            type:GET_ANIMAL_LIST_SUCCESS,
            data: result.data
        })
    }catch (err){
        yield put({
            type:GET_ANIMAL_LIST_FAILURE,
            data:err.response.data
        })
        console.log(err)
        console.error(err)
    }
}

function* watchGetAnimalList() {
    yield takeLatest(GET_ANIMAL_LIST_REQUEST, getAnimalList);
}

export default function* rootSaga() {
    yield all([
        fork(watchGetAnimalList),
    ])
}
