import React, { useState } from 'react'
import { plusN, minusN } from './redux/modules/counter'
import { useDispatch, useSelector } from 'react-redux'

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
      <button onClick={() => { dispatch(plusN(parseInt(number)))}}>+</button>
      <button onClick={() => { dispatch(minusN(parseInt(number)))}}>-</button>
    </div>
  )
}

export default App