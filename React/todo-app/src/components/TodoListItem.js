import './TodoListItem.scss';

import{
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md'

const TodoListItem = ({todo, onRemove, onToggle}) => {

    return(
        <div className='TodoListItem'>
            <div className={todo.checked ? 'checkbox checked' : 'checkbox'} onClick={() => {onToggle(todo.id)}}>
                {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank/>}
                <div className='text'>
                {todo.text}
                </div>
            </div>

            <div className='remove' onClick={() => {onRemove(todo.id)}}>
                <MdRemoveCircleOutline/>
            </div>


        </div>

    )
}

export default TodoListItem;