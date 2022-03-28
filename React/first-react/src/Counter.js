import { useState } from "react";
import { useReducer } from "react";

// const Counter = () => {
//     const [values, setValues] = useState({
//         이름 : '김현욱',
//         성별 : '남자'
//     });

//     const onChange = (e) => {
//         setValues({
//             ...values,
//              [e.target.name] : e.target.value
//         })
//     }

//     return(
//         <>
//             <input value={values.이름} name="이름" onChange={onChange}></input>
//             <input value={values.성별} name="성별" onChange={onChange}></input>
//             <p>{values.이름} 은 {values.성별} 입니다</p>
//         </>
//     )
// }

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <>
      <p>
        현재 카운터 값은 <b>{state.value} 입니다</b>
      </p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        1 증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        1 감소
      </button>
    </>
  );
};

export default Counter;
