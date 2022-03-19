import EventPractice from "./EventPractice";
import { Component } from "react";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

// const App = () => {
//   return <EventPractice />;
// };

class App extends Component {
  render() {
    return (
      <div>
        <IterationSample></IterationSample>
      </div>
    );
  }
}
export default App;
