import React, { useState } from 'react'

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  return (
      <div>
        아이디 : <input
         value={username}
         onChange={function(event){
          setUsername(event.target.value);
            }}></input>
        <br/>
        패스워드 : <input 
        type='password' 
        value={password} 
        onChange={function(event){
          setPassword(  event.target.value);
        }}></input>
        <br/>
        <button onClick={function(){
          alert(username + ", " + password);
          setUsername("");
          setPassword(  "");
        }}>로그인</button>
      </div>
  )
}

export default App