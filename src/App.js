import React, {useState} from 'react';
import './App.css';
import Test from './Test';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(1);
  function increment() {
    setData(2)
    setCount(count + 1)
  }
  return (
    <div>
      <h1>React Memo</h1>
      <Test data={data}/>
      <button onClick={increment}>+ {count} count</button>
    </div>
  );
}

export default App;
