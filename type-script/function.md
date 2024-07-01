# 1. 함수의 타입을 정의하는 방법
```ts
function func(a: number, b: number): number {
  return a + b;
}
```

## 📕 추론
> 참고로 함수의 반환값 타입은 자동으로 추론되기 때문에 다음과 같이 생략가능
```ts
function func(a: number, b: number) {
  return a + b;
}
```

## 📕 화살표 함수 타입 정의
```ts
const add = (a: number, b: number): number => a + b;

const add = (a: number, b: number) => a + b;
```

## 📕 매개변수 기본값 설정하기

```ts
function introduce(name:number = "이정환") {
	console.log(`name : ${name}`);
}
```

## 📕 선택적 매개변수 설정하기
> 다음과 같이 매개변수의 이름뒤에 물음표(?)를 붙여주면 선택적 매개변수가 되어 생략이 가능하며, tall의 타입은 현재 number | undefined이 되기에 타입 좁히기가 필요하고 반드시 뒤에 배치해야한다.
```ts
function introduce(name = "이정환", tall?: number) {
  console.log(`name : ${name}`);
  console.log(`tall : ${tall}`);
}

introduce("이정환", 156);

introduce("이정환");
```

## 📕 나머지 매개변수
```ts
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
```

```ts
function getSum(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

```


# 2. 함수 타입 표현식  
```ts 
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

## 📕 하이브리드 타입 
```ts
type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

const add2: Operation2 = (a, b) => a + b;
(...)

add2(1, 2);
add.name;
```


# 3. 함수 오버로딩
```ts
// 버전들 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;
```





