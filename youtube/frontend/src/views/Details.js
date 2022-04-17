import Abstract from "./Abstract.js";

export default class extends Abstract {
  constructor() {
    super();
  }

  async getHtml(id) {
    document.querySelector(".youtube-list").innerHTML = "";
    console.log(document.querySelector(".youtube-list").innerHTML)
    document.querySelector(".youtube-list").innerHTML = `
        <div class="video-detail">
            <iframe src=""></iframe>
        </div>
        `;
  }

  iframeInit(){
    const urlParam = new URLSearchParams(location.search);
    const videoId = urlParam.get('video')
    document.querySelector('.video-detail iframe').src = `https://www.youtube.com/embed/${videoId}`

  }

}
