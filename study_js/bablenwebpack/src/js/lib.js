export const pi = Math.PI; // es6의 모듈

export function power(x, y) {
  return x ** y; // es7의 지수 연산자
}

export class Foo {
  #private = 10; // stage 3 단계
  foo() {
    const { a, b, ...x } = { ...{ a: 1, b: 2 }, c: 3, d: 4 };
    return a, b, x;
  }
  bar() {
    return this.#private;
  }
}
