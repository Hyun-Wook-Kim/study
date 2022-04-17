import Abstract from "./Abstract.js";

export default class extends Abstract {
  constructor() {
    super();
  }

  async getHtml(id) {
    console.log(id);
    document.querySelector(".youtube-list").innerHTML = "";
    document.querySelector(".youtube-list").innerHTML = `
        <div class="video-detail">
            <iframe src="https://www.youtube.com/embed/${id}"></iframe>
        </div>
        `;
  }
}
