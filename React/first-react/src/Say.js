import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("기본값");
  const enter = () => setMessage("자 드가자~");
  const leave = () => setMessage("자 나가자~");

  const [color, setColor] = useState("blue");

  return (
    <div>
      <h1 style={{ color: color }}>{message}</h1>
      <button onClick={enter}>드가자</button>
      <button onClick={leave}>나가자</button>
      <br></br>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        빠 빠 빨간맛
      </button>
      <button
        onClick={() => {
          setColor("yellow");
        }}
      >
        노 노 노란맛
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        파 파 파란맛
      </button>
    </div>
  );
};

export default Say;
