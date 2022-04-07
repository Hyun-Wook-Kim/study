import { useState, useEffect, useReducer } from "react";
import { Component } from "react";

import useInputs from "./useInputs";

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }
const Info = () => {
  // const [state, dispatch] = useReducer(reducer, {
  //   name: "",
  //   nickname: "",
  // });

  // const onChange = (event) => {
  //   dispatch(event.target);
  // };

    const [state, onChange] =  useInputs({
      name : '',
      nickname : ''
    })

  return (
    <>
      <p>name의 value는 {state.name}</p>
      <input name="name" value={state.name} onChange={onChange}></input>
      <p>nickname의 value는 {state.nickname}</p>
      <input name="nickname" value={state.nickname} onChange={onChange}></input>
    </>
  );
};

// const Info = () => {
//   const [name, setName] = useState("");
//   const [nicename, setNickname] = useState("");

//   useEffect(() => {
//     console.log("마운트 혹은 업데이트 됨 ", name);
//     return () => {
//       console.log("cleanup");
//       console.log(name);
//     };
//   }, []);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <>
//       <input value={name} name="이름" onChange={onChangeName}></input>
//       <input value={nicename} name="닉네임" onChange={onChangeNickname}></input>
//       <p>{name}</p> <p>{nicename}</p>
//     </>
//   );
// };

// class Info extends Component {
//   state = {
//     name: "",
//     nicename: "",
//   };

//   onChangeName = (e) => {
//     this.setState({ name: e.target.value });
//   };
//   onChangeNickname = (e) => {
//     this.setState({ nicename: e.target.value });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.name !== this.state.name) {
//       console.log("name 변경됨");
//     }
//   }

//   render() {
//     return (
//       <>
//         <input
//           value={this.state.name}
//           name="이름"
//           onChange={this.onChangeName}
//         ></input>
//         <input
//           value={this.state.nicename}
//           name="닉네임"
//           onChange={this.onChangeNickname}
//         ></input>
//         <p>{this.state.name}</p> <p>{this.state.nicename}</p>
//       </>
//     );
//   }
// }

export default Info;
