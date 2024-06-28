# 타입스크립트란? 
> 타입스크립트는 2012년에 마이크로소프트의 개발자이자 C#의 창시자로도 알려진 아주 유명한 덴마크 출신의 개발자 Anders Hejlsberg(앤더스 하일스버그)의 손에서 처음으로 탄생


# 기본타입   
> 기본 타입이란 타입스크립트가 자체적으로 제공하는 타입들을 말합니다. 기본 타입을 다른 말로는 내장 타입이라고도 할 수 있습니다.  
<img width="692" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/e6dbbc21-596a-4bf0-a596-dcb1fcdecc3f">



# 원시타입과 리터럴타입
## 📕 원시타입
> 원시 타입(Primitive Type)은 동시에 한개의 값만 저장할 수 있는 타입 ex) number, string, boolean 등


### ✅ number 타입
- 타입은 자바스크립트에서 숫자를 의미하는 모든 값을 포함하는 타입입니다. 단순 정수 뿐만 아니라 소수, 음수, Infinity, NaN등의 특수한 숫자들도 포함
```ts
// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;
```

###  ✅ string 타입
- string 타입은 문자열을 의미하는 타입입니다. 단순 쌍따옴표 문자열 뿐만 아니라 작은 따옴표, 백틱, 템플릿 리터럴로 만든 모든 문자열을 포함합니다.  
```ts
// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${str1}`;
```

###  ✅ boolean 타입
- boolean 타입은 참과 거짓만을 저장하는 타입입니다. true 또는 false만 이 타입에 해당됩니다.  
```
// boolean
let bool1 : boolean = true;
let bool2 : boolean = false;
```


###  ✅ null 타입
- null 타입은 오직 null 값만 포함하는 타입입니다.  
```ts
// null
let null1: null = null; 
```

###  ✅ undefined 타입
- undefined 타입 역시 null 타입과 마찬가지로 오직 하나의 값 undefined만 포함하는 타입입니다.  
```ts
// undefined 타입
let unde1: undefined = undefined;
```


```
⭐ null타입 외에 null 활용하기

null은 number 타입에 포함되는 값이 아니기 때문에 오류가 발생하는 것 입니다. 
그러나 앞서 이야기 했듯 null 값을 변수의 임시값으로 활용하고 싶은 상황이 충분히 있을 수 있습니다.

tsconfig.json의 strcitNullChecks(엄격한 null 검사) 옵션을 false로 설정
```


## 📕 리터럴 타입
> 타입스크립트에는 string, number 처럼 범용적으로 많은 값을 포함하는 타입 뿐만 아니라 딱 하나의 값만 포함하는 타입도 존재합니다. 따라서 다음과 같이 변수의 타입을 숫자 10으로 설정하는 것 또한 가능합니다.

```ts
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
let boolB: false = false;
```

# 배열과 튜플 
## 📕 배열

### ✅ 기본 사용법 

```ts
let numArr: number[] = [1, 2, 3]
let strArr: string[] = ["hello", "im", "winterlood"];
let boolArr: Array<boolean> = [true, false, true];
```

### ✅  다양한 타입 요소를 갖는 배열 타입 정의하기
```ts
let multiArr: (number | string)[] = [1, "hello"];
```



###  ✅ 다차원 배열 타입 정의하기
```ts
let doubleArr : number[][] = [
  [1, 2, 3], 
  [4, 5],
];
```


## 📕  튜플
> 튜플은 자바스크립트에는 없는 타입스크립트의 특수한 타입으로 길이와 타입이 고정된 배열을 의미 하며, 튜플은 결국 배열


###  ✅ 기본 사용법
```
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];


tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);
```

  

# 객체
## 📕 object로 정의

```ts
let user: object = {
  id: 1,
  name: "이정환",
};
```
### ⭐ object 로 선언시 주의점 
> user.id 처럼 점 표기법으로 객체의 특정 프로퍼티에 접근하려고 하면 오류가 발생 힙니다. 그 이유는 타입스크립트의 object 타입은 단순 값이 객체임을 표현하는 것 외에는 아무런 정보도 제공하지 않는 타입이기 때문입니다. 따라서 이 타입은 객체의 프로퍼티에 대한 정보를 전혀 가지고 있지 않습니다. 그렇기 때문에 이렇게 프로퍼티에 접근하려고 하면 오류가 발생합니다.
> 객체 리터럴 타입으로 해결합니다.  

<img width="447" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/da6e7faa-d3e1-4c72-b40c-e555a8708403">  

```ts
let user: object = {
  id: 1,
  name: "이정환",
};

user.id; // 에러

// 해결법은 객체 리터럴 타입으로 

let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user.id;
```

## 📕 특수한 프로퍼티 정의하기

### ✅ 선택적 프로퍼티 
> 자바스크립트에서 객체를 다루다보면 자주 특정 프로퍼티는 있어도 되고 없어도 되는 그런 상황이 존재합니다. 예를 들어 다음과 같이 이름은 있지만 아직 id가 없는 유저가 존재할 수도 있습니다.  
```ts
let user: {
  id?: number; // 선택적 프로퍼티가 된 id
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user = {
  name: "홍길동",
};

```



### ✅ 읽기전용 프로퍼티
> 프로퍼티의 이름 앞에 readonly 키워드를 붙이면  name 프로퍼티는 이제 읽기 전용 프로퍼티가 되었기 때문에 마지막 라인처럼 프로퍼티의 값을 수정하려고 하면 오류가 발생하게 됩니다.
```ts
let user: {
  id?: number;
  readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
  id: 1,
  name: "이정환",
};

user.name = "dskfd"; // 오류 발생
```

# 타입 별칭과 인덱스 시그니쳐 

## 📕  타입 별칭

```ts
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

```


## 📕  인덱스 시그니처
> countryCodes에 100개의 프로퍼티(국가 코드)가 추가 되어야 한다면 타입 정의에도 각 프로퍼티를 모두 정의해주어야 하기 때문에 매우 불편 이럴때 인덱스 시그니쳐를 이용하면 다음과 같이 간단하게 타입을 정의
```
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil : 'bz'
};
```
   
# 열거형(Enum) 타입
```
// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 10, // 10 할당 
  USER,       // 11 할당(자동)
  GUEST,      // 12 할당(자동)
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 10
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 11
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 12
};

```


# any 타입
> any 타입은 타입스크립트에서만 제공되는 특별한 타입으로 타입 검사를 받지 않는 특수한 치트키 타입  
 
```ts
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

```


 #  Unknown 타입  
 > unknown 타입의 변수는 다음과 같이 어떤 타입의 값이든 다 저장할 수 있지만, unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없습니다.
```ts
let num: number = 10;
(...)

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

num = unknownVar; // 오류 !
```

> 만약 위와 같이 unknown 타입의 값을 number 타입의 값처럼 취급하고 곱셈 연산을 수행하게 하고 싶다면 다음과 같이 조건문을 이용해 이 값이 number 타입의 값임을 보장해줘야 합니다.

```
if (typeof unknownVar === "number") {
	// 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}
```


# void 타입 
> void 타입은 아무런 값도 없음을 의미하는 타입입니다.


```ts
function func2(): void {
  console.log("hello");
}

```

# never 타입 
> never 타입은 불가능을 의미하는 타입입니다.

```ts
function func3(): never {
  while (true) {}
}
```  
```ts
function func4(): never {
  throw new Error();
}
```

  
