const TodoItem = ( { todo, onToggle, onRemove } ) => {
    return (
        <div>
            <input type="checkbox" onClick={() => {onToggle(todo.id)}} checked={todo.done} readOnly={true}></input>
            <span style={{ textDecoration : todo.done ? 'line-through' : 'none'}}>{todo.text}</span>
            <button onClick={()=>{
                onRemove(todo.id)
            }}>삭제</button>
        </div>
    )
}


const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        onInsert(input);
        onChangeInput('')
        
    };
    // console.log(todos)
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={ (e) => {
                    onChangeInput(e.target.value);
                }}></input>
                <button type="submit"> 등록 </button>
            </form>

            <div>
                {console.log(todos)}
                {todos.map((todo)=>{
                        return(
                            <TodoItem
                            todo = {todo}
                            onToggle={onToggle}
                            onRemove={onRemove}
                            key = {todo.id}>

                            </TodoItem>
                        )
                })}
            </div>

        </div>
    )
}

export default Todos;
