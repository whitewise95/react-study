# lodash 란?
> lodash는 JavaScript 유틸리티 라이브러리로, 배열, 객체, 문자열 등의 데이터 조작을 쉽게 할 수 있는 다양한 함수들을 제공합니다. 성능 최적화와 코드 가독성을 높이는 데 유용합니다. 특히, throttle과 debounce 같은 함수도 포함되어 있어 편리합니다.


### ***📕 lodash 임포트하기***  
```jsx
import _ from "lodash";
```

### ***📕 debounce 함수 예제***  
```jsx
 const handleSearchText = _.debounce((text) => setSearchText(text), 2000);

  const handleChange = (e) => {
    setInputText(e.target.value);
    handleSearchText(e.target.value);
  };
```

### ***📕 throttle 함수 예제***  
```jsx
 const handleSearchText = _.throttle((text) => setSearchText(text), 2000);

  const handleChange = (e) => {
    setInputText(e.target.value);
    handleSearchText(e.target.value);
  };
```  


