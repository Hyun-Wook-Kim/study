import Abstract from "./Abstract.js";

export default class Account extends Abstract {
  constructor() {
    super();
    this.setTitle("계정 생성");
  }
  getHtml() {
    document.querySelector(".app").innerHTML = "";
    const inner = document.createElement("div");
    inner.classList.add("youtube-list");
    document.querySelector(".app").append(inner);

    const accountBox = document.createElement("div");
    accountBox.classList.add("account-box");
    const idBox = document.createElement("div");
    idBox.append(document.createElement("input"));
    idBox.classList.add("input");
    idBox.querySelector("input").placeholder = "아이디를 입력하세요";
    const pwBox = document.createElement("div");
    pwBox.append(document.createElement("input"));
    pwBox.classList.add("input");
    pwBox.querySelector("input").placeholder = "비밀번호를 입력하세요";
    accountBox.append(idBox, pwBox);
    document.querySelector(".app").append(accountBox);

    idBox.querySelector("input").addEventListener("change", (event) => {
      const target = event.currentTarget.value;
      // 아이디는영문소대문자or숫자로 시작하고  .com 혹은 .net 으로 끝나며, @가 중간에 1개 포함되어야 하는
      // 5 자에서 20자 사이 (도메인.com 제외)
      const regExpForId = /^[0-9A-Za-z]{5,20}@[a-z]+(\.com)$/;
      console.log(regExpForId.test(target));
      if (!regExpForId.test(target)) {
        alert(
          "아이디는 도메인.com 을 제외한, 영문 대소문자 or 숫자 조합의 5~20자 사이 문자여야 합니다."
        );
      } else {
        alert("사용 가능한 아이디입니다!");
      }
    });

    pwBox.querySelector("input").addEventListener("change", (event) => {
      const target = event.currentTarget.value;
      // 비밀번호는 영대소문자숫자와 특수문자 _ ! 의 조합 8글자 이상 20글자 이하

      //문제가 하나 있다. 나는 특수문자 숫자 문자가 각각 꼭 하나 이상 들어가게 만들고 싶은데...

      // ?= 요거를 쓰면 된다곤 하는데, 이게 뭔지를 잘 모르겠다..
      // ?=정규식   >> 해당 위치 뒤에 나오는 문자열 중 정규식에 일치하지만, 리턴하지는 않는 정규 표현식

      // 쓰긴 썼는데 솔직히 작동  방식은 잘 모르겠음..

      const regExpForPw =
        /^(?=.*[\_\!])(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z\_\!]{8,20}$/;
      console.log(regExpForPw.test(target));
      if (!regExpForPw.test(target)) {
        alert(
          "비밀번호는 영대소문자숫자와 특수문자 _ ! 의 조합 8글자 이상 20글자 이하"
        );
      } else {
        alert("사용 가능한 비밀번호입니다!");
      }
    });
  }
}
