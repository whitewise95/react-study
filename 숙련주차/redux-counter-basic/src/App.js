import { useDispatch, useSelector } from "react-redux";

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
        dispatch({
          type: 'PLUS_ONE',
        })
      }}>+</button>
      <button onClick={() => {
        dispatch({
          type: 'MIUNS_ONE',
        })
      }}>-</button>
    </div>
  );
}

export default App;
