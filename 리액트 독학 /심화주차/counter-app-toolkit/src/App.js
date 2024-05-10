import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { _addNumber, _miunsNumber } from './redux/modules/counter';

function App() {
  const [number, setNumber] = useState(1);

  const counter = useSelector((state) => {
    return state.counter;
  })
  
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counter.number}</h1>
      <br />
      <input type="number"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value)
        }} />
      <button onClick={() => { dispatch(_addNumber(parseInt(number)))}}>+</button>
      <button onClick={() => { dispatch(_miunsNumber(parseInt(number)))}}>-</button>
    </div>
  )
}

export default App