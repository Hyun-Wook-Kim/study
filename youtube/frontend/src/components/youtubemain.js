import YoutubeService from "../services/youtube.service.js";
// import observer from "../observer.js";
import Details from "../views/Details.js";

export default class YoutubeMain {
  constructor() {
    this._youtube = new YoutubeService();
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
                // document.querySelector(".youtube-list").innerHTML = "";
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

  }
  async _searchList(query) {
    query = document.querySelector(".search-query").value;
    document.querySelector(".youtube-list").innerHTML = "";
    await this._youtube.search(query);
    this._youtube._videoList.forEach((video) => {
      this._drawYoutubeList(video);
    });
  }

  _memoQuery(query){
    query = document.querySelector(".search-query").value;
    function memoQuery(){
      console.log(query)
    }
    return memoQuery;
  }

  _drawYoutubeList(video) {
    const { snippet } = video;
    const videoId = video.id.videoId ? video.id.videoId : video.id;
    const elem = `<div class="video-item" data-id="${videoId}"  >
    <img src=${snippet.thumbnails.high.url}>
    <h3 class="title">${snippet.title}</h3>
    <p class="channelTitle">${snippet.channelTitle}</p>
    <p class="desc">${snippet.description}</p>
                    </div>`;
    document.querySelector(".youtube-list").innerHTML += elem;
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


}
