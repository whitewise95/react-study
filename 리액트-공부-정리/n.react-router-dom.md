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


# 4. Dynamic Route
> detail/:id 라고 path가 들어갑니다. :id 라는 것이 바로 동적인 값을 받겠다라는 의미
```jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;  
```

### **useParams**  
> 동적라우팅으로 받은 파라미터를 받을 수 있다.
```jsx
  const param = useParams();
  console.log(param.id)
```


# 5. 중첩된 라우트
- 중첩 라우팅은 특정 라우트 내에서 추가적인 라우트를 정의하는 방식을 말합니다. 웹 애플리케이션에서 여러 계층의 UI를 구성할 때 유용하게 사용돼요. 를 들어, 사용자 대시보드에 여러 섹션이 있는 경우 각 섹션 별로 다른 경로를 설정할 수 있습니다.
- /dashboard 경로는 DashboardLayout 컴포넌트를 사용합니다. 이 레이아웃 내에서 /dashboard/settings, /dashboard/reports 등의 경로로 추가적인 페이지들을 중첩하여 설정할 수 있습니다. 이렇게 함으로써, 대시보드 내 각 섹션의 독립적인 라우트 관리가 가능하며, UX(사용자 경험)을 개선할 수 있습니다.
  
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import Profile from './Profile';
import Settings from './Settings';
import Reports from './Reports';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

