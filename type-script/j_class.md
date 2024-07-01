# 1. 타입스크립트의 클래스
타입스크립트에서는 클래스의 필드를 선언할 때 타입 주석으로 타입을 함께 정의해주어야 합니다. 그렇지 않으면 함수 매개변수와 동일하게 암시적 any 타입으로 추론되는데 엄격한 타입 검사 모드(strict 옵션이 true로 설정되어 있을 경우)일 때에는 오류가 발생하게 됩니다. 

```ts
class Employee {
  // 필드
  name: string = "";
  age: number = 0;
  position?: string = "";

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}
```


## 클래스는 타입
> 타입스크립트의 클래스는 타입으로도 사용할 수 있습니다.

```ts
class Employee {
  (...)
}

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
```


## 상속
타입스크립트에서 클래스의 상속을 이용할 때 파생 클래스(확장하는 클래스)에서 생성자를 정의 했다면 반드시 super 메서드를 호출해 슈퍼 클래스(확장되는 클래스)의 생성자를 호출해야 하며, 호출 위치는 생성자의 최상단 이어야만 합니다.
```ts
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
```


# 2. 접근 제어자
`public` : 모든 범위에서 접근 가능
`private` : 클래스 내부에서만 접근 가능
`proteced` : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능



## 필드 생략하기
> 생성자의 매개변수에도 설정할 수 있습니다. 다음과 접근 제어자가 설정된 매개변수들은 this.필드 = 매개변수가 자동으로 수행하고 name, age, position은 모두 this 객체의 프로퍼티 값으로 자동 설정되기 때문에 다음과 같이 생성자 내부의 코드를 제거해도 됩니다.

```
class Employee {
  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}
```

# 3. 인터페이스를 구현하는 클래스
> 타입스크립트의 인터페이스는 클래스의 설계도 역할을 할 수 있습니다.
```ts
/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
```

