import './App.css';
// import 'App.css';

// 조부모 컴포넌트
function GrandParent() {
  return <Parent/>
}

// 부모 컴포넌트
function Parent() {
  return <Child/>
}

// 자식 컴포넌트
function Child() {
  return <div>나는 자식 입니다.</div>;
}

function App() {
  return <GrandParent/>
}

export default App;
