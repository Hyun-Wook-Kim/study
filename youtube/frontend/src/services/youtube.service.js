import httpService from "./http.service.js";
import observer from "../observer.js";
export default class YoutubeService {

  constructor() {
  }
  async mostPopular(nextPageToken) {
    nextPageToken = nextPageToken ? nextPageToken : '';
    console.log(nextPageToken)
    this._request = new httpService(
      "https://www.googleapis.com/youtube/v3/videos",
      "AIzaSyATiRsLlNU1-g6HIbwJC_yhaOr6xM_tQEs",
      {
        part: "snippet",
        regionCode: "kr",
        chart: "mostPopular",
        maxResults: 10,
        pageToken: nextPageToken
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
