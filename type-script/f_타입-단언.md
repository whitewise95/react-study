# 타입 단언이란
> 값 as 타입 으로 특정 값을 원하는 타입으로 단언할 수 있습니다. 이를 타입 단언 이라고 부릅

- 빈 객체는 Person 타입이 아니므로 오류가 발생하게 됩니다.  이럴 땐 다음과 같이 이 빈 객체를 Person 타입이라고 타입스크립트에게 단언
```ts
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "";
person.age = 23; 
```

- breed 라는 초과 프로퍼티가 존재하지만 이 값을 Dog 타입으로 단언하여 초과 프로퍼티 검사를 피했습니다.

```ts
type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog
```



# 타입 단언의 조건 
> 값 as 타입 형식의 단언식을 A as B로 표현했을 때 아래의 두가지 조건중 한가지를 반드시 만족해야 합니다.
- A가 B의 슈퍼타입이다
- A가 B의 서브타입이다

```ts
let num1 = 10 as never;   // ✅
let num2 = 10 as unknown; // ✅

let num3 = 10 as string;  // ❌
```


# 다중 단언 
```js
let num3 = 10 as unknown as string;
```


# const 단언 

```ts
let num4 = 10 as const;
// 10 Number Literal 타입으로 단언됨

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// 모든 프로퍼티가 readonly를 갖도록 단언됨
```

# Non Null 단언 
> 값 as 타입 형태를 따르지 않는 단언으로 값 뒤에 느낌표(!) 를 붙여주면 이 값이 undefined이거나 null이 아닐것으로 단언

```ts
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

const len: number = post.author!.length;
```  


