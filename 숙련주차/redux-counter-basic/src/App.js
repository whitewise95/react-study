import { useDispatch, useSelector } from "react-redux";
import { plusOne, minunsOne } from "./redux/modules/counter";

function App() {
  const counter = useSelector((state) => {
    return state.counter;
  })

  console.log(counter.number);

  //dispatch를 가져옴
  const dispatch = useDispatch();

  return (
    <div>
      <div>현재 카운터 : {counter.number}</div>
      <button onClick={() => {
        dispatch(plusOne())
      }}>+</button>
      <button onClick={() => {
        dispatch(minunsOne())
      }}>-</button>
    </div>
  );
}

export default App;
