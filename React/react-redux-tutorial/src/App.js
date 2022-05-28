// import Counter from "./components/Counter";
import CounterContainer
 from "./comtainers/CounterContainer";
import TodosContainer from './comtainers/TodoContainer'

import Todos from "./components/Todos";


function App() {
  return (
    <>
    <CounterContainer></CounterContainer>
      <hr></hr>
    <TodosContainer></TodosContainer>
    </>
  );
}

export default App;
