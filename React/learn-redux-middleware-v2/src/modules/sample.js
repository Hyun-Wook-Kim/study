import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

import { call, put, takeLatest } from 'redux-saga/effects'
import { startLoading, finishLoading } from './loading';

import createRequestSaga from '../lib/createRequestThunk';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// export const getPost = id => async dispatch => {
//     dispatch({type:GET_POST})
//     try{
//         const response = await api.getPost(id);
//         dispatch({
//             type : GET_POST_SUCCESS,
//             payload : response.data
//         })
//     } catch(e){
//         dispatch({
//             type : GET_POST_FAILURE,
//             payload : e,
//             error : true
//         });
//         throw e
//     }
// }

// export const getUsers = id => async dispatch => {
//     dispatch({type:GET_USERS})
//     try{
//         const response = await api.getUsers();
//         dispatch({
//             type : GET_USERS_SUCCESS,
//             payload : response.data
//         })
//     } catch(e){
//         dispatch({
//             type : GET_USERS_FAILURE,
//             payload : e,
//             error : true
//         });
//         throw e
//     }
// }


// export const getPost = createRequestThunk(GET_POST, api.getPost)
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers)


export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUserSaga = createRequestSaga(GET_USERS, api.getUsers);


// function* getPostSaga (action) {
//     yield put(startLoading(GET_POST)) // 로딩 시작
//     try{
//         const post = yield call(api.getPost, action.payload) // api.getPost(action.payload) 랑 같은 의미. call 은 Promise 를 반환하는 함수를 호출 함.
//         yield put({
//             type : GET_POST_SUCCESS,
//             payload : post.data
//         })
//     } catch(e){
//         yield put({
//             type : GET_POST_FAILURE,
//             payload : e,
//             error : true,
//         })
//     }
//     yield put(finishLoading(GET_POST));
    
// }

// function* getUsersSaga (action) {
//     yield put(startLoading(GET_USERS)) // 로딩 시작
//     try{
//         const post = yield call(api.getUsers, action.payload) // api.getPost(action.payload) 랑 같은 의미. call 은 Promise 를 반환하는 함수를 호출 함.
//         yield put({
//             type : GET_USERS_SUCCESS,
//             payload : post.data
//         })
//     } catch(e){
//         yield put({
//             type : GET_USERS_FAILURE,
//             payload : e,
//             error : true,
//         })
//     }
//     yield put(finishLoading(GET_USERS));

// }

export function* sampleSaga(){
    yield takeLatest(GET_POST, getPostSaga)
    yield takeLatest(GET_USERS, getUserSaga)
}

const initialState = {
    loading : {
        GET_POST : false,
        GET_USERS : false
    },
    post : null,
    users : null,
}


const sample = handleActions(
    {
        [GET_POST] : state => ({
            ...state,
            loading : {
                ...state.loading,
                GET_POST : true
            }
        }),
        [GET_POST_SUCCESS] : (state, action) => ({
            ...state,
            loading : {
                ...state.loading,
                GET_POST : false
            },
            post : action.payload
        }),
        [GET_POST_FAILURE] : state => ({
            ...state,
            loading : {
                ...state.loading,
                GET_POST : true
            }
        }),

        [GET_USERS] : state => ({
            ...state,
            loading : {
                ...state.loading,
                GET_USERS : true
            }
        }),
        [GET_USERS_SUCCESS] : (state, action) => ({
            ...state,
            loading : {
                ...state.loading,
                GET_USERS : false
            },
            users : action.payload
        }),
        [GET_USERS_FAILURE] : state => ({
            ...state,
            loading : {
                ...state.loading,
                GET_USERS : false
            }
        }),

    },
    initialState
)

export default sample;