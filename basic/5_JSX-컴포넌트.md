# 1. Vite 프로젝트 살펴보기
## **코드 살펴보기**  
- VS Code 로 생성한 프로젝트을 열어보면 아래와 같은 디렉토리와 파일구조를 이루고 있다.  
![스크린샷 2024-05-21 오후 9 22 01](https://github.com/whitewise95/react-study/assets/81284265/0f4ce5d2-c149-4425-b165-53539fa12e31)  

그 중에 App.jsx 를 확인해보면 아래와 같이 샘플로 코드가 작성되어 있다 

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

```  


필요 없는 코드를 삭제하고 구조는 아래와 같다.  
![image](https://github.com/whitewise95/react-study/assets/81284265/f0d2311f-bf4d-4ab9-be3b-c443bf7c4213)




# 2. 컴포넌트란?
공식문서에서는
> 컴포넌트를 통해 UI를 재사용이 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 볼 수 있다. 개념적으로 컴포넌트는 JavaScript 함수와 유사합니다. “props”라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환합니다.

라고 합니다.



# 3. 리액트 컴포넌트를 표현하는 두 가지 방법
### **함수형 컴포넌트**  
```jsx
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

### **클래스형 컴포넌트**
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### **무엇을 사용해야 하지?**
두 가지 모두 기능상으로는 동일하지만, 공식 홈페이지에서는 함수형 컴포넌트를 사용하기를 권장하고 있습니다.



# 4. 컴포넌트 사용해보기
App.jsx 에서  함수형 컴포넌트인 `Component1`와 `Component2` 를 만들고 사용할 땐 `<Component1/>` `<Component2/>` 로 HTML 처럼 사용하면 컴포넌트를 사용할 수 있다.


```jsx
import "./App.css";

function App() {
    return (
        <div>
            <h1>App 영역</h1>
            <Component1></Component1>  
        </div>
    );
}

/**
 *  App의 자식 컴포넌트 => 컴포넌트1
 * */
function Component1() {
    return (
        <div>
            <h2>omponent1 영역</h2>
            <Component2></Component2> 
        </div>
    );
}

/**
 *  컴포넌트1의 자식 컴포넌트 => 컴포넌트2
 * */
function Component2() {
    return (
        <div>
            <h3>omponent2 영역</h3>
        </div>
    );
}

export default App;

```
 
위 코드를 실행해보면 아래와 같이 브라우저에서 확인이 가능하다.  

<img width="460" alt="image" src="https://github.com/whitewise95/react-study/assets/81284265/6230cb33-1696-4eb1-b87b-73a926d6fd7c">


# 4. JSX란?
- 브라우저에서 실행하기 전에 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다.
- JSX란 Javascript + XML 의 약자로써 자바스크립트와 XML이 합쳐진 문법이다.  

> ❓ XML이란?  
> XML(eXtensible Markup Language) 은 HTML과 같은 마크업 언어이지만, HTML은 데이터를 표현하는 마크업 언어라면, XML은 데이터를 기술하는 언어이다.
> 예를 들어 HTML에서는 h1, p 같은 이미 만들어진 태그를 사용해야 하지만, XML은 정의된 부분을 제외하고는 사용자가 태그를 임의로 만들 수 있다.
> 엄밀히 말하자면 XML은 마크업 언어라기 보다 마크업 언어를 정의하기 위한 언어라고 할 수있다.


### **특징**  
<details>
<summary>💻 반드시 부모 요소 하나가 감싸는 형태여야 한다.  </summary>
 
> Virtual DOM에서 컴포넌트 변화를 감지할 때 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문이다  

```jsx

- 에러 코드
function App() {
	return (
		<div>Hello</div>
		<div>GodDaeHee!</div>
	);
}
```

- 정상코드
```jsx
// div를 사용 하였기 때문에 스타일 적용시 작성한 코드를 div로 한번 더 감쌌다는 부분을 고려해야 한다.  
function App() {
	return (
		<div>
			<div>Hello</div>
			<div>GodDaeHee!</div>
		</div>
	);
}
```
</div>
</details>

<details>
<summary>💻 자바스크립트 표현식 </summary>
 
```js
function App() {
	const name = 'GodDaeHee';
	return (
		<div>
			<div>Hello</div>
			<div>{name}!</div>
		</div>
	);
}
```
</div>
</details>

<details>
<summary>💻 삼항 연산자(조건부 연산자) 사용  </summary>
  
```js
function App() {
  const number = 1;

  return (
    <div className="App">
      <p>안녕하세요! 리액트 반입니다 :)</p>
      {/* JSX 내에서 코드 주석은 이렇게 씁니다 :) */}
      {/* 삼항 연산자를 사용했어요 */}
      <p>{number > 10 ? number+'은 10보다 크다': number+'은 10보다 작다'}</p>
    </div>
  );
}

```
</div>
</details>


<details>
<summary>💻 class 대신 className </summary>
<div markdown="1">      


```jsx
<div className="App">
```
</div>
</details>


<details>
<summary>💻 인라인으로 style 주기</summary>
<div markdown="1">      

```jsx
    <p style={{color: 'orange', fontSize: '20px'}}>orange</p>
    
    //혹은 스타일 객체를 변수로 만들고 쓸 수 있어요!
    function App() {
      const styles = {
        color: 'orange',
        fontSize: '20px'
      };
    
      return (
        <div className="App">
          <p style={styles}>orange</p>
        </div>
      );
    }
```  
</div>
</details>








