import AbstractView from "./Abstract.js";
import YoutubeMain from "../components/youtubemain.js";

const search = new YoutubeMain();
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Search");
  }

  async getHtml() {
    document.querySelector(".youtube-list").innerHTML = "";
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
