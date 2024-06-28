# 대수 타입(Algebraic type)이란?
> 대수 타입이란 여러개의 타입을 합성해서 만드는 타입이며, 합집합은 Union 타입, 교집합은 Intersection 타입이라고 부릅니다


# 합집합(Union) 타입
> string과 number의 유니온 타입을 정의할 수 있습니다. 바 | 를 이용

```js
// 합집합 타입 - Union 타입
let a: string | number | boolean;

a = 1;
a = "hello";
a = true;
```

### ✅ Union 타입으로 배열 타입 정의

```ts
let arr: (number | string | boolean)[] = [1, "hello", true];
```


### ✅ Union 타입과 객체 타입

```ts
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = { // ✅
  name: "",
  color: "",
};

let union2: Union1 = { // ✅
  name: "",
  language: "",
};

let union3: Union1 = { // ✅
  name: "",
  color: "",
  language: "",
};
```



# 교집합(Intersection) 타입
> string과 number의 인터섹션 타입을 정의할 수 있습니다 &을 이용

```ts
let variable: number & string; 
// never 타입으로 추론된다
```




### ✅ Intersection 타입과 객체 타입
```ts
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
```




















