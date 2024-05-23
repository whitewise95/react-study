# 1. useContext란?
props를 사용했을 때 `prop drilling`이 발생하는데 그것을 보완하기 위해서 등장한 것이 바로 react context API라는 것이며, useContext hook을 통해 쉽게 전역 데이터를 관리할 수 있다.  

```
📌 prop drilling의 문제점
1. 깊이가 너무 깊어지면 이 prop이 어떤 컴포넌트로부터 왔는지 파악이 어려워져요.
2. 어떤 컴포넌트에서 오류가 발생할 경우 추적이 힘들어지니 대처가 늦을 수 밖에 없죠.
```  



#  2. context API 필수 개념
- **`createContext`** : context를 생성합니다.
- **`useContext`** : context를 구독하고 해당 context의 현재 값을 읽습니다.
- **`Provider`** : context를 하위 컴포넌트에게 전달합니다.

# 3. 사용법

🟢 `Context.js` 파일 생성하기  
> src > context > Context.js 파일 생성


🟢 `Context.js` 파일에서 `import` 하기   
```jsx
import { createContext } from "react";

export const Context = createContext(null); // null은 초기값
```    

🟢 전역으로 내려줄 컴포넌트에서 `Context.js` import 하기
```jsx
import React from "react";
import Father from "./Father";
import { Context } from "../context/Context"; // ✅ import 하기 

function GrandFather() {
  const houseName = "스파르타";
  const pocketMoney = 10000;

  return <Father houseName={houseName} pocketMoney={pocketMoney} />;{/* ✅ 아직은 props로 내려주고 있음 */}
}

export default GrandFather;
```  


🟢 Provider에 값 셋팅하기 
> Context의 Provider에 houseName, pocketMoney를 셋팅 한다.
```jsx
import React from "react";
import Father from "./Father";
import { Context } from "../context/Context";

function GrandFather() {
  const houseName = "스파르타";
  const pocketMoney = 10000;

  return (
    <Context.Provider value={{ houseName, pocketMoney }}>   {/* ✅  Context의 Provider에 houseName, pocketMoney를 셋팅 한다.*/}
      <Father />
    </FamilyContext.Provider>
  );
}

export default GrandFather;
```  


🟢 `Context.js`를 import 하고 `useContext` 인자 값으로 Context를 주면 `houseName`, `pocketMoney`를 받을 수 있다.   

<img width="250" alt="스크린샷 2024-05-23 오전 11 47 44" src="https://github.com/whitewise95/react-study/assets/81284265/d9614656-eea1-4fd5-99a7-9f778adcc840">  

```jsx
import React, { useContext } from "react";
import { Context } from "../context/Context";  {/* ✅  Context.js import */}

function Child() {
  const stressedWord = {
    color: "red",
    fontWeight: "900",
  };

  const data = useContext(Context);   {/* ✅  useContext 사용  */}
  console.log("data", data);   {/* ✅  data의  houseName와 pocketMoney 키로 해당 값을 알 수 있다. */}

  return (
    <div>
      {/* ✅  데이터 사용  */}
      <span style={stressedWord}>{data.houseName}</span> 
      <span style={stressedWord}>{data.pocketMoney}</span>
    </div>
  );
}

export default Child;
```


# 4. 주의할 점
useContext를 사용할 때, Provider에서 제공한 value가 달라진다면 useContext를 사용하고 있는 모든 컴포넌트가 리렌더링 됩니다. 그래서 메모이제이션이 필요 
