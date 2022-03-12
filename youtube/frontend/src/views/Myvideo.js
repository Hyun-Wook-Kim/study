import Abstract from "./Abstract.js";
import YoutubeMain from "../components/youtubemain.js";

const myVideo = new YoutubeMain();

export default class extends Abstract {
  constructor() {
    super();
  }

  async getHtml() {
    document.querySelector(".youtube-list").innerHTML = "";
    const channel = await fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyATiRsLlNU1-g6HIbwJC_yhaOr6xM_tQEs&part=snippet&channelId=UCDTBMRVGqF6Y6gv4Ac0Yx2w&type=video"
      // , {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }
    );
    // const tmp = channel.json();
    const tmp = await channel.json();
    const myVidieoList = tmp.items;
    document.querySelector(".youtube-list").innerHTML = ``;

    const titleBox = document.createElement("div");
    const titleTag = document.createElement("h2");
    titleTag.innerHTML = `<p> 내가  업로드 한 동영상 목록 </p>`;
    titleBox.append(titleTag);
    titleBox.classList.add("my-video");

    myVidieoList.forEach((el, index) => {
      myVideo._drawYoutubeList(el);
    });

    document.querySelector(".youtube-list").prepend(titleBox);
  }
}
