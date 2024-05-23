# 1. useRef란?
- useState와 더불어 특정 값을 저장하기 위해 사용하는 대표적인 hook
- rendering과 상관없이 값을 기억하기 위해 사용되는 것이 본질적 특징
```
⭐  useState는 값이 변경될 때 마다 리렌더링이 발생하지만 useRef는 rendering과 상관이 없기 때문에 리렌더링이 발생하지 않는다.
```


# 2. 사용방법

🟢 기본사용법
> `useRef()` 소괄호 안에 값을 넣어 변수에 할당할 수 있다.
```jsx
  const ref = useRef("초기값");
  console.log("ref", ref);
```

🟢 값을 변경하거나 사용하고 싶을 때 
> ref를 콘솔로 찍어보면 current에 담겨 있기 때문에 `ref.current` 로 그 값이 도달할 수 있다.  
> 이렇게 설정된 ref 값은 컴포넌트가 계속해서 렌더링 되어도 unmount 전까지 값을 유지
<img width="251" alt="image" src="https://github.com/whitewise95/react-study/assets/81284265/4253b89b-1baf-428d-8168-aa0f1ba63c0d">

```js
  const ref = useRef("초기값");
  console.log("ref", ref);

  ref.current = "바꾼 값";
  console.log("ref 1", ref);
```


# 3. useRef 사용하는 이유
`<input />` 태그에는 `ref`라는 속성이 있는데 useRef를 통해 DOM요소에 접근할 수 있다.    
idRef 를 `<input />` 태그의 `ref`라는 속성에 셋팅하고 `idRef.current.focus();` 를 사용하면 렌더링시 `focus`가 들어간다.  
```jsx
**import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const idRef = useRef("");

  // 렌더링이 될 때
  useEffect(() => {
    idRef.current.focus();
  }, []);

  return (
    <>
      <div>
        아이디 : <input type="text" ref={idRef} />
      </div>
      <div>
        비밀번호 : <input type="password" />
      </div>
    </>
  );
}

export default App;
```



