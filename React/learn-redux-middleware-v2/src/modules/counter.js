import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest, select, throttle } from 'redux-saga/effects';


const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC'
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC'



export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// export const increaseAsync = () => dispatch => {
//     setTimeout(()=>{
//         dispatch(increase())
//     }, 1000)
// } 
// export const decreaseAsync = () => dispatch => {
//     setTimeout(()=>{
//         dispatch(decrease())
//     }, 1000)
// }

export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined) // payload에 마우스 클릭 이벤트가 들어가지 않도록..?
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined) // payload에 마우스 클릭 이벤트가 들어가지 않도록..?


function* increaseSaga(){
    yield delay(1000);
    yield put(increase())
    // select 는 사가 내부에서 현재 상태를 참조해야 하는 상황이 생길 경우 사용 함.
    const number = yield select(state => state.counter);
    console.log(`현재 값은 ${number} 입니다.`)

}
function* decreaseSaga(){
    yield delay(1000);
    yield put(decrease()) // 특정 액션 디스패치
}

export function* counterSaga() {
    // yield takeEvery(INCREASE_ASYNC, increaseSaga);
    // yield takeLatest(DECREASE_ASYNC, decreaseSaga);
    yield throttle(3000, INCREASE_ASYNC, increaseSaga);
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions({
    [INCREASE] : state => state + 1,
    [DECREASE] : state => state - 1
},
initialState)

export default counter;