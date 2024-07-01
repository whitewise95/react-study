# 1. Generic

```ts
function func<T>(value: T): T {
  return value;
}

let num = func(10);
// number 타입
```

```ts
function func<T>(value: T): T {
  return value;
}

let arr = func<[number, number, number]>([1, 2, 3]);
```


# 2.활용

## 📕 만약 2개의 타입 변수가 필요한 상황이라면 다음과 같이 T, U 처럼 2개의 타입 변수를 사용해도 됩니다.
```ts
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);
```

## 📕 다양한 배열 타입을 인수로 받는 제네릭 함수를 만들어야 한다면 다음과 같이 할 수 있습니다.
```ts
function returnFirstValue<T>(data: T[]) {
  return data[0];
}
let num = returnFirstValue([0, 1, 2]);
// number

let str = returnFirstValue([1, "hello", "mynameis"]);
// numb
```

## 📕 위 사례에서 만약 반환값의 타입을 배열의 첫번째 요소의 타입이 되도록 하려면 다음과 같이 튜플 타입과 나머지 파라미터를 이용하면 됩니다.
```ts
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str = returnFirstValue([1, "hello", "mynameis"]);
// number
```


# 3. map, forEach 메서드 타입 정의하기

## 📕 map
```ts
function map<T>(arr: T[], callback: (item: T) => T): T[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
```

## 📕 forEach  
```ts
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
```




