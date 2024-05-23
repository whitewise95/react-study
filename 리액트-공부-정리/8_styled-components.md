# 1. styled-components란
`styled-components`는 우리가 리액트에서 `CSS-in-JS 방식`으로 `컴포넌트를 꾸밀수 있게 도와주는 패키지` 입니다. 

```
✅ css-in-js란?
자바스크립트 코드로 CSS 코드를 작성하여 컴포넌트를 꾸미는 방식
```

# 2. 설치

### **설치**
```bash
yarn add styled-components
```

### **사용법**    
 🟢 styled-components import  
```jsx
import styled from "styled-components";
```
  
 🟢 예시

`styled.{태그명}` 이렇게 선언을 하고 백틱 을 이용해 js로 css를 작성할 수 있다.

div ➡️ `styled.div`   
span ➡️ `styled.span`  
button ➡️ `styled.button`  

```jsx
styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 20px;
`;
```
  
🟢 전체코드

```
// src/App.js

import React from "react";
// styled-components에서 styled 라는 키워드를 import 합니다.
import styled from "styled-components";

// styled키워드를 사용해서 styled-components 방식대로 컴포넌트를 만듭니다. 
const StBox = styled.div`
	// 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 20px;
`;

const App = () => {
	// 그리고 우리가 만든 styled-components를 JSX에서 html 태그를 사용하듯이 사용합니다.
  return <StBox>박스</StBox>;
};

export default App;
```


# 3. GlobalStyles(전역 스타일링)
공통적으로 들어가야 할 스타일을 적용해야 할 경우 전역적으로(globally)’ 스타일을 지정할 수 있다. 


> 전역으로 사용할 컴포넌트를 만든다.
```jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }
`;

export default GlobalStyle; 
```  


> 전역으로 적용할 컴포넌트에서 import해주고 사용한다.
```jsx
import GlobalStyle from "./GlobalStyle";
import BlogPost from "./BlogPost";

function App() {
	const title = '전역 스타일링 제목입니다.';
	const contents = '전역 스타일링 내용입니다.';
  return (
    <>
      <GlobalStyle />
      <BlogPost title={title} contents={contents} />
    </>
  );
}

export default App;
```


# 4. styled-components를 사용하는 이유?
styled-components를 사용한다는 이유는 곧 CSS-in-JS를 사용한다로 이어질 수 있는데 CSS-in-JS 방식의 강점이 바로 스타일 코드를 JS코드 작성하듯이 스타일 코드를 작성할 수 있다는 점 입니다.

```js
// src/App.js

import React from "react";
import styled from "styled-components";

// 1. styled-components를 만들었습니다.
const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor}; // 4.부모 컴포넌트에서 보낸 props를 받아 사용합니다. 
  margin: 20px;
`;

const App = () => {
  return (
    <div>
			{/* 2. 그리고 위에서 만든 styled-components를 사용했습니다. */}
			{/* 3. 그리고 props를 통해 borderColor라는 값을 전달했습니다. */}
      <StBox borderColor="red">빨간 박스</StBox>
      <StBox borderColor="green">초록 박스</StBox>
      <StBox borderColor="blue">파랑 박스</StBox>
    </div>
  );
};

export default App;
```


# 5. css reset
브라우저는 기본적으로 default style을 제공해요. 예를 들면 margin이나 글자의 크기 같은 경우

### **css 초기화**
  
🟢 css 파일을 만들어 아래 코드를 붙혀넣는다.
```css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

  
🟢 html에 ` <link rel="stylesheet" href="./reset.css" />` 불러와주면 끝
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./reset.css" />
  </head>
  <body>
    <span>Default Style을 테스트 해 봅니다.</span>
    <h1>이건 h1 태그에요</h1>
    <p>이건 p 태그에요</p>
  </body>
</html>
```
