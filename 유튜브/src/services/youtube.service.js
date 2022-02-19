// import HttpService from "./http.service.js";

// export class YoutubeService {
//   _mostPopularPageToken;
//   videoList = [];

//   constructor(key) {
//     this._request = new HttpService();
//     this._request.create({
//       baseURL: "https://www.googleapis.com/youtube/v3",
//       params: { key },
//     });
//   }

//   async mostPopular() {
//     const response = await this._request.get("videos", {
//       part: "snippet",
//       maxResult: 25,
//       regionCode: "kr",
//       chart: "MostPopular",
//       pageToken: this._mostPopularPageToken,
//     });
//     console.log(response);
//     this._mostPopularPageToken = response.nextPageToken;
//     const result = response?.items ?? [];
//     this.videoList = [this.videoList, ...result];
//     console.log(this.videoList);
//     return result;
//   }
// }

import httpService from "./http.service.js";
import observer from "../observer.js";
export default class YoutubeService {
  _videoList = [];
  _nextPageToken = "";

  constructor() {}
  async mostPopular() {
    this._request = new httpService(
      "https://www.googleapis.com/youtube/v3/videos",
      "AIzaSyATiRsLlNU1-g6HIbwJC_yhaOr6xM_tQEs",
      {
        part: "snippet",
        regionCode: "kr",
        chart: "mostPopular",
        maxResults: 10,
        // pageToken: "nextPageToken",
      }
    );
    // try catch로 async 예외 처리 및 에러 처리.
    try {
      const response = await this._request.get();
      const result = response ? response.items : [];
      this._videoList = [...result];
    } catch (err) {
      console.log(err);
    }
  }

  async search(query) {
    console.log(this._nextPageToken);
    this._request = new httpService(
      "https://www.googleapis.com/youtube/v3/search",
      "AIzaSyATiRsLlNU1-g6HIbwJC_yhaOr6xM_tQEs",
      {
        part: "snippet",
        regionCode: "kr",
        type: "video",
        q: `${query}`,
        maxResults: 10,
      }
    );

    const response = await this._request.get();
    const result = response ? response.items : [];
    this._nextPageToken = response.nextPageToken;
    this._videoList = [...result];
    console.log(response);
    console.log(this._nextPageToken);
  }
}
