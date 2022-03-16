import { Component } from "react";

class EventPractice extends Component {
  state = {
    name: "",
    message: "",
  };

  // handleChange(e) {
  //   this.setState({ name: e.target.value });
  // }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    alert(this.state.name + "says" + this.state.message);
    this.setState({ name: "", message: "" });
  };

  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleClick}>state 값 확인해보기</button>
      </>
    );
  }
}

export default EventPractice;
