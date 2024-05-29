# 1. 리덕스 툴킷(redux toolKit)이란?
> 코드는 더 적게, 그리고 리덕스를 더 편하게 쓰기 위한 기능들을 흡수해서 만든 것이 리덕스툴킷


# 2. 툴킷 설치
```
yarn add react-redux @reduxjs/toolkit
```


# 3. 리덕스와 코드 비교  
### **🟢 첫번째 모듈과 슬라이스**    
> 일반 리덕스의 모듈
```js
// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};

export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};

// Initial State
const initialState = {
  number: 0,
};

// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: state.number + action.payload,
      };
    // [퀴즈 답]
    case MINUS_NUMBER:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

// export default reducer
export default counter;
```
> 리덕스 툴킷의 슬라이스
```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter", // 이 모듈의 이름
  initialState,   // 이 모듈의 초기상태 값 
  reducers: {  // 이 모듈의 Reducer 로직
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
```


### **🟢 두번째 storeConfig 비교**   
> 일반 리덕스

```js
import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";

const rootReducer = combineReducers({
  counter,
});
const store = createStore(rootReducer);
export default store;
```  

> 리덕스 툴킷
```js
// src/redux/slices/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import counter from "../slices/counterSlice";
import todos from "../slices/todosSlice";

/**
 * 모듈(Slice)이 여러개인 경우
 * 추가할때마다 reducer 안에 각 모듈의 slice.reducer를 추가해줘야 합니다.
 *
 * 아래 예시는 하나의 프로젝트 안에서 counter 기능과 todos 기능이 모두 있고,
 * 이것을 각각 모듈로 구현한 다음에 아래 코드로 2개의 모듈을 스토어에 연결해준 것 입니다.
 */
const store = configureStore({
  reducer: { counter: counter, todos: todos },
});

export default store;
```





### **🟢 비교 ** 
- Action Value와 Action Creator를 이제 직접 생성해주지 않고, Action Value, Action Creator, Reducer가 하나로 합쳐짐
- `src/redux/moduls` => `src/redux/slices` 로 경로 변경
- creater 대신에 counterSlice의 `reducers를 export`
- 기존의 combineReducers + createStore 조합이 configureStore로 대체




