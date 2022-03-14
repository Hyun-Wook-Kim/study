const target = "Is this all there is?";

const regexp = /is/i;

console.log(regexp.test(target));
console.log(regexp.exec(target)); // 요건 매칭 결과를 배열로 반환한다. (g 플래그를 써도 1개만 검색된다!);

const target2 = "Is this all there is?";
const regexp2 = /is/g;

console.log(target2.match(regexp2)); // 얘는 반대로 target이 regexp와 일치하는 지 반환하는데, g를 쓰면 모든 결과를 배열로  반환한다.

//중요한 플래그 3개! :
// i : 대소문자 구분 없이 검색
// g : 대상 문자열 내에서 패턴과 일치하는 모든 문자열 검색
// m : 문자열의 행이 바뀌어도 계속 검색

console.clear();
console.log(target.match(/is/));
console.log(target.match(/is/i));
console.log(target.match(/is/g));
console.log(target.match(/is/gi));

///////////////////////////////////////////////////////////////////////////////////////////

// . 은 문자열에 상관 없이 자릿수를 의미한다. ...은 3자리 문자열과 매칭이 된다.
console.log(target.match(/.../g));

{
  // {m,n} 은 앞에 있는 패턴이 최소 m번, 최대 n번 반복되는 문자열이다
  const target = "A AB B BB Aa Bb AAA";
  // A가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색하려면
  console.log(target.match(/A{1,2}/g));

  // {n} 은 {n,n}과 같다. n번 반복되는 문자열을 검색한다.
  console.log(target.match(/B{2}/gi));

  // {n,} 은 앞선 패턴이 최소 n번 이상 반복되는 문자열이다.
  console.log(target.match(/A{2,}/gi));

  // + 는 {1,} 즉 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 뜯한다.
  console.log(target.match(/A+/g));

  // ? 는 앞선 패턴이 최대 한 번 이상 반복되는 문자열, 즉 {0 , 1} 의 의미를 가진다.
  {
    const target = "color colour";
    console.log(target.match(/colou?r/g)); // colo 다음 u가 0번이나 (없거나) 1번 이상 반복되고, 그 뒤에 r이 나오는지 => 즉 color 또는 colour
  }
}

{
  const target = "A AA B BB Aa Bb";

  // | 은 or의 이미다.
  console.log(target.match(/A|B/g)); // A 또는 B를 전역 검색
  // console.log(target.match(/A{2}|B{2}/));  이렇게는 안되는 듯..?

  //분해되지 않은 단어 레벨로 검색하려면 +를 사용해야 한다.
  console.log(target.match(/A+|B+/g)); //A가 1번 이상 반복되거나 B가 한 번 이상 반복되는 거.

  // 이렇게도 표현할 수 있다.
  console.log(target.match(/[AB]{2}/g)); // A또는 B가 2번이상 반복되는 문자열!
}

{
  // 범위를 지정하는 방법
  const target = "A AA BB ZZ Aa Bb";
  const regexp = /[A-Z]{2}/gi; // A부터Z까지 중 2번이상 반복되는 문자열 대소문 관계 없이 전역 검색
  console.log(target.match(regexp));

  const target2 = "AA BB 12.345";
  const regexp2 = /[0-9.]+/g;
  console.log(target2.match(regexp2));

  // 위 결과는 다음과 같이 표현할 수 있다. \d 는 숫자 즉 [0-9]를 의미한다. 반면 \D는 숫자가  아니다, 즉 [^0-9]를 ㅇ의미한다.
  console.log(target2.match(/[\d.]+/g));
  console.log(target2.match(/[\D]{2}/g));

  // \w 는 알파벳 숫자 혹은 언더스코어를 의미한다. 즉 [A-Za-z0-9_]의 의미다. \W 는 알파벳, 숫자, 언더스코어가 아닌 문자열을 의미한다
  const target3 = "Aa Bb 12.345 _$%&";
  console.log(target3.match(/[\w.]+/g));
  console.log(target3.match(/[^\w.]+/g));

  //  [ ]내부의 ^은 not 의 의미를 갖는다. 즉 [^0-9]는 \D 와 같다.
  console.log("123 A BDe A54f Gx".match(/[^0-9]+/g));

  // 반면 [ ] 밖의 ^는 문자열의 시작점을 의미한다.
  console.log("http://poiemaweb.com".match(/^http/gi)); // http로 시작하는 문자열 찾긔.
}

console.clear();

// 자주 사용하는 정규 표현식에는 뭐가 있을깡?

{
  // 특정 단어로 시작하는지 검사 ( http:// 또는 https://로 시작하는지 )
  const target = "http://example.com";
  console.log(target.match(/^https?:\/\//g));
  //또는..
  console.log(target.match(/^(http|https):\/\//));

  // 특정 단어로 끝나는지 검사 (html 로 끝나는지)
  const fileName = "index.html";
  console.log(fileName.match(/html$/g));

  // 숫자로만 이루어진 문자열 검사
  const target2 = "12345";
  console.log(target2.match(/\d+/gi));
  console.log(/^\d+$/.test(target2));

  // 하나 이상의 공백으로 시작하는지 검사
  const target3 = "  Hi!";
  console.log(/^[\s]+/.test(target3)); // \s는 공백문자, 스페이스 탭 등을 의미한다.

  // 알파벳 대소문자 or 숫자로 시작하고 끝나며 4~10 자리인지 검사한다. 중간에는 아무거나 와도 괜찮다
  const id = "3&*4dsf$";
  // console.log(/^[0-9A-Za-z]{4,10}$/.test(id)); 이거 안 됨. 중간에 특수문자 들어가면 오류 뜸
  console.log(/^[A-zA-a0-9]+.{2,8}[A-Za-z0-9]$/.test(id));
}
