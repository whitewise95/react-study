import api from "./asiox/api"
import React, { useEffect, useState } from 'react'


function App() {
  const [todos, setTodos] = useState(null);
  const [inputValue, setTile] = useState({
    title: ""
  });
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");


  const fetchTodos = async () => {
    const { data } = await api.get(`/todos`);
    console.log(data);
    setTodos(data);
  }

  const onSubmitHandler = async () => {
    const { data } = await api.post(`/todos`, inputValue);
    setTodos([...todos, { id: data.id, title: data.title }])
  }

  const onDeleteClickHadler = async (targetId) => {
    api.delete(`/todos/${targetId}`);
    setTodos(todos.filter((item) => {
      return item.id !== targetId;
    }))
  }

  const onFetchClickHandler = async () => {
    debugger
    await api.patch(`/todos/${id}`, {
      title
    })

    fetchTodos();
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <div>
      {/* 수정 영역 */}
      <div>
        <input type='text' value={id} onChange={(e) => { setId(e.target.value) }} placeholder='수정할 아이디'></input>
        <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='수정할 내용'></input>
        <button onClick={onFetchClickHandler}>수정</button>
      </div>

      {/* INPUIT 영역 */}
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();

          // 버튼 클릭 시, input에 들어있는 값을 이용하여 DB에 저장(post 요청)
          onSubmitHandler();
        }}>
          <input
            type='text'
            value={inputValue.title}
            onChange={(event) => {
              setTile({
                title: event.target.value
              });
            }} />
          <button type='submit'>추가</button>
        </form>
      </div>

      {/* 데이터 영역 */}
      <div>
        {todos?.map((itme) => {
          return (

            <div key={itme.id}>
              <button onClick={() => onDeleteClickHadler(itme.id)}>삭제</button>
              <div>id : {itme.id}</div>
              <div>title : {itme.title}</div>
              <hr></hr>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App