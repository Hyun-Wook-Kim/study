import YoutubeMain from "./components/youtubemain.js";
import Popup from "./makePopup.js";
const activateApp = new Popup();
const app = new YoutubeMain();
app
  ._youtubeList()
  .then(console.log("ㅎㅇㅎㅇ"))
  .then(() => {
    console.log(document.querySelectorAll(".video-item"));
    document.querySelectorAll(".video-item").forEach((el) => {
      el.addEventListener("click", async () => {
        document.querySelector(".popup-wrapper").classList.add("active");
        document.querySelector(
          ".video-wrap video"
        ).src = `https://youtu.be/pbMnoF5fLfk`;
      });
    });
  });

document.querySelector(".searchBtn").addEventListener("click", () => {
  const query = document.querySelector(".search-query").value;
  app._searchList(query);
});
