import { useEffect, useState } from 'react'
import React from 'react'

function App() {

  const [value, setValue] = useState('');

  useEffect(() => {
    console.log(`hello useEffect! : ${value}`);

    return () => {
      console.log(" 나 사라져요");
    }
  }, [value])

  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={(event => {
          setValue(event.target.value)
        })}
      >
      </input>
    </div>
  )
}

export default App