import AbstractView from "./Abstract.js";
import YoutubeMain from "../components/youtubemain.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Main");
  }

  getHtml() {
    const main = new YoutubeMain();
    document.querySelector(".app").innerHTML = "";
    const inner = document.createElement("div");
    const filter = document.createElement('div');
    filter.classList.add('filter')
    inner.classList.add("youtube-list");
    document.querySelector(".app").append(inner);
    document.querySelector(".app").prepend(filter);
    filter.innerHTML = `
    <ul>
      <li><button class="category-btn" data-cate="all">전체</button></li>
      <li><button class="category-btn" data-cate="group1">카테고리 1 ~ 10</button></li>
      <li><button class="category-btn" data-cate="group2">카테고리 11 ~ 20</button></li>
      <li><button class="category-btn" data-cate="group3">카테고리 21 ~ 30</button></li>
    </ul>
    `
    main._youtubeList();
    // this.filter();
  }

}
