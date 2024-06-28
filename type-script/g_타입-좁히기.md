# 문제
- 매개변수 value의 타입이 number | string 이므로 함수 내부에서 다음과 같이 value가 number 타입이거나 string 타입일 것으로 기대하고 메서드를 사용하려고 하면 오류가 발생    
```ts
function func(value: number | string) {
  value.toFixed() // 오류
	value.toUpperCase() // 오류
}
```


# typeof  
> alue가 number 타입일거라고 기대하고 toFixed 메서드를 사용하고 싶다면 다음과 같이 조건문을 이용해 value의 타입이 number 타입임을 보장

```ts
function func(value: number | string) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  }
}
```



# instanceof 타입가드
> instanceof를 이용하면 내장 클래스 타입을 보장할 수 있는 타입가드를 만들 수 있습니다
```ts
function func(value: number | string | Date | null) {
  if (value instanceof Date) {
    console.log(value.getTime());
  }
}
```


# in 타입 가드
> 우리가 직접 만든 타입과 함께 사용하려면 다음과 같이 in 연산자를 이용해야 합니다.

```ts
type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`)
  }
}
```

 

