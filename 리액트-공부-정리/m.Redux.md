# 1. Props의 관리하면 불편한점
- 컴포넌트에서 컴포넌트로 State를 보내기위해서는 반드시 부-모 관계가 되어야 한다.
- props driling 발생
- 자식 컴포넌트에서 부모 컴포넌트로 값을 보낼 수 없다.



# 2. 리덕스(Redux) 란?
props로 state를 관리할 때 불편했 던 점을 해소하기 위해 나온 “중앙 state 관리소” 패키지(라이브러리)  


### **💡 Context API가 있음에도 Redux로 Global state를 관리하면 좋은 이유?**
✅성능 최적화  
> `Context API`는 Provider 하위의 모든 컴포넌트를 `리렌더링`하게 할 수 있습니다. 상태가 변경될 때마다 관련된 모든 컴포넌트가 불필요하게 업데이트 되는 것을 막기 위해 복잡한 최적화가 필요합니다. 반면, `Redux`는 상태 변경 시 관련된 컴포넌트만 선택적으로 업데이트할 수 있어 성능 관리가 용이합니다.  

✅ 상태 로직의 중앙화와 일관성  

> Redux는 애플리케이션의 상태를 하나의 저장소(store)에 저장합니다. 이로 인해 상태 로직이 중앙에서 관리되어 더 일관성 있고 예측 가능한 상태 변경이 가능해집니다. 또한, 모든 상태 변경 로직이 리듀서(reducers)에 의해 처리되기 때문에 디버깅과 테스팅이 용이합니다.  

✅ 강력한 미들웨어와 개발 도구  

> Redux는 다양한 미들웨어를 지원하여 비동기 작업, 로깅, 상태 변경에 대한 추가 처리 등 복잡한 기능을 구현할 수 있습니다. 또한 Redux DevTools와 같은 강력한 개발 도구를 통해 상태 변화를 시각적으로 모니터링하고 이전 상태로 롤백하는 등의 기능을 제공합니다.

# 3. 리덕스 설정

### **🟢 리덕스 설치**
```bash
yarn add redux react-redux

# 아래와 같은 의미
yarn add redux
yarn add react-redux
```

