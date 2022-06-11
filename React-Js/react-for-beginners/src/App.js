import Button from "./Button";
import { useState, useEffect } from 'react'

function Hello() {
  useEffect(()=>{
    console.log('Created :)')

    return () => console.log('Destroyed :(');

  },[])

  return <h2>Hello</h2>
}

function App() {


  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");

  // useEffect(()=>{
  //   if(keyword !== '' && keyword.length >= 4)
  //   console.log('search for' + keyword)
  // }, [keyword])

  // const onClick = () => {
  //   setValue(prev => prev + 1)
  // }

  // const onChange = (e) => {
  //   setKeyword(e.target.value)
  // }

  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)

  return (

    <div>
      {showing? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'show' : 'hide' }</button>
    </div>

  );
}

export default App;
