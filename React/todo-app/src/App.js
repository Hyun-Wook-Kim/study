import TodoTemplate from "./components/TodoTemplate";
import './App.scss'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import { useCallback, useState, useRef } from "react";

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text : '리액트 기초 알아보기',
      checked : true,
    },
    {
      id: 2,
      text : '컴포넌트 스타일링 하기',
      checked : true,
    },
    {
      id: 3,
      text : '일정 관리 앱 만들어보기',
      checked : false,
    },
  ])

  const nextId = useRef(4);

  const onInsert = useCallback((text)=>{
    const todo = {
      id : nextId.current,
      text: text,
      checked : false
    }
    setTodos(todos.concat(todo));
    console.log(nextId)
    nextId.current ++;
  },[todos])

  const onRemove = useCallback((id) => {
    console.log(todos)
    console.log(id)
    setTodos(todos.filter( todo => todo.id !== id ))
    console.log(todos)
    
  },[todos],)
  // 여기에 이거 안 해주면 초기 값 그대로 설정이 되어서 삭제 버튼 다시 누르면 지워진 거 다시 나옴 ㅋㅋㅋ;

  const onToggle = useCallback((id)=>{
    console.log(id);
    setTodos(todos.map(todo => todo.id == id ? {...todo, checked : !todo.checked} : todo))
  }, [todos])




  return(
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}></TodoInsert>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
  </TodoTemplate>
  )
};

export default App;
