import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from "../modules/loading";


export default function createRequestSaga(type, request) { 
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    
    return function*(action){
        yield put (startLoading(type)) // 로딩 시작 put은 action을 dispatch 해 줌;
        try{
            const response = yield call(request, action.payload); // call은 인수로 전달받은 함수와, 해당 함수의 인수를 받아 실행 함.
            yield put({
                type : SUCCESS,
                payload : response.data,
            })
        } catch(e){
            yield put({
                type : FAILURE,
                payload : e,
                error : true
            })
        }
        yield put(finishLoading(type))
    }
}

// export default function createRequestThunk(type, request) {
//     const SUCCESS = `${type}_SUCESS`;
//     const FAILURE = `${type}_FAILURE`;

    
//     return params => async dispatch => {
//         dispatch( {type : type} );
//         dispatch( startLoading(type))
//         try{
//             const response = await request(params);
//             console.log(response)
//             dispatch({
//                 type : SUCCESS,
//                 payload : response.data
//             })
//             console.log({
//                 type : type,
//                 payload : response.data
//             })
//             dispatch( finishLoading(type))
//         } catch(e){
//             dispatch({
//                 type : FAILURE,
//                 payload : e,
//                 error : true
//             })
//             dispatch( startLoading(type))
//             throw e;
//         }
//     }

// }