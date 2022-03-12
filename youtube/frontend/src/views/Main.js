import AbstractView from "./Abstract.js";
import YoutubeMain from "../components/youtubemain.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Main");
  }

  getHtml() {
    const main = new YoutubeMain();
    document.querySelector(".youtube-list").innerHTML = "";
    main._youtubeList();
  }
}
