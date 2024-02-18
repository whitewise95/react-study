import React, { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>

      Number Status : {number}
      <button onClick={() => setNumber((currnetNumber) => {
        return currnetNumber + 1;
      })}>누르면 Up</button>
    </div>
  )
}

export default App