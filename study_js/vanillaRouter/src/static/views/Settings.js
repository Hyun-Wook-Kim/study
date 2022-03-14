import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super(); //
    this.setTitle("Settings");
  }
  async getHtml() {
    return `
      <h1> welcome. this is Settings </h1>
      <p>이 페이지는 Settings 페이지입니다.</p>
      `;
  }
}
