import AbstractView from "./Abstract.js";
import YoutubeMain from "../components/youtubemain.js";

const search = new YoutubeMain();
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Search");
  }

  async getHtml() {
    document.querySelector(".app").innerHTML = "";
    const inner = document.createElement("div");
    inner.classList.add("youtube-list");
    document.querySelector(".app").append(inner);
    document.querySelector(".input-wrap").classList.add("show");
    document.querySelector(".input-wrap input").value = "";
    document.querySelector(".searchBtn").removeEventListener("click", () => {
      search._searchList();
    });
    document.querySelector(".searchBtn").addEventListener("click", () => {
      const query = document.querySelector(".search-query").value;
      search._searchList(query);
    });
  }
}
