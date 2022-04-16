import {
    MdCheckBoxOutlineBlank, 
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';

import './TodoListItem.scss'
import React from 'react';

const TodoListItem = ( {todo, onRemove, onToggle, style} ) => {
    return(
        <div className='TodoListItem-virtualized' style={style}>
            <div className='TodoListItem'>
                <div className={todo.checked ? 'checkbox checked' : 'checkbox' } onClick={() => {
                    // console.log(todo.id);
                    onToggle(todo.id)
                }}>
                    {todo.checked ? <MdCheckBox></MdCheckBox> : <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>}
                    <div className='text'>{todo.text}</div>
                </div>
                <div className='remove' onClick={() => onRemove(todo.id)}>
                    <MdRemoveCircleOutline></MdRemoveCircleOutline>
                </div>
            </div>
        </div>


    )
}

export default React.memo(TodoListItem);