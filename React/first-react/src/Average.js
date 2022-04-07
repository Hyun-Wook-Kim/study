import { useMemo, useState, useCallback, useRef} from "react";

const getAverage = (numbers) => {
  console.log("평균 계산중..");
  if (numbers.length == 0) {
    return 0;
  } else {
    const sum = numbers.reduce((prev, cur) => prev + cur);
    return sum / numbers.length;
  }
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const inputEl = useRef(null);



  // 컴포넌트가 처음 렌더링 될 때 함수 생성
  const onChange = useCallback((event)=>{
      if (isNaN(event.target.value)) return false;
      setNumber(event.target.value);
  }, [])
  
  // const onChange = (event) => {
    // };
    
    // number 나 list가 바뀔 때 함수 재 생성
    const onInsert = useCallback(() => {
    if(number ==="") return false
    
    const newList = list.concat(parseInt(number));
    setList(newList)
    setNumber('')
    inputEl.current.focus();
  }, [number, list])

  // const onInsert = (event) => {
  //   if (number === "") {
  //     alert("숫자 입력해 임마!");
  //     return false;
  //   }
  //   const newList = list.concat(parseInt(number));
  //   setList(newList);
  //   setNumber("");
  // };

  const avg = useMemo(() => getAverage(list), [list]);
  //   const avg = useMemo(() => getAverage(list), []);  빈 값을 주면 아예  추적을 안 하는 듯?

  return (
    <>
      <input onChange={onChange} value={number} ref={inputEl}></input>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <div>
        <p>
          평균값 : <b>{avg}</b>
        </p>
      </div>
    </>
  );
};

export default Average;


