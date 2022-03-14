import YoutubeMain from "./components/youtubemain.js";
import Main from "./views/Main.js";
import Search from "./views/Search.js";
import Myvideo from "./views/Myvideo.js";
import Account from "./views/Account.js";

// const app = new YoutubeMain();

//history.pushState(state, title, url)

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

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

  // 라우터에 따른 화면 출력
  if (match.route.path === "/") {
    const main = new match.route.view();
    main.getHtml();
  }

  if (match.route.path === "/search") {
    const search = new match.route.view();
    search.getHtml();
  } else {
    document.querySelector(".input-wrap").classList.remove("show");
  }

  if (match.route.path === "/my-video") {
    const Myvideo = new match.route.view();
    Myvideo.getHtml();
  }

  if (match.route.path === "/account") {
    const Account = new match.route.view();
    Account.getHtml();
  }

  // match.route.view();
};

// window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  router();

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
