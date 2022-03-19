import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  handleFocus = () => {
    this.thisInput.focus();
  };

  state = {
    password: "",
    clicked: false,
    validate: false,
  };

  handleChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleClick = () => {
    this.setState({
      clicked: true,
      validate: this.state.password === "0000" ? true : false,
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.password}
          ref={(ref) => (this.thisInput = ref)}
          onChange={this.handleChange}
          type="password"
          className={
            this.state.clicked
              ? this.state.validate
                ? "success"
                : "failure"
              : ""
          }
        ></input>
        <button
          onClick={() => {
            this.handleClick();
            this.handleFocus();
          }}
        >
          비번 검증하지
        </button>
      </>
    );
  }
}

export default ValidationSample;
