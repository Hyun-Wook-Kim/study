import './App.scss'
import './components/TodoTemplate.js'
import { useCallback, useState, useRef, useReducer } from "react";
import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert.js'
import TodoList from './components/TodoList';

function createBulkTodos(){
    const array = [];
    for (let i = 1 ; i <= 2500; i++) {
        array.push({
            id : i,
            text : `할 일 목록 ${i}번째`,
            checked : false,
        })
    }
    return array;
}

// reducer (현재state, action 정보)
function todoReducer(todos, action){
    switch(action.type){
        case 'INSERT' : return todos.concat(action.todo)

        case 'REMOVE' : return todos.filter(todo => todo.id !== action.id)

        case 'TOGGLE' : return todos.map(todo => todo.id === action.id ? {...todo, checked : !todo.checked} : todo)

        default : return todos
    }
}

function App() {

    // const [todos, setTodos] = useState(createBulkTodos)
    // const nextId = useRef(4);

    // const onInsert = useCallback((text)=>{
    //     const todo = {
    //         id : nextId.current,
    //         text : text,
    //         checked : false
    //     }
    //     setTodos(todos => todos.concat(todo))
    //     nextId.current++;
    // },[])

    // const onRemove = useCallback((id) => {
    //     setTodos(todos => todos.filter(todo => todo.id !== id))
    // }, [])

    // const onToggle = useCallback((id)=>{
    //     setTodos(todos => todos.map(todo => {
    //         return todo.id === id ? {...todo, checked : !todo.checked} : todo
    //     }))
    // }, [])



    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

    const nextId = useRef(2501)

    const onInsert = useCallback((text)=>{
        const todo = {
            id : nextId.current,
            text,
            checked : false
        }
        dispatch({type : 'INSERT', todo})
        nextId.current++
    }, [])
        
    const onRemove = useCallback(id => {
        dispatch({type : 'REMOVE', id})
    },[])

    const onToggle = useCallback(id => {
        dispatch({type : 'TOGGLE', id})
    },[])


    return(
        <TodoTemplate>
            <TodoInsert onInsert={ onInsert }></TodoInsert>
            <TodoList todos={todos} onRemove={ onRemove } onToggle={onToggle}></TodoList>
        </TodoTemplate>
    )

};

export default App;
