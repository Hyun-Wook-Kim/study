import { createStore  } from "redux";



const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1')
const btnIncrease = document.querySelector('#increase')
const btnDecrease = document.querySelector('#decrease')

divToggle.addEventListener('click',()=>{
    store.dispatch(toggleSwich())
})
btnIncrease.addEventListener('click',()=>{
    store.dispatch(increase(1))
})
btnDecrease.addEventListener('click',()=>{
    store.dispatch(decrease())
})


const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';


const toggleSwich = () => {
    console.log('토글 스위치!')
    return ({ type : TOGGLE_SWITCH });
}

const increase = (difference) => {
    return ({ type : INCREASE, difference });
}

const decrease = () => {
    return ({ type : DECREASE});
}

const initialState = {
    toggle : false,
    counter : 0,
}


function reducer(state = initialState, action) {
    switch(action.type){
        case 'TOGGLE_SWITCH' : 
        return {
            ...state,
            toggle : !state.toggle
        }
        case 'INCREASE' : 
        return{
            ...state,
            counter : state.counter + action.difference
        }
        case 'DECREASE' : 
        return {
            ...state,
            counter : -- state.counter
        }
        default : {
            return state
        }
    }
}


const store = createStore(reducer)


const render = () => {
    // 현재 상태 불러오기
    const state = store.getState();

    if(state.toggle){
        divToggle.classList.add('active');
    } else{
        divToggle.classList.remove('active')
    }

    counter.innerText = state.counter;

}

render()
store.subscribe(render);

// const listener = () => {
//     console.log('상태가 업데이트 됨')
// }

// const unsubscribe = store.subscribe(listener);
// unsubscribe();