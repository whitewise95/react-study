import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    todos: [],
    isLoading: false,
    isError: false,
    error: null,
}

export const __getTodos = createAsyncThunk(
    "getTodos",
    async (payload, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:4000/todos")
            //toolkit 에서 제공하는 API -> 네트워크 요청이 성공한 경우 dispatch해주는 기능
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            console.log(error);

            //toolkit 에서 제공하는 API 
            thunkAPI.rejectWithValue(error);
        }
    }
)

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(__getTodos.pending,  (state, action) => {
            state.isLoading = true;
            state.isError = false;
        })
        builder.addCase(__getTodos.fulfilled,  (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.todos = action.payload
        })
        builder.addCase(__getTodos.rejected,  (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
    },
})

export const {} = todosSlice.actions;
export default todosSlice.reducer;