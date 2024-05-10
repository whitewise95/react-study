import counter from "../modules/counter";
import { configureStore } from "@reduxjs/toolkit";

//AS-IS 일반 리듀서
// const rootReducer = combineReducers({
//     counter
// })

// const store = createStore(rootReducer);


//TO-DO Redux Tookit 
const store = configureStore({
    reducer: {
        counter
    }
});

export default store;