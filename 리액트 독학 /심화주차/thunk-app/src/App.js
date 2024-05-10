import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __getTodos } from './redux/modules/todosSlice';

function App() {
  const dispatch = useDispatch();

  const { isLoading, error, todos } = useSelector(state => {
    return state.todosSlice;
  })

  useEffect(() => {
    dispatch(__getTodos());
  }, [])

  if (isLoading) {
    return <div>로딩...중</div>
  }

  if (error) {
    return <div>에러</div>
  }

  return (
    <div>{todos?.map((item) => {
      return (
        <div key={item.id}>
          <div>{item.title}</div>
        </div>
      )
    })}</div>
  )
}

export default App