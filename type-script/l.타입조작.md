# 타입조작이란?
> 먼저 타입을 조작한다는 것은 기본 타입이나 별칭 또는 인터페이스로 만든 원래 존재하던 타입들을 상황에 따라 유동적으로 다른 타입으로 변환하는 타입스크립트의 강력하고도 독특한 기능


## Indexed Access Types 

### 객체에서의 인덱스드 엑세스 타입 
```ts
type Member = {
  id: number,
  name: string,
};

type Id = Member['id']; //type Id = number;
type Name = Member['name']; //type Name = string;
type Union = Member['id' | 'name']; //type Union = number | string;
```


### 배열에서의 인덱스드 엑세스 타입
```ts
let arr = [
  {id: 1, name: 'Kim'},
  {id: 2, name: 'Lee'},
  {id: 3, name: 'Park'}
];

type Id = typeof arr[number]['id']; //type Id = number;
type Name = typeof arr[number]['name'] //type Name = string;
type Arr = typeof arr[number]; //type Arr = {id: number, name: string};
```


### 튜플에서의 인덱스드 엑세스 타입
```ts
type Tuple = [number, string];

type T1 = Tuple[0]; //type T1 = number;
type T2 = Tuple[1]; //type T2 = string;
type T3 = Tuple[number]; //type T3 = number | string;
```


## typeof
> 객체 형태의 타입을, 따로 속성들만 뽑아 모아 유니온 타입으로 만들어주는 연산자
```ts
type Type = {
   name: string;
   age: number;
   married: boolean;
}

type Union = keyof Type;
// type Union = name | age | married

const a:Union = 'name';
const b:Union = 'age';
const c:Union = 'married';
```


## Mapped
```ts
interface Person {
   name: string;
   age: number;
}

type ReadOnly<T> = {
   readonly [P in keyof T]: T[P];
};

type ParTial<T> = {
   [P in keyof T]?: T[P];
};

type PersonPartial = Partial<Person>;

type ReadonlyPerson = Readonly<Person>;
```

<img width="503" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/3afb5110-617e-494a-95b5-3d279aea49a5">


 
