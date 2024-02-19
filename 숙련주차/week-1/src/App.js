import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const idRef = useRef("");
  const pwRef = useRef("");

  const [id, setId] = useState("");

  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  };

  // 렌더링이 될 때
  useEffect(() => {
    idRef.current.focus();
  }, []);

  // 왜 useEffect 안에 놓았을까요?
  useEffect(() => {
    if (id.length >= 10) {
      pwRef.current.focus();
    }
  }, [id]);

  return (
    <>
      <div>
        아이디 :
        <input
          type="text"
          ref={idRef}
          value={id}
          onChange={onIdChangeHandler}
        />
      </div>
      <div>
        비밀번호 : <input type="password" ref={pwRef} />
      </div>
    </>
  );
}

export default App;