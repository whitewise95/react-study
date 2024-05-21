# 1. useState란?
> useState 는 state를 만들어주는 리액트에서 제공하는 기능입니다. 그래서 리액트에만 존재하는 개념이자 기능이며, “훅” 이라고 표현합니다.

### **useState 훅을 사용하는 방식은 아래와 같습니다.**  
먼저 const 로 선언을 하고 [ ] 빈 배열 을 생성하고, 배열의 첫번째 자리에는 이 state의 이름, 그리고 두번째 자리에는 set 을 붙이고 state의 이름을 붙입니다.  그리고 useState( ) 의 인자에는 이 state의 원하는 처음값 을 넣어줍니다.  
```jsx
const [ value, setValue ] = useState( 초기값 ); // 배열의 구조분해 할당이 사용되었다.

// ex)  
const [name, setName] = useState("김할아");  
```

### **state를 변경할때는 setValue(바꾸고 싶은 값) 를 사용한다.**
state란 컴포넌트안에서 변할 수 있는 값이기 때문에 setName 을 통해 이름을 바꿀 수 있습니다. “박할아"로 바꾸고 싶으니 setName(”박할아”) 를 하면 이름이 바뀔 것 입니다. 예제는 우리에게 버튼이 있고, 그 버튼을 눌렀을 때 setName("박할아") 를 실행하도록 코드를 작성했습니다.
```jsx
import React, { useState } from "react";

function App(props) {
    const [name, setName] = useState("김할아");
    return (
        <div>
            <button
                onClick={() => {
                    setName("박할아");
                }}
            >
                할아버지 이름 바꾸기
            </button>
            <div>{name}</div>
        </div>
    );
}

export default App;

```


**⭐ useState + onChange event 조합**
> React에서는 input 요소의 value 속성과 onChange 이벤트를 함께 사용하여 입력 필드의 상태를 관리하는 것이 일반적입니다. 이러한 패턴을 제어 컴포넌트(Controlled Component)라고 합니다.

이벤트 핸들러(onChangeHandler()) 안에서 자바스크립트의 event 객체를 꺼내 사용할 수 있습니다.  
사용자가 입력한 input의 값은 event.target.value 로 꺼내 사용할 수 있죠.   
마지막으로 state인 value를 input의 attribute인 value에 넣어주면 input과 state 연결이 됩니다.

```jsx
import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

	console.log(value) // value가 어떻게 변하는지 한번 콘솔로 볼까요?

  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={value} />
    </div>
  );
};

export default App;
```





