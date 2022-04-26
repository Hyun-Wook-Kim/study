import YoutubeService from "../services/youtube.service.js";

export default class YoutubeMain {
  constructor() {
    this._youtube = new YoutubeService();
    this._observer;
  }
  async _youtubeList() {
   await this._youtube.mostPopular();
    this._youtube._videoList.forEach((video) => {
      this._drawYoutubeList(video);

      this._observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            this._observer.unobserve(
              document.querySelectorAll(".video-item")[
              document.querySelectorAll(".video-item").length - 1
              ]
            );
            this._youtube.mostPopular('CAoQAA');
            this._youtube._videoList.forEach((video) => {
              this._drawYoutubeList(video)
            })

            this._observer.observe(
              document.querySelectorAll(".video-item")[
              document.querySelectorAll(".video-item").length - 1
              ]
            );
          }
        });
      });
      this._observer.observe(
        document.querySelectorAll(".video-item")[
        document.querySelectorAll(".video-item").length - 1
        ]
      );
    });
    this._filter();

  }
  async _searchList(query) {
    query = document.querySelector(".search-query").value;
    document.querySelector(".youtube-list").innerHTML = "";
    await this._youtube.search(query);
    this._youtube._videoList.forEach((video) => {
      this._drawYoutubeList(video);
    });
    return query
  }

  _memoQuery(query) {
    query = document.querySelector(".search-query").value;
    function memoQuery() {
      console.log(query)
    }
    return memoQuery;
  }

  _drawYoutubeList(video) {
    const { snippet } = video;
    const videoId = video.id.videoId ? video.id.videoId : video.id;
    const elem = `<div class="video-item" data-id="${videoId}" data-category="${snippet.categoryId}" >
    <img src=${snippet.thumbnails.high.url}>
    <h3 class="title">${snippet.title}</h3>
    <p class="channelTitle">${snippet.channelTitle}</p>
    <p class="desc">${snippet.description}</p>
                    </div>`;
    document.querySelector(".youtube-list").innerHTML += elem;
  }

  _filter(){
    if(!document.querySelector('.filter ul')) return;

    if(this._observer){
      console.log('옵저버 해제')
      this._observer.unobserve(
        document.querySelectorAll(".video-item")[
        document.querySelectorAll(".video-item").length - 1
        ]
      );
    }


    document.querySelector('.filter ul').removeEventListener('click',(e)=>{
      if(e.target.matches('.category-btn')){
        const category = e.target.dataset.cate;

        let allItem = document.querySelectorAll('.video-item');

        if(category === 'all') {
            allItem.forEach((el, index)=>{
              el.classList.remove('hide')
            })          
        }
        else{
          const group = category.replace('group','');
          const to =  Number(group) * 10;
          const from = to - 9;
          console.log(from, to)
          allItem.forEach((el, index)=>{
            if (el.dataset.category >= from && el.dataset.category <= to){
              el.classList.remove('hide')
            } else{
              el.classList.add('hide')
            }
          })   
        }

      }
    })

    document.querySelector('.filter ul').addEventListener('click',(e)=>{
      if(e.target.matches('.category-btn')){
        const category = e.target.dataset.cate;

        let allItem = document.querySelectorAll('.video-item');

        if(category === 'all') {
            allItem.forEach((el, index)=>{
              el.classList.remove('hide')
            })          
        }
        else{
          const group = category.replace('group','');
          const to =  Number(group) * 10;
          const from = to - 9;
          console.log(from, to)
          allItem.forEach((el, index)=>{
            if (el.dataset.category >= from && el.dataset.category <= to){
              el.classList.remove('hide')
            } else{
              el.classList.add('hide')
            }
          })   
        }

      }
    })
  }
}
