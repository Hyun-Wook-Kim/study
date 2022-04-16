import './TodoList.scss'
import TodoListItem from './TodoListItem';
import React from 'react';


// const TodoList = ({ todos, onRemove, onToggle }) => {
//     return(
//         <div className='TodoList'>
//             {todos.map((todo)=>{
//                 return <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}></TodoListItem> 
//             })}
//         </div>
//     )
// }

import { useCallback } from 'react';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onRemove, onToggle }) => {
    const rowRenderer = useCallback (({ index, key, style }) => {
        const todo = todos[index];
        return(
            <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style}></TodoListItem>
        )
    }, [onRemove, onToggle, todos])


    return (
        <List
        className = "TodoList"
        width = {512} // 컴포넌트 전체 크기
        height={513} // 컴포넌트 전체 높이
        rowCount = {todos.length} // 항목의 개수
        rowHeight = {57} // 항목의 높이
        rowRenderer={rowRenderer} // 항목 렌더링시 사용하는 함수
        list = {todos}
        style ={{outline : 'none'}}
        >

        </List>
    )

}



export default React.memo(TodoList);