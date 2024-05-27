# 1. react-router-dom이란?
> 페이지 이동을 구현할 수 있게 해주는 패키지


# 2. 패키지 설치
```jsx
yarn add react-router-dom 
```


# 3. 사용하기
1. `src 폴더`에 `pages 라는 폴더 생성` 후 `Home.jsx`와 `Detail.jsx 파일 생성`하고 기본 로직 작성  
2. `src안`에 `shared 라는 폴더를 생성`해주고, 그 안에 `Router.js  파일을 생성`  
```jsx
import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는, 
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
```
3. ` <Routes>` 안에  페이지 인 `<Route>` 만들어주기 
```jsx
    <BrowserRouter>
      <Routes>
				{/* 
						Routes안에 이렇게 작성합니다. 
						Route에는 react-router-dom에서 지원하는 props들이 있습니다.

						path는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
						element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
				 */}
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
```

4. App.jsx에 Router.jsx import 해주기  
```jsx
import React from "react";
import Router from "./shared/Router";

function App() {
  return <Router />;
}

export default App;
```


# 3. react-router-dom hooks
### **useNavigate**
> navigate 를 생성하고, navigate(’보내고자 하는 url’) 을 통해 페이지를 이동
```
const navigate = useNavigate();
 navigate("/works");
```

### **useLocation**
>  현재 위치하고 있는 페이지의 여러가지 정보를 추가적으로 얻을 수 있습니다. 이 정보들을 이용해서 페이지 안에서 조건부 렌더링에 사용하는 등, 여러가지 용도로 활용할 수 있습니다.
```
// src/pages/works.js
import { useLocation } from "react-router-dom";

const Works = () => {
  const location = useLocation();
  console.log("location :>> ", location);
  return (
    <div>
      <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
    </div>
  );
};

export default Works;
```

### **Link**
> Link 는 html 태그중에 a 태그의 기능을 대체하는 API  
```
 <Link to="/contact">contact 페이지로 이동하기</Link>
```

