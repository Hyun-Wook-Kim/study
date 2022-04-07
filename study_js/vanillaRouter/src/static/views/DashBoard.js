import AbstractView from "./AbstractView.js"; // 이게 좀 헷갈리긴 하는데.. 뒤에 js를 안붙혀주면 import를 왜 못하지?

export default class extends AbstractView {
  constructor() {
    super(); // 확장된 클래스는 생성자 함수를 super 클래스에 위임해야 한다.
    this.setTitle("Dashboard");
  }
  async getHtml() {
    return `
      <h1> welcome. this is dashboard </h1>
      <p>이 페이지는 dash board 페이지입니다.</p>

      `;
  }
}
