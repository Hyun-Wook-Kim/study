import YoutubeMain from "./components/youtubemain.js";
import Main from "./views/Main.js";
import Search from "./views/Search.js";
import Myvideo from "./views/Myvideo.js";
import Account from "./views/Account.js";
import Details from "./views/Details.js";



const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

let shouldRememberQuery = false


const router = async () => {
  const routes = [
    {
      path: "/",
      view: Main,
    },
    {
      path: "/search",
      view: Search,
    },
    {
      path: "/my-video",
      view: Myvideo,
    },
    {
      path: "/account",
      view: Account,
    },
    {
      path: "/details",
      view: Details,
    },
  ];

  // TEST

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  // console.log(potentialMatches);
  let match = potentialMatches.find(
    (potentialMatches) => potentialMatches.isMatch
  );
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

;


  // 라우터에 따른 화면 출력
  if (match.route.path === "/") {

    const main = new match.route.view();
    main.getHtml();
  }

  if (match.route.path === "/search") {
    console.log(shouldRememberQuery)
    const search = new match.route.view();
    search.getHtml(shouldRememberQuery);
    shouldRememberQuery = true;
  } else {
    document.querySelector(".input-wrap").classList.remove("show");
    shouldRememberQuery = false;
  }

  if (match.route.path === "/my-video") {
    const Myvideo = new match.route.view();
    Myvideo.getHtml();
  }

  if (match.route.path === "/account") {
    const Account = new match.route.view();
    Account.getHtml();
  }

  if (match.route.path === "/details") {
    const Details = new match.route.view();
    Details.getHtml();
    Details.iframeInit();
  }

  // match.route.view();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  router();


    const Detail = new Details();

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("video-item")) {
        console.log(e.target.dataset.id)
        detailRouter(e.target.dataset.id);
      } else if (e.target.parentNode.classList.contains("video-item")) {
        console.log(e.target.parentNode.dataset.id)
        detailRouter(e.target.parentNode.dataset.id);
      }
    });

    function detailRouter(id) {
      const detailUrl = `/details?video=${id}`;
      history.pushState(null, null, detailUrl);
      Detail.getHtml(id);
      Detail.iframeInit();

    }


  document.querySelector(".menu-button").addEventListener("click", () => {
    document.querySelector(".nav").classList.add("active");
  });
  document.querySelector(".close-btn").addEventListener("click", () => {
    document.querySelector(".nav").classList.remove("active");
  });

  document.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      document.querySelector(".nav").classList.remove("active");
      event.preventDefault();
      navigateTo(event.target.href);
    }
  });
});
