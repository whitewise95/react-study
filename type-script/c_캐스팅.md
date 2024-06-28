# 타입은 집합이다. 수퍼타입과 서브타입  
여러개의 숫자 값들을 묶어 놓은 집합을 타입스크립트에서는 number 타입이라고 한다. 
<img width="464" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/fa0e53fe-6f61-46c5-9569-085a12ea9c05">    

오직 하나의 값만 포함하는 타입인 Number Literal 타입  
<img width="346" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/02e334e4-1e1f-4562-b8eb-3510b9a2bfe8">    

 20 이라는 타입에 속하는 요소인 숫자 20은 이 사실 집합 외에도 Number 타입이라는 거대한 집합에도 속하는 값  
<img width="467" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/34b7991b-5380-4d38-9622-abf5c9722b07">  


이런 관계에서 Number 타입처럼 다른 타입을 포함하는 타입을 슈퍼 타입(부모 타입)이라고 부릅니다. 반대는 서브 타입(자식 타입)이라고 합니다.  
<img width="387" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/9b992eb1-22ba-44f3-aaf9-4607b2b301d1">  
<img width="385" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/ff3af2fe-947d-4680-8bf4-db39554b5295">  



## 📕  타입계층도 
> 결국 이 타입 계층도가 설명해주고 있는 것은 타입스크립트가 제공하는 여러가지 기본 타입들간의 집합으로써의 부모-자식 관계 였던 것 입니다. 여기까지 이해했다면 우리는 이제 다음으로 넘어가 이런 타입간의 관계를 어떻게 이용할 수 있는지 살펴봐야 합니다. 
![Untitled](https://github.com/whitewise95/ts_js_react-study/assets/81284265/058475ee-7992-4714-b508-d8845fb6f5b8)





# 타입 호환성 업캐스팅과 다운캐스팅
> Number 타입과 Number Literal 타입이 있을 때 서브 타입인 Number Literal 타입의 값을 슈퍼 타입인 Number 타입의 값으로 취급하는 것은 가능합니다. 그러나 반대로는 불가능합니다.  
<img width="578" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/5fe46670-fe38-417c-8fcf-7d6be3896778">


<img width="668" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/b569b0c7-4d58-49d6-a9fb-58ab18c37549">

