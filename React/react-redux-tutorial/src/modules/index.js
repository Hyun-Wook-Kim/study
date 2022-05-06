import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';


// 리듀서가 여러개 일 때는 combinereducers로 하나로 합쳐주어야 스토어를 만들 때 한 개의 리듀서만 사용할 수 있음!

const rootReducer = combineReducers({
    counter,
    todos,
})

export default rootReducer;