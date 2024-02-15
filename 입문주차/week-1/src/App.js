import React from 'react'
import "App.css";


function Block (props) {
  return <div className='square-style'>{props.name}</div>
}

function App() {
  return (
    <div className='app-style'>
      <Block name = '감자'></Block>
      <Block name = '고구마'></Block>
      <Block name = '오이'></Block>
      <Block name = '가지'></Block>
      <Block name = '옥수수'></Block>
    </div>
  )
}

export default App