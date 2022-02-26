export default class Popup {
  constructor() {}

  async bring(id) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyATiRsLlNU1-g6HIbwJC_yhaOr6xM_tQEs&id=${id}`
    );
    console.log(response);
    return response;
  }
}
