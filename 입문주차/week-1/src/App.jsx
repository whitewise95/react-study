import React, { useState } from 'react'
import "./App.css"
import Button from 'componet/Button';
import User from 'componet/Users';

function App() {
  // const users = [
  //   {id: 1, age: 30, name: "송중기"},
  //   {id: 2, age: 24, name: "송강"},
  //   {id: 3, age: 21, name: "김유정"},
  //   {id: 4, age: 29, name: "구교환"}
  // ]

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" }
  ])

  const saveUsersHandler = () => {
    const newUser = { id: users.length + 1, age: age, name: name };
    setUsers([...users, newUser]); // 원래있던 user에 newUser 추가
  }

  const removeUsersHandler = (id) => {
    const totalUsers = users.filter(function (item) { return item.id !== id });
    setUsers(totalUsers === undefined ? [{}] : totalUsers); // 원래있던 user에 newUser 추가 
  }

  return (
    <div>
      이름 :<input type='text' value={name} onChange={(event) => setName(event.target.value)} />
      나이 : <input type='text' value={age} onChange={(event) => setAge(event.target.value)} />
      <Button functionValue = {saveUsersHandler}>등록</Button>
      <div className='app-style'>
        {
          users.map(function (item) {
            return <User 
            key={item.id}
            user = {item}
            removeUsersHandler = {removeUsersHandler}
            ></User>
          })

        }
      </div>
    </div>

  )
}


export default App