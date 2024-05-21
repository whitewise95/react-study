# 1. props란?
### **📌 컴포넌트 끼리의 정보교환 방식**  

App.jsx 에서 `App 컴포넌트`가 `Component1 컴포넌트에` title 라는 키 값으로 title 를 전달 했기에 `Component1 컴포넌트`에서 props를 받아서 타이틀로 쓰고 있는 것을 볼 수 있다. `Component2 컴포넌트` 도 마찬가지다.  
<img width="246" alt="image" src="https://github.com/whitewise95/react-study/assets/81284265/8bef10e4-f07c-4472-bc2c-e5e21603fe86">  
```jsx
import "./App.css";

function App() {
    const title = "Component1 영역";

    return (
        <div>
            <h1>App 영역</h1>
            <Component1 title={title}></Component1>
        </div>
    );
}

/**
 *  App의 자식 컴포넌트 => 컴포넌트1
 * */
function Component1(props) {
    const title2 = "Component2 영역";
    return (
        <div>
            <h2>{props.title}</h2>
            <Component2 title={title2}></Component2>s
        </div>
    );
}

/**
 *  컴포넌트1의 자식 컴포넌트 => 컴포넌트2
 * */
function Component2(props) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    );
}

export default App;

```  


### **📌 props는 반드시 위에서 아래 방향으로 흐른다. 즉, [부모] → [자식] 방향으로만 흐른다(단방향)**  
> `Component1 컴포넌트가` `App 컴포넌트`에게 Props를 줄 수 없다.



# 2.Props Children  
### **📌children이란?**  
- 자식 컴포넌트로 정보를 전달하는 또 다른 방법이다.


### **📌children 사용해보기**    
children props를 보내는 방식은 props를 보내던 방식과는 조금 다릅니다.  
`<User></User>` 사이에 `안녕하세요` 가 children props이 된다. 

```jsx
import React from "react";

function User(props) {
  return <div>{props.children}</div>;
}

function App() {
  return <User>안녕하세요</User>;  
}
export default App;
```


# 3. Props 추출
### **📌구조분해할당과 props**  
우리는 지금까지 자식 컴포넌트에서 props를 받을 때 이렇게 했습니다. 
```jsx
function Component1(props){
	return <div>{props.title}</div>
}
```
​
문제는 없지만 title 라는 props를 사용하는 모든 곳에서 props. 를 붙여줘야만 했죠. 이것을 조금 더 짧게 쓰는 방법이 있습니다. 바로 자바스크립트의 구조 분해 할당을 이용하는 것 입니다. 
```jsx
function Component1({ title }){
	return <div>{title}</div>
}
```
​
훨씬 간단하고 짧아졌습니다. 만약 여러개의 props를 받는다면, { } 안에 여러개의 props를 그대로 써주면 됩니다. 
```jsx
function Component1({ title, body, isDone, id }){
	return <div>{title}</div>
}
```










