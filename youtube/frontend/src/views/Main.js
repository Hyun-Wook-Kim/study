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
    inner.classList.add("youtube-list");
    document.querySelector(".app").append(inner);
    main._youtubeList();
    // main._videoDetail();
  }
}
