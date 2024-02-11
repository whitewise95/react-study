import React from 'react'
import Layout from 'Layout';
import Child from 'Child';

function App() {
  const temp = {
    name : '홍길동',
    age : 15
  }

  return <Child name = {temp.name} age = {temp.age}></Child>;
};

export default App