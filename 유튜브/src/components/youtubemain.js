import YoutubeService from "../services/youtube.service.js";
// import observer from "../observer.js";

export default class YoutubeMain {
  constructor() {
    this._youtube = new YoutubeService();
    // this._youtubeList();
  }
  async _youtubeList() {
    await this._youtube.mostPopular();
    this._youtube._videoList.forEach((video) => {
      this._drawYoutubeList(video);
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            console.log(this._youtube._nextPageToken);
            observer.unobserve(
              document.querySelectorAll(".video-item")[
                document.querySelectorAll(".video-item").length - 1
              ]
            );
            fetch(
              `https://www.googleapis.com/youtube/v3/search?key=AIzaSyATiRsLlNU1-g6HIbwJC_yhaOr6xM_tQEs&part=snippet&regidonCode=kr&type=video&maxResults=10&pageToken=${this._youtube._nextPageToken}`
            )
              .then((response) => response.json())
              .then((data) => {
                this._youtube._nextPageToken = data.nextPageToken;
                data.items.forEach((el) => {
                  this._drawYoutubeList(el);
                });
                observer.observe(
                  document.querySelectorAll(".video-item")[
                    document.querySelectorAll(".video-item").length - 1
                  ]
                );
              });
          }
        });
      });
      observer.observe(
        document.querySelectorAll(".video-item")[
          document.querySelectorAll(".video-item").length - 1
        ]
      );
    });
    document.querySelectorAll(".video-item").forEach((el) => {
      el.addEventListener("click", (event) => {
        const id = event.currentTarget.dataset;
        this.popupVideo(id);
      });
    });
  }
  async _searchList(query) {
    document.querySelector(".youtube-list").innerHTML = "";
    await this._youtube.search(query);
    this._youtube._videoList.forEach((video) => {
      this._drawYoutubeList(video);
    });
  }
  _drawYoutubeList(video) {
    console.log(video);
    const { snippet } = video;

    const elem = `<div class="video-item" data-id=${video.id}>
    <img src=${snippet.thumbnails.high.url}>
    <h3 class="title">${snippet.title}</h3>
    <p class="channelTitle">${snippet.channelTitle}</p>
    <p class="desc">${snippet.description}</p>
                    </div>`;
    document.querySelector(".youtube-list").innerHTML += elem;
  }

  async popupVideo(id) {
    console.log(id);
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyATiRsLlNU1-g6HIbwJC_yhaOr6xM_tQEs&part=snippet&id=${id}`
    );
    console.log(response);
  }

  _infiniteScroll() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          console.log(el + "추가 로드");
          this._youtubeList();
        }
      });
    });
    observer.observe(
      document.querySelectorAll(".video-item")[
        document.querySelectorAll(".video-item").length - 1
      ]
    );
  }

  async _videoDetail(id) {
    const selectedVideo = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyATiRsLlNU1-g6HIbwJC_yhaOr6xM_tQEs&part=snippet&id=${id}`
    );
    console.log(selectedVideo);
  }
}
