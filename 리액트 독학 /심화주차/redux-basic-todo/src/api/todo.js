// axios 요청이 들어가는 모든 모듈

import axios from "axios";

const getTodos = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`)
    return response.data;
}

const getTodo = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`)
    debugger
    return response.data;
}


const addTodo = async (newData) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newData)
}

const doneTodo = async (data) => {
    await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${data.id}`,
        {
            isDone: !data.isDone
        })
}

const deleteTodo = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`)
}

export { getTodos, addTodo, doneTodo, deleteTodo , getTodo};