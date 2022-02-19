// es6로 넘어오며, 무분별하게 쓰이던 함수에 구분이 생겼다
// 크게 일반함수, 메서드, 화살표 함수 3가지!

// 1. 메서드

{
  //es6부터 메서드에 대한 정의가 명확하게 규정되었다.
  //  메서드 축약 표현으로 정의된 함수만을 의미함

  const obj = {
    x: 1,
    // foo()는 메서드
    foo() {
      return this.x;
    },
    bar: function () {
      return this.x;
    },
  };

  console.log(obj.foo());
  console.log(obj.bar());

  // es6의 메서드는 constructor가 아니다!
  new obj.bar();
  //   new obj.foo();  << 얘만 에러가 남.

  // 또한 constructor 가 아니기 때문에, 프로토타입을 생성하지 않고 프로토타입 프로퍼티도 없다./
  // 표준 빌트인 객체는 모두 non-constructor임

  // es6 메서드는 [[HomeObject]] 내부 슬롯을 가진다.

  const base = {
    name: "Lee",
    sayHi() {
      return `hi! ${this.name}`;
    },
  };

  const derived = {
    __proto__: base,
    sayHi() {
      return `${super.sayHi()} How have you been?`;
    },
  };
  console.log(derived.sayHi());
}

console.clear();

// 2. 화살표 함수
{
  //화살표 함수는 표현과 동작이 간략할 뿐 아니라, this 작동 방식이 다르다.
  //화살표 함수는 선언으로 정의할 수 없고 함수 표현식으로 정의할 수 있다.
  const Multiplay = (x, y) => {
    return x * y;
  };
  console.log(Multiplay(2, 3));
  //   const Multiplay = (x, y) =>  x * y;
  // 함수 몸체에 문이 1개일 경우 {}와 return을 생략할 수 있다. (문이 표현식이라면 암죽억으로 반환된다)
  // 문이 여러 개거나, 표현식이 아닌 경우에는 {}와 return을 써주어야 함.

  // 객체 리터럴을 반환하는 경우 ()로 감싸주어야 한다. 중괄호 {}를 잘못 해석함.
  const create = (id, content) => ({ id, content });
  console.log(create(1, "js"));
}

// 일반 함수 vs 애로우 함수
// 1. 화살표 함수는 non-constructor (prototype 프로퍼티와 프로토타입 X)
// 2. this, arguments, super, new.target 바인딩을 갖지 않고, 상위 스코프에서 검색한다.
{
  // 화살표 함수의 큰 특징은 this의 표현 방식.

  class Prefixer {
    constructor(prefix) {
      this.prefix = prefix;
    }

    add(arr) {
      return arr.map(function (item) {
        return this.prefix + item;
      });
    }
  }

  const prefixer = new Prefixer("-webkit-");
  // 아래의 경우, 함수에서 타입 에러가 뜬다.
  // map은 콜백 함수를 일반함수로 호출해 this에 전역 객체가 바인딩 되기 때문.
  //   console.log(prefixer.add(["transition", "user-select"]));

  // 애로우 함수를 사용하면..
  class Prefixer2 {
    constructor(prefix) {
      this.prefix = prefix;
    }

    add(arr) {
      return arr.map((item) => this.prefix + item);
    }
  }
  const prefixer2 = new Prefixer2("-webkit-");
  // 화살표 함수는 this를 갖지 않는다. 상위 스코프인 class 실행 스코프에서 this를 검색한다.
  console.log(prefixer2.add(["transition", "user-select"]));
}

console.clear();

// 다음과 같은 경우에는 주의가 필요하다.
{
  // 1. 메서드를 화살표 함수로 정의하지 말 것
  const person = {
    name: "lee",
    // this가 전역을 스코프의 객체를 가리킴.
    sayHi: () => console.log(`Hi! ${this.name}`),
  };
  person.sayHi();

  // 2. 프로토타입 객체의 프로퍼티에 화살표 함수를 할당하지 말 것
  function Person2(name) {
    this.name = name;
  }
  Person2.prototype.sayHi = () => {
    // this가 전역 스코프에서 this.name 을 검색함.
    console.log(`Hi ${this.name}`);
  };
  const person2 = new Person2("Lee");
  person2.sayHi();
}

// 메서드 추가는 축약표현 사용이 불가하다
{
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHi = function () {
    console.log(`Hi! ${this.name}`);
  };
  const person = new Person("Kim");
  person.sayHi();

  // 대신 이렇게는 할 수 있음.
  function Person2(name) {
    this.name = name;
  }
  Person2.prototype = {
    constructor: Person,
    sayHi() {
      console.log(`Hi! ${this.name}`);
    },
  };
  const person2 = new Person2("Kim");
  person2.sayHi();
}

//클래스 필드에 화살표 함수를 할당할 수 있다.
{
  class Person {
    name = "Lee";
    sayHi = () => console.log(`Hi! ${this.name}`);
  }
  const person = new Person();
  person.sayHi();
  // 이 때의 화살표 함수는 상위 스코프가 아닌 클래스가 생성할 this 인스턴스를 참조한다.
  // 단 이렇게 되면 프로토타입 메서드가 아닌 인스턴스 메서드가 된다.
  // 그니까 메서드 정의할 때는 그냥  es6 메서드 쓰고, 화살표 함수는 콜백함수 등으로 쓰셈.
}

// super
{
  //애로우 함수는 super 바인딩 없음. 즉 상위 스코프 super 참조/
  class Base {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      return `hi ${this.name}`;
    }
  }

  class Derived extends Base {
    sayHi = () => `${super.sayHi()}  how are you doing?`;
  }

  const derived = new Derived("Kim");
  console.log(derived.sayHi());
}

//arguments
{
  //화살표 함수의 arguments도 상위 스코프 참조함.

  (function () {
    const foo = () => console.log(arguments);
    foo(1, 2);
    //얘는 즉시 실행 함수의 arguments 3,4를 받아온다.
    // 근데 지한테 필요한 걸 확인 못하면 무슨소용임? 그래서 Rest 쓰셈.
  })(3, 4);
}

// Rest 파라미터

{
  // Rest는 매개변수에 ...rest 이런식으로 써서 전달된 인수 목록을 배열로 전달받는다.
  function foo(a, b, ...rest) {
    console.log(a, b, "그리고 " + rest);
  }
  foo(1, 2, 3, 4, 5, 6);

  // arguments와의 차이점?
  // arguments는 유사배열이라 배열로 바꿔주어야 하지만, rest는 직접 배열로 받을 수 있다.
  // 근데 어차피 화살표 함수는 arguments 없어서 rest나 쓰셈

  // 보통 함수를 만들 때 방어코드를 위해 기본값을 지정해 준다.

  function sum(x, y = 0) {
    return x + y;
  }
  console.log(sum(3)); // 이 때 y는 0이 된다.
  console.log(sum(3, 4));

  // 하지만 rest에 기본값을 지정할 수는 없다

  //   function foo(...rest = []){
  //       console.log(rest)
  //   }
  //   foo();   << 요거 안된단 소리임.

  // 매개변수 기본값은 인수를 전달하지 않거나, undefined가 전달된 경우만 유효 (null은 안된다)
  // 매개변수 기본값은 함수의 매개변수 갯수 length랑 arguments에는 영향이 없다.
}
