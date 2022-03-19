import { useState } from "react";

const IterationSample = () => {
  const [list, setList] = useState([
    { id: 1, text: "로스트 아크" },
    { id: 2, text: "메이플 스토리" },
    { id: 3, text: "바람의 나라" },
    { id: 4, text: "리그 오브 레전드" },
  ]);

  const [input, setInput] = useState("");
  const [newId, setnewId] = useState("5");

  const handleInputValue = (e) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    const newList = list.concat({ id: newId, text: input });
    setList(newList);
    setInput("");
    setnewId(newId + 1);
  };

  const onRemove = (id) => {
    const newList = list.filter((el) => el.id !== id);
    setList(newList);
  };

  const lists = list.map((el) => (
    <li
      key={el.id}
      onDoubleClick={() => {
        onRemove(el.id);
      }}
    >
      {el.text}
    </li>
  ));

  return (
    <>
      <input
        placeholder="추가할 목록"
        value={input}
        onChange={handleInputValue}
      ></input>
      <button onClick={onClick}>추가추가 두잇두잇</button>
      <ul>{lists}</ul>
    </>
  );
};

export default IterationSample;
