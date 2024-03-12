import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState(null);


  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:4000/todos");
    console.log(data);
    setTodos(data);
  }

  useEffect(() => {
    fetchTodos();
  }, [])


  return (
    <div>
      {todos?.map((itme) => {
        return (
          <div key={itme.id}>
            <div>{itme.id}</div>
            <div>{itme.title}</div>
          </div>
        )
      })}
    </div>
  )
}

export default App