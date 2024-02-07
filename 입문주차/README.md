# 1-4 개발환경 셋팅

### 1. 크롬 설치
- [크롬 다운로드](https://www.google.com/intl/ko_kr/chrome/)

### 2. 비주얼 스튜디오 설치
- [비주얼 스튜디오 다운로드](https://visualstudio.microsoft.com/ko/downloads/)

### 3. git 설치
- [git 다운로드](https://git-scm.com/downloads)

### 4. node.js 설치
- [node.js 다운로드](https://nodejs.org/ko/)
  
 > node 설치 확인하기
  ```
  node -v
  ```
![image](https://github.com/whitewise95/-/assets/81284265/a9040a62-42cb-4b91-a7ab-fbf6865ef667)


### 5. yarn 설치
- 터미널에서 yarn 설치  
  ```bash
  npm install -g yarn
  ```
  
- yarn 설치 확인  
  ```
  yarn -v 
  ```

### 6. npm과 yarn에 대해  
 **공통적 특징** 
 1. 둘다 자바스크립트 **런타임 환경** 인 노트(Node.js)의 패키지 관리자  
 2. 애플의 앱스토어, 구글의 플레이스토어처럼, 전 세계의 많은 개발자들이 본인들이 만든 유용하고 다양한 패키지들 또는 프로그램을 ‘온라인 데이터베이스’에 올려놓는다. 그걸 쉽게 설치하고 삭제할 수 있도록 도와주는 관리자
  
    
#### **차별적 특징**
- NPM
    1. node.js를 설치할 때 자동으로 생성
    2. Node Package Manager의 약자
    3. NPM platform 자체
- YARN
    1. 2016년에 페이스북에서 개발한 패키지 관리자
    2. npm과의 호환성이 좋고, 속도나 안정성 측면에서 npm보다 월등히 좋다.
- 요약
    1. 속도 : Yarn wins
    2. 보안 : Yarn wins(하지만 최근 npm의 보안 업데이트도 크게 향상)
 

- 명령어  
![image](https://github.com/whitewise95/-/assets/81284265/6f331554-e4bd-46b8-81fb-cccca8f2605f)





<hr>

<br>
<br>





# 1-5 CRA(Create React App)
```
[학습 목표]

1. CRA의 개념에 대해 설명할 수 있습니다.
2. CRA 명령어로 프로젝트를 생성하고 열 수 있습니다.
3. 왜 CRA로 생성한 웹 애플리케이션이 열리게 되는지 대략적인 흐름을 설명할 수 있습니다.
4. 상대경로와 절대경로의 개념에 대해 숙지하고, 리액트 프로젝트 내에서 절대경로를 사용하는 방법을 알 수 있습니다.
```


## 1 CRA란 무엇일까요?
한 줄의 명령어 입력으로 React 프로젝트 개발에 필수요소를 자동으로 구성하는 방법, React 프로젝트를 구성하기 위해 필요한 것들은 상당히 많은데 이러한 것들을 신경쓰지 않아도 알아서 만들어준다.


## 2 CRA로 프로젝트 생성하기
```
ls #현재 내가 위치하고 있는 곳이 어디인지 확인

cd 폴더이름 #리액트 프로젝트를 생성하고 싶은 폴더로 접근

yarn create react-app week-1 #프로젝트 생성!
```
![alt text](image.png)


## 3 CRA로 생성한 프로젝트 실행하기
```
cd week-1 # week-1 폴더로 이동
```

```
yarn start # 프로젝트 시작 

or 

npm start # 프로젝트 시작 
```

![alt text](image-1.png)




## 4 프로젝트 구조를 살짝 뜯어보기

대략적인 흐름 
public > index.html
→ src > index.js
→ src > App.js

결국, 중요한 것은 [우리의 플레이그라운드는 ‘App.js’라는 것]



## 5 상대경로 import → 절대경로 지정하기
jsconfig.json 파일을 생성(반드시 root 경로에)
![](image-2.png)

```json
{
	"compilerOptions": {
		"baseUrl": "src"
	},
	"include": ["src"]
}
```  




<hr>

<br>
<br>





# 1-6 React Component

## 1 React Component란 
컴포넌트 개념 이해하기     

```
컴포넌트를 통해 UI를 재사용이 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 볼 수 있다.
개념적으로 컴포넌트는 JavaScript 함수와 유사하고
“props”라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환
```  


## 2 리액트 컴포넌트를 표현하는 두 가지 방법

- 두 가지 모두 기능상으로는 동일하지만, 공식 홈페이지에서는 함수형 컴포넌트를 사용하기를 권장   

> 함수형 컴포넌트  
```TypeScript
// props라는 입력을 받음
// 화면에 어떻게 표현되는지를 기술하는 React 엘리먼츠를 반환(return)

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 훨씬 쉬운 표현을 해보면 아래와 같죠.
function App () {
	return <div>hello</div>
}
```  

> 클래스형 컴포넌트  
```TypeScript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```  


<hr>

<br>
<br>




# 1-7 부모-자식 컴포넌트

## 1 컴포넌트 안에 컴포넌트 넣기  
- 컴포넌트는 다른 컴포넌트를 품을 수 있다. 이때 다른 컴포넌트를 품는 컴포넌트를 부모 컴포넌트라고 부르고, 다른 컴포넌트 안에서 품어지는 컴포넌트를 자식 컴포넌트라고 부른다.


```TypeScript
// src/App.js
import React from "react";

function Child() {
  return <div>나는 자식입니다.</div>;
}

function App() {
  return <Child />;
}

export default App;
```




<hr>

<br>
<br>




# 1-8  JSX(JavaScript + XML)

## 1 JSX란?

```TypeScript
// JavaScript를 확장한 문법
// JavaScript의 모든 기능이 포함되어 있으며, React Element를 생성하기 위한 문법
const element = <h1>Hello, world!</h1>;
```

## 프로젝트 내에 있는 App.js를 통해 살펴보기   
> 리액트에서는 index.html 이라는 딱 하나의 html 파일만 존재하기에 **JSX 문법을 사용해서 React 요소를 만들고 DOM에 렌더링 시켜서** 그린다.

```TypeScript
// import [패키지명] from [경로] 이 형식으로 불러와요.
import React from 'react'; 
// js 파일 뿐 아니라 이미지도 가능가능!
import logo from './logo.svg';
// css? 가능!
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```


> 자바스크립트 안에서 html 태그같은 마크업을 넣어 뷰(UI) 작업을 편하게 사용가능
```TypeScript
const start_half = <div>
    <h1>안녕하세요!</h1>
    <p>시작이 반이다!</p>
  </div>;
```  

- 지금은 리액트 돔을 구성하는 건 리액트 요소! 돔을 구성하는 건 돔 요소!   



```typeScript
import React from 'react'

export default function App() {
 
 const number = 1;

const pTagStyle = {
  color : 'red',
}

  return (
    <div className='test-class'>
       <p>안녕하세요 리액트입니다.</p>
       {/* 주석을 사용하는 방법입니다. */}
       {/* 삼항연산자를 사용해 볼게요! */}
       <p style={pTagStyle}>{
       number > 10 
       ? number + '은 10 보다 크다'  
       : number + '은 10 보다 작다'}
       </p>
    </div>
  )
}
```

### 리액트 스니펫   
- 마켓에서 react snippet로 설치   
![alt text](image-3.png)  


- 빈 js파일에서 rfc, rfce 로 간단하게 아래처럼 만들 수 있음  
![alt text](image-4.png)  


<hr>

<br>
<br>


# 1-9 Props의 개요

## 1 props란?

#### **컴포넌트 끼리의 정보교환 방식!**  
부모 컴포넌트가 자식 컴포넌트에게 물려준 데이터에요! 다시 말해, **컴포넌트 간의 정보 교류 방법**입니다.  
> 1. props는 반드시 위에서 아래 방향으로 흐른다. 즉, [부모] → [자식] 방향으로만 흐른다(단방향).  
> 2. props는 반드시 읽기 전용으로 취급하며, 변경하지 않는다.    


```typeScript
import React from "react";

// div안에서 { } 를 쓰고 props.motherName을 넣어보세요.
function Child(props) {
  return <div>{props.motherName}</div>;
}

function Mother() {
  const name = "홍부인";
  return <Child motherName={name} />;
}

function GrandFather() {
  return <Mother />;
}

function App() {
  return <GrandFather />;
}

export default App;
```    




```typeScript
import React from 'react'

// props를 통해 부모 -> 자식 데이터가 전달
function Son(props) {
  return <div>{props.GrandFather}의 딸 {props.motherName}의 아들 입니다.</div>
}

//  부모 -> 자식 에게 정보를 전달했다!
function Mather(props) {
  const name = "흥부인";
  return <Son motherName = {name} GrandFather = {props.GrandFather}/>
}

function GrandFather(){
  const name = "흥할아버지";
    return <Mather GrandFather = {name} />
}

function App() {
  return (
    <div><GrandFather/></div>
  )
}

export default App
```  


## 2 prop drilling  
```
[부모] → [자식] → [그 자식] → [그 자식의 자식] 이 데이터를 받기 위해선 무려 3번이나 데이터를 내려줘야 한다.
 이걸 바로 prop drilling, props가 아래로 뚫고 내려간다. 라고 한다.
```  
  
#### 예시  
```typeScript
export default function App() {
  return (
    <div className="App">
      <FirstComponent content="Who needs me?" />
    </div>
  );
}

function FirstComponent({ content }) {
  return (
    <div>
      <h3>I am the first component</h3>;
      <SecondComponent content={content} />|
    </div>
  );
}

function SecondComponent({ content }) {
  return (
    <div>
      <h3>I am the second component</h3>;
      <ThirdComponent content={content} />
    </div>
  );
}

function ThirdComponent({ content }) {
  return (
    <div>
      <h3>I am the third component</h3>;
      <ComponentNeedingProps content={content} />
    </div>
  );
}

function ComponentNeedingProps({ content }) {
  return <h3>{content}</h3>;
}
```  

<hr>

<br>
<br>


# 1-10 Props children  
## 1 children이란?  
- 아래 예제 코드를 보면 `<User>안녕하세요</User>` 이렇게 사용하고 있는데 기존에 `<User hello='안녕하세요'>` 이렇게 props를 보내던 방식과는 조금 다릅니다. 이것이 children props를 보내는 방식입니다.  그렇다면 자식 컴포넌트에서는 어떻게 정보를 받을까요?  정보를 받는 방식은 기존과 동일합니다. 대신 그 이름이 children 으로 정해져 있습니다.  

```typescript
import React from "react";

function User(props) {
  return <div>{props.children}</div>;
}

function App() {
  return <User>안녕하세요</User>;
}
export
```  


## 2 children의 용도
> Layout 컴포넌트를 만들 때 자주 사용
- Layout 컴포넌트 안에는 header 라는 컴포넌트가 있고, header 아래에 {props.children} 를 통해서  props를 받아 렌더링 하고 있다. 

- Layout 
```typescript
import React from 'react'

function Layout(props) {
  return (
    <>
    <header style={{
        margin : "10px",
        border : "1px solid red"
    }}>
        항상 출력되는 머릿글입니다.
    </header>
    {props.children}
    </>
  )
}

export default Layout
```

- Layout 컴포넌트가 쓰여지는 모든 곳에서 <Layout>…</Layout> 안에 있는 정보를 받아서 가져올 수 있는 것
```typescript
import React from "react";
import Layout from "./components/Layout";

function App() {
  return (

    <Layout> 
      <div>여긴 App의 컨텐츠가 들어갑니다.</div>
    </Layout>
  );
}
export default App;
```  


- Layout 컴포넌트를 About 컴포넌트에 또 사용한다. 

```typescript
// src/About.js

import React from "react";
import Layout from "./components/Layout";

function About() {
  return (
    <Layout> 
      <div>여긴 About의 컨텐츠가 들어갑니다.</div>
    </Layout>
  );
}
export default About;
```


<hr>

<br>
<br>


