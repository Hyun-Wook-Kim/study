import './TodoInsert.scss';
import {MdAdd} from 'react-icons/md'
import { useCallback, useState } from 'react';





const TodoInsert = ({ onInsert }) => {

    const [value, setValue] = useState('')

    const onChange = useCallback((e)=>{
        setValue(e.target.value)
    },[])

    return(
        <form className='TodoInsert'>
            <input placeholder='할 일을 입력하세요' onChange={onChange} value={value}>
            </input>
            <button onClick={(e) => {
                e.preventDefault();
                onInsert(value)
                setValue('')
            }}>
                <MdAdd></MdAdd>
            </button>
        </form>
    )
}

export default TodoInsert;