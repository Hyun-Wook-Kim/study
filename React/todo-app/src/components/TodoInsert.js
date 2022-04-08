import { useCallback, useState } from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss'

const TodoInsert = ({onInsert}) => {

     const [value, setValue] = useState('')

    const onChange = useCallback((e)=>{
        setValue(e.target.value);
    }, [])

    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        
        onInsert(value);
        setValue('')
    })

    // 빈 배열 넣으면 

    return(
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할 일을 입력 하세요' onChange={onChange} value={value}></input>
            <button type='submit'>
            <div className="add">
                <MdAdd/>
            </div>
            </button>
            
        </form>
    )
}

export default TodoInsert