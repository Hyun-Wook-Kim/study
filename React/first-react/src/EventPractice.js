import { Component, useState } from "react";

// class EventPractice extends Component {
//   state = {
//     name: "",
//     message: "",
//   };

//   // handleChange(e) {
//   //   this.setState({ name: e.target.value });
//   // }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleClick = () => {
//     alert(this.state.name + "says" + this.state.message);
//     this.setState({ name: "", message: "" });
//   };

//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.handleChange}
//         ></input>
//         <input
//           type="text"
//           name="message"
//           value={this.state.message}
//           onChange={this.handleChange}
//         ></input>
//         <button onClick={this.handleClick}>state 값 확인해보기</button>
//       </>
//     );
//   }
// }

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + " " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        value={message}
        onChange={onChange}
      ></input>
      <button onClick={onClick}>state 값 확인해보기</button>
    </>
  );
};

export default EventPractice;
