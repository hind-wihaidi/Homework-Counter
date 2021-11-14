import React, {useState} from 'react'

function App() {
  const [count, setCount]=useState(0)
  function Add(){
    setCount(count+1)
  }
  function Subtract(){
    setCount(count-1)
  }
  function Clear(){
    setCount(0)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Add}>Plus</button>
      <button onClick={Subtract}>Minus</button>
      <button onClick={Clear}>Clear</button>
    </div>
  );
}

export default App;
