# useEffect 란?
useEffect는 리액트 컴포넌트가 렌더링 된 이후마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다.   


# 사용법
### **기본 사용법**
> 리렌더링 마다 console.log가 출력된다.
```jsx
  useEffect(() => {
    console.log("hello useEffect");
  });
```

### **의존성 배열 사용**
useEffect에는 의존성 배열이 존재하는데 “이 배열에 값을 넣으면 그 값이 바뀔 때만 useEffect를 실행할게” 라는 것  
```jsx
// useEffect의 두번째 인자가 의존성 배열이 들어가는 곳 입니다.
useEffect(()=>{
	// 실행하고 싶은 함수
}, [의존성배열])
```

⭐ ex 1) 의존성 배열이 빈값일 경우 최초 렌더링시에만 log가 출력이되고 이후에는 출력되지 않는다.
```jsx
  useEffect(() => {
    console.log("hello useEffect");
  }, []); // 비어있는 의존성 배열

```  

⭐ ex 2) 의존성 배열이 있을 경우 value 값이 변경될 때마다 log가 출력된다.  
```jsx
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log("hello useEffect");
  }, [value]); // value를 넣음

```

### **clean up**
컴포넌트가 unmount(컴포넌트가 사라졌을 때) 될 때 동작한다. 
```
	useEffect(()=>{
		// 화면에 컴포넌트가 나타났을(mount) 때 실행하고자 하는 함수를 넣어주세요.

		return ()=>{
			// 화면에서 컴포넌트가 사라졌을(unmount) 때 실행하고자 하는 함수를 넣어주세요.
		}
	}, [])
```





