import "./App.css";

// function App() {
//   const name = "나는 김현욱이야";
//   const 조건1 = true;
//   const 조건2 = false;
//   const 조건3 = undefined;
//   const style1 = {
//     color: "red",
//     fontSize: "20px",
//   };

//   return (
//     <>
//       <h1
//         style={style1} // 여기에다가 주석을 좀 달아볼까나?
//       >
//         안녕 리액트! {name}
//       </h1>
//       {조건1 ? "true" : "false"}
//       <br></br>
//       {조건2 ? "true" : "false"}
//       <br></br>
//       {조건3 && <p>나와야 해?</p>}
//       <br></br>
//       {조건3 || "undefined"}

//       <h1
//         style={{
//           fontSize: "24px",
//           fontWeight: "600",
//           color: "green",
//         }}
//       >
//         {/* 중간에 주석을 넣을 때는 이렇게 넣어야 해! */}
//         오늘은 여기까지만 할까 리액트?
//       </h1>
//       <h1 className="react">마지막으로 복습을 하자!</h1>
//     </>
//   );
// }

// import { Component } from "react";

// class App extends Component {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;
//   }
// }

import { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

class App extends Component {
  render() {
    return (
      <>
        <MyComponent name="이름">칠드런 내용들</MyComponent>
        <Counter></Counter>
        <Say></Say>
      </>
    );
  }
}

export default App;
