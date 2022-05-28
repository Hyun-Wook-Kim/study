import { useCallback } from 'react';

import { connect, useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from "../modules/todos";

import useActions from '../lib/useActions';

const TodosContainer = () => {
    const { input, todos } = useSelector( ({todos}) => ({
        input : todos.input, todos : todos.todos}) )

    // const dispatch = useDispatch();
    // const onChangeInput = useCallback( input => dispatch(changeInput(input)), [dispatch])
    // const onInsert = useCallback( text => dispatch(insert(text)), [dispatch])
    // const onToggle = useCallback( id => dispatch(toggle(id)), [dispatch])
    // const onRemove = useCallback( id => dispatch(remove(id)), [dispatch])

        const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
            [changeInput, insert, toggle, remove], []
        )

    return(
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        >

        </Todos>
        )
}

export default TodosContainer;


// const TodosContainer = ( { 
//     input,
//     todos,
//     changeInput,
//     insert,
//     toggle,
//     remove,
//  }) => {
//      return(
//          <Todos input={input} todos={todos} onChangeInput={changeInput}
//          onInsert={insert}
//          onToggle={toggle}
//          onRemove={remove}
//          >
             
//          </Todos>
//      )
//  }

//  export default connect( ({ todos }) => ({
//          input : todos.input,
//          todos : todos.todos

//  }), {changeInput, insert, toggle, remove })(TodosContainer)
//  console.log(TodosContainer)
