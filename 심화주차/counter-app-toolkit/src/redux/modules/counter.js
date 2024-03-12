import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    number: 0
}

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
