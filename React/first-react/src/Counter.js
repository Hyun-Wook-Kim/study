import {useState} from 'react';

const Counter = () => {
    const [values, setValues] = useState({
        이름 : '김현욱',
        성별 : '남자'
    });

    const onChange = (e) => {
        setValues({
            ...values,
             [e.target.name] : e.target.value 
        })
    }

    return(
        <>
            <input value={values.이름} name="이름" onChange={onChange}></input>
            <input value={values.성별} name="성별" onChange={onChange}></input>
            <p>{values.이름} 은 {values.성별} 입니다</p>
        </>
    )
}

export default Counter;