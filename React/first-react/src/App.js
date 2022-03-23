import EventPractice from "./EventPractice";
import { Component } from "react";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";

// const App = () => {
//   return <EventPractice />;
// };


function getRandomColor() {
  return `#` + Math.floor(Math.random() * 16777215).toString(16)
}

class App extends Component {

  state = {
    color : '#000000'
  }

  handleClick = () => {
    this.setState({color : getRandomColor()})
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤한 색상 전달</button>
        <LifeCycleSample color={this.state.color}></LifeCycleSample>
      </div>
    );
  }
}
export default App;