### **🟢 폴더 구조 생성하기**
![image](https://github.com/whitewise95/react-study/assets/81284265/ac9b04e7-204e-4848-a44a-719ec33b2d78)
1. `src` 폴더 안에 `redux` 폴더를 생성
2. `redux` 폴더 안에 `config`, `modules` 폴더를 생성
3. `config` 폴더 안에 `configStore.js`파일을 생성합니다.

```
⭐ 폴더와 파일의 역할

✅ redux : 리덕스와 관련된 코드를 모두 모아 놓을 폴더 입니다.

✅ config : 리덕스 설정과 관련된 파일들을 놓을 폴더 입니다.

✅ configStore : “중앙 state 관리소" 인 Store를 만드는 설정 코드들이 있는 파일 입니다.

✅ modules : 우리가 만들 State들의 그룹이라고 생각하면 됩니다. 예를 들어 `투두리스트`를 만든다고 한다면,
             투두리스트에 필요한 `state`들이 모두 모여있을 `todos.js`를 생성하게 되텐데요,
             `todos.js` 파일이 곧 하나의 모듈이 됩니다.
```


### **🟢 설정코드 작성**

> **`src/configStore.js`**
```jsx
import { createStore } from "redux";
import { combineReducers } from "redux";

/*
1. createStore()
리덕스의 가장 핵심이 되는 스토어를 만드는 메소드(함수) 입니다. 
리덕스는 단일 스토어로 모든 상태 트리를 관리한다고 설명해 드렸죠? 
리덕스를 사용할 시 creatorStore를 호출할 일은 한 번밖에 없을 거예요.
*/

/*
2. combineReducers()
리덕스는 action —> dispatch —> reducer 순으로 동작한다고 말씀드렸죠? 
이때 애플리케이션이 복잡해지게 되면 reducer 부분을 여러 개로 나눠야 하는 경우가 발생합니다. 
combineReducers은 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만들어줍니다.
*/

const rootReducer = combineReducers({}); 
const store = createStore(rootReducer); 

export default store; 
```


> **`index.js `**
```jsx
// 원래부터 있던 코드
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 추가할 코드
import store from "./redux/config/configStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

	//App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어줍니다.
  <Provider store={store}> 
    <App />
  </Provider>
);

reportWebVitals();
```

###  **🟢 모듈 만들기**
> **`src/redux/modules/counter.js`**
```jsx
// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
```

### **🟢 카운터 모듈을 스토어에 연결**
```jsx
// 원래 있던 코드
import { createStore } from "redux";
import { combineReducers } from "redux";

// 새롭게 추가한 부분
import counter from "../modules/counter";

const rootReducer = combineReducers({
  counter: counter, // <-- 새롭게 추가한 부분
});
const store = createStore(rootReducer);

export default store;
```

 > **`useSelector`**

```jsx
// 우리는 컴포넌트에서 스토어를 조회할 때 `react-redux`에서 제공하는 `useSelector` 라는 훅을 사용
const number = useSelector(state => state.counter.number); 
```




# 4. 리덕스 사용
### **🟢 리듀서에게 보낼 “명령(Action)” 만들기**
- Action
> 리듀서에게 number에 +1을 하라고 ‘명령'을 만들어야 합니다. 리덕스에서는 그 명령을 Action 이라고 합니다.
> 액션 객체를 리듀서에게 보냈을 때 리듀서는 객체 안에서 type이라는 key를 보기 때문에 반드시 type이라는 key를 가져야 합니다. 

 **`src/redux/modules/counter.js`** 파일에 Action creater를 만든다. 
```
// src/redux/modules/counter.js

const PLUS_ONE = "PLUS_ONE"; // value는 상수로 생성

// 액션객체를 반환하는 함수 생성
// export 가 붙는 이유는 plusOne()는 밖으로 나가서 사용될 예정이기 때문입니다.
export const plusOne = () => { 
  return {
    type: PLUS_ONE, // type에는 위에서 만든 상수로 사용 (vscode에서 자동완성 지원)
  };
};
```

 **`src/redux/modules/counter.js`** 파일에서 Action Creater를 추가하면 아래와 같이 코드가 존재할 텐데 리듀서(switch을 돌려서 type별로 기능을 정의하는 곳)에 PLUS_ONE 타입을 사용하는 case를 만들어준다.
```jsx
// src/redux/modules/counter.js

const PLUS_ONE = "PLUS_ONE"; // value는 상수로 생성

// 액션객체를 반환하는 함수 생성
// export 가 붙는 이유는 plusOne()는 밖으로 나가서 사용될 예정이기 때문입니다.
export const plusOne = () => { 
  return {
    type: PLUS_ONE, // type에는 위에서 만든 상수로 사용 (vscode에서 자동완성 지원)
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
   case PLUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다. 
        return {
          number: state.number + 1,
        };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
```



### **🟢 액션(Action) 객체 보내는 useDispatch 사용하기**
1. 액션객체를 보내기 리듀서로 보내기위해서는 useDispatch라는 훅을 사용해야 한다.
2. `useDispatch()` 하면 dispatch 객체를 생성할 수 있다.
3. `onClick` 시 dispatch에 PLUS_ONE를 리턴해주는 plusOne을 인자로 주면된다.
```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux"; // import 해주세요.
import { plusOne } from "./redux/modules/counter";

const App = () => {
  const globalNumber = useSelector((state) => state.counter.number);
  const dispatch = useDispatch(); // dispatch 생성
  return (
    <div>
      {globalNumber}
      <button
				// 이벤트 핸들러 추가
        onClick={() => {
					// 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
          dispatch(plusOne()); 
        }}
      >
				+ 1
      </button>
    </div>
  );
};

export default App;
```

### **🟢 payload 사용하기**
- 리듀서에 `Action`을 전달할 인자도 같이 전달할 수 있는데 그것을 `payload`라고 한다.  
- **`src/redux/modules/counter.js`** 파일 Action Creater에 인자로 받을 payload 추가하고 리듀서에 `action.payload` 를 + 해주는 로직으로 수정한다.
```jsx
const PLUS_ONE = "PLUS_ONE"; // value는 상수로 생성

// Action Creater
// export 가 붙는 이유는 plusOne()는 밖으로 나가서 사용될 예정이기 때문입니다.
export const plusOne = (payload) => { //파라미터 추가
  return {
    payload: payload, //추가
    type: PLUS_ONE, // type에는 위에서 만든 상수로 사용 (vscode에서 자동완성 지원)
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
				// state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
        number: state.number + action.payload,
      };
    default:
      return state;
  }
};

...생략
```

- `App.jsx` 에서  `dispatch(plusOne())` 기존 코드에서 => `dispatch(plusOne(5))` 인자로 5를 주면 payload가 5로 전달된다.

```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux"; // import 해주세요.
import { plusOne } from "./redux/modules/counter";

const App = () => {
  const globalNumber = useSelector((state) => state.counter.number);
  const dispatch = useDispatch(); // dispatch 생성
  return (
    <div>
      {globalNumber}
      <button
				// 이벤트 핸들러 추가
        onClick={() => {
					// 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
          dispatch(plusOne(5)); 
        }}
      >
				+ 1
      </button>
    </div>
  );
};

export default App;
```

















