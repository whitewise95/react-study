import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    number: 0
}



// 2개의 INPUT 
// (1) 이름 : 의미는 크게 없음
// (2) 함수 
export const _addNumber = createAsyncThunk(
    "ADD_NUMBER_WAIT",
    (payload, thunkAPI) => {
        //수행하고 싶은 동작 
        setTimeout(() => {
            thunkAPI.dispatch(plusN(payload));
        }, 3000)
    }
);

export const _miunsNumber = createAsyncThunk(
    "ADD_NUMBER_WAIT2",
    (payload, thunkAPI) => {
        //수행하고 싶은 동작 
        setTimeout(() => {
            thunkAPI.dispatch(minusN(payload));
        }, 3000)
    }
);

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        plusN: (state, action) => {
            state.number = state.number + action.payload;
        },
        minusN: (state, action) => {
            state.number = state.number - action.payload;
        }
    }
});

export default counterSlice.reducer;
export const { plusN, minusN } = counterSlice.actions;
