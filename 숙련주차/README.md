# 01. Styled Components - 소개, 사용  

## 1. CSS-in-Js란?  
> 자바스크립트 코드로 CSS 코드를 작성하여 컴포넌트를 꾸미는 방식  

#### 사용하면 좋은점  
컴포넌트를 만들고 컴포넌트를 꾸미기 위해 css 파일을 만들어서 import 하고 HTML tag 마다 classname를 넣고 CSS 코드를 작성하는 것을 반복하는 것을 줄일 수 있다.  

## 2. styled-components  
- styled-components는 리액트에서 CSS-in-JS 방식으로 컴포넌트를 꾸밀수 있게 도와주는 패키지  

```  
패키지란, React에는 없는 기능이지만 우리가 추가로 가져와서 사용할 수 있는 써드파티 프로그램
패키지들은 누군가에 의해 만들어진 것으로 npm에 모여있다.
사용하고자 하는 패키지를 npm install 또는 yarn add 를 통해서 설치
```  


#### styled-components 준비
-  styled-components 플러그인 설치   
![alt text](image.png)

- yarn add styled-components  


#### styled-components 사용하기  
```js
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

![alt text](image-1.png)

> 핵심이 되는 코드는 const StBox = styled.div``; 이 부분 이 방식대로 styled-components를 만드는 것  


#### 조건부 스타일링 구현   
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
![alt text](image-2.png)  




<hr>

<br>
<br>


# 02. Styled Components - GlobalStyles, Sass 소개, css reset
> tyled components는 컴포넌트 내에서만 활용가능하며 공통적으로 들어가야 할 스타일을 적용해야 할 경우 전역적으로(globally)’ 스타일을 지정한다. 라고 표현 그럴 때 적용하는 방법이 바로 전역 스타일링

## 1 GlobalStyles 적용  
> GlobalStyle.jsx  
```js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
```  

> App.jsx
```js
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

## 2 css reset  
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

```js
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
![alt text](image-3.png)



