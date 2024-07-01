# 1. 인터페이스란?
> 인터페이스란 타입 별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법

```ts
interface Person {
  name: string;
  age: number;
}


const person: Person = {
  name: "이정환",
  age : 27
};
```



## 📕 선택적 프로퍼티

```ts
interface Person {
  name: string;
  age?: number;
}

const person: Person = {
  name: "이정환",
  // age: 27,
};
```


## 📕 읽기 전용 프로퍼티

```ts
interface Person {
  readonly name: string;
  age?: number;
}

const person: Person = {
  name: "이정환",
  // age: 27,
};

person.name = '홍길동' // ❌
```


## 📕 메서드 타입 정의하기

```ts
interface Person {
  readonly name: string;
  age?: number;
  sayHi: () => void;;
}

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
}
```

## 📕 메서드 오버로딩
```ts
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number): void;
  sayHi(a: number, b: number): void;
}
```  
### ⭐ 주의할점
> 함수 타입 표현식으로 메서드의 타입을 정의하면 메서드의 오버로딩 구현이 불가능  
```ts
interface Person {
  readonly name: string;
  age?: number;
  sayHi: () => void; 
  sayHi: (a: number, b: number) => void; // ❌
}
```


## 📕 하이브리드 타입  
```ts
interface Func2 {
  (a: number): string;
  b: boolean;
}

const func: Func2 = (a) => "hello";
func.b = true;
```


# 2. 인터페이스 확장

```ts
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  breed: string;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}
```

## 📕 프로퍼티 재 정의하기
> 다운캐스팅으 재정의 가능
```ts
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  name: "doldol"; // 타입 재 정의 하지만 다운캐스팅으로만!
  breed: string;
}
```


## 📕 다중 확장
```ts
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  breed: "",
  isScratch: true,
};
```

# 3. 인터페이스 선언 합치기
## 📕 선언 합침
> 중복된 이름의 인터페이스 선언은 결국 모두 하나로 합쳐지기 때문에 가능
```ts
interface Person {
  name: string;
}

interface Person { // ✅
  age: number;
}

```

