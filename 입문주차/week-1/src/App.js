import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  function flus() {
    setCount(count + 1)
  }
  
  function mius() {
    setCount(count - 1)
  }

  return (
    <div>
      {count}
      <div>
        <button onClick={flus}>+ 1</button>
        <button onClick={mius}>- 1</button>
      </div>
    </div>
  )
}

export default App