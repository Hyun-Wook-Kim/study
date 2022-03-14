import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }
  async getHtml() {
    return `
      <h1> welcome. this is Posts! </h1>
      <p>이 페이지는 Posts 페이지입니다.</p>
      `;
  }
}
