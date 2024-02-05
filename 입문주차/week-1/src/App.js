import './App.css';
// import 'App.css';

function App() {
  function onClickHandler(){
    alert("클릭")
  }

  const onClickHandler2 = () => {
    alert("클릭")
  }
	// <---- 자바스크립트 영역 ---->

  return (
  /* <---- HTML/JSX 영역  ---->*/
    <div
      style={{
        height: '100vh',
        display: ' flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    <span>이것은 내가 만든 App컴포너트 입니다.</span>
    <button onClick={onClickHandler2}>클릭!</button>
    </div>
  );
}

export default App;
