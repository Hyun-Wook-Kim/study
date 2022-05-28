<<<<<<< HEAD
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = () => {
  return {
    type: INCREASE,
  };
};
export const decrease = () => {
  return {
    type: DECREASE,
  };
};

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case INCREASE:
      console.log(state.state.number);
      return {
        state: {
          number: state.state.number + 1,
        },
      };

    case DECREASE:
      console.log(state.state.number);
      return {
        state: {
          number: state.state.number - 1,
        },
      };
    default:
      return {
        state,
      };
  }
=======
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'


// 제일 먼저 해야 하는 건 액션의 타입을 지정하는 것. 보통 모듈 이름/액션 이름   << 요런 식으로 작성한다.


// 요 액션들을 다른 파일에서 사용할 수 있도록 export 해 줌.
export const increase = () => ({type : INCREASE});
export const decrease = () => ({type : DECREASE});


// 모듈의 초기 상태와 리듀서 함수 작성.


const initialState = {
    number : 0
}


function counter(state = initialState, action){
    switch(action.type){
        case INCREASE : return { number : state.number + 1 }
        case DECREASE : return { number : state.number - 1 }
        default : return state
    }
>>>>>>> 3f6b10d435956da598d9784404be5a6c3f56ecfd
}

export default counter;