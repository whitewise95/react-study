import React, { useState } from 'react'

function App() {
const [name, setName] = useState('');
const [password, setPassword] = useState('');

const changeNameHadler = (e) => {
  setName(e.target.value);
}

const changePasswordHadler = (e) => {
  setPassword(e.target.value);
}

  return (
    <div>
        {name} : <input type='text' value={name} onChange={(e) => changeNameHadler(e)}/>
        <br/>
        {password}  :<input type='text' value={password} onChange={(e) => changePasswordHadler(e)}/>
    </div>
  )
}

export default App