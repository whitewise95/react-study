import React from 'react'

// props를 통해 부모 -> 자식 데이터가 전달
function Son(props) {
  return <div>{props.GrandFather}의 딸 {props.motherName}의 아들 입니다.</div>
}

//  부모 -> 자식 에게 정보를 전달했다!
function Mather(props) {
  const name = "흥부인";
  return <Son motherName = {name} GrandFather = {props.GrandFather}/>
}

function GrandFather(){
  const name = "흥할아버지";
    return <Mather GrandFather = {name} />
}

function App() {
  return (
    <div><GrandFather/></div>
  )
}

export default App
