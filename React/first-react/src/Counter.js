import { Component } from "react";

// state 를 작성할 때는 constructor 내부 this.state에 작성해 준다!
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () =>
              console.log("첫번째 함수 끝")
            );
            this.setState(
              (prevValue, props) => {
                return { number: prevValue.number + 1 };
              },
              () => console.log("두 번째 함수 끝")
            );
          }}
        >
          1씩 더하기
        </button>
      </div>
    );
  }
}

export default Counter;
