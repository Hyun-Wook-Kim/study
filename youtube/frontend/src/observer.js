const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((el) => {
    if (el.isIntersecting) {
      console.log(el + "보입니다");
      const more = fetch(
        `https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?key=AIzaSyATiRsLlNU1-g6HIbwJC_yhaOr6xM_tQEs&part=snippet&regidonCode=kr&type=video&q=${query}&maxResults=10&pageToken=${this._nextPageToken}`
      );
      // console.log(more);
    }
  });
});

export default observer;
