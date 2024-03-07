import { useDispatch, useSelector } from "react-redux";
import { plusN, minunsN } from "./redux/modules/counter";
import { useState } from "react";

function App() {

 const [number, setNumber] = useState(0);

  const counter = useSelector((state) => {
    return state.counter;
  })

  console.log(counter.number);

  //dispatch를 가져옴
  const dispatch = useDispatch();

  return (
    <div>
      <div>현재 카운터 : {counter.number}</div>
      <input 
      type='number'
      value={number}
      onChange={(event) => {
          setNumber(event.target.value);
      }}
      ></input>
      <button onClick={() => {
        dispatch(plusN(+number))
      }}>+</button>
      <button onClick={() => {
        dispatch(minunsN(-number))
      }}>-</button>
    </div>
  );
}

export default App;
