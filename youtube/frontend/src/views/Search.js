import AbstractView from "./Abstract.js";
import YoutubeMain from "../components/youtubemain.js";

const search = new YoutubeMain();
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Search");
    this.queryStored = 'ㅎㅇ';
  }
  

  async getHtml() {
    let query;
    document.querySelector(".app").innerHTML = "";
    const inner = document.createElement("div");
    inner.classList.add("youtube-list");
    document.querySelector(".app").append(inner);
    document.querySelector(".input-wrap").classList.add("show");

    document.querySelector(".input-wrap input").value = "";

    document.querySelector(".searchBtn").removeEventListener("click", () => {
      search._searchList();
    });
    document.querySelector(".searchBtn").addEventListener("click", async () => {
      const queryStored = await search._searchList(query);
      this.queryStored = queryStored;
      console.log(this)
      
    });
    console.log(query)

  }


  // 검색했던 쿼리를 클로저로 반환해서, 비디오 상세에서 뒤로가기 했을 때 다시 해당 검색 결과가 나오도록 해볼까?

}
