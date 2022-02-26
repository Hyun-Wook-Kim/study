import YoutubeMain from "./components/youtubemain.js";
const app = new YoutubeMain();

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    {
      path: "/",
      view: () => {
        console.log("메인 화면이 보이는 중");
      },
    },
    {
      path: "/search",
      view: () => {
        console.log("검색 화면이 보이는 중");
      },
    },
    {
      path: "/my-video",
      view: () => {
        console.log("내 비디오 화면이 보이는 중");
      },
    },
    {
      path: "/account",
      view: () => {
        console.log("계정 화면이 보이는 중");
      },
    },
  ];

  // TEST

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  console.log(potentialMatches);
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
    document.querySelector(".youtube-list").innerHTML = "";
    app._youtubeList().then(() => {
      console.log("메인화면 쨔잔!");
    });
  }

  if (match.route.path === "/search") {
    document.querySelector(".youtube-list").innerHTML = "";
    document.querySelector(".input-wrap").classList.add("show");
  } else {
    document.querySelector(".input-wrap").classList.remove("show");
  }

  if (match.route.path === "/my-video") {
    document.querySelector(".youtube-list").innerHTML = "";
  }

  if (match.route.path === "/account") {
    document.querySelector(".youtube-list").innerHTML = "";
  }

  match.route.view();
};

document.addEventListener("DOMContentLoaded", () => {
  router();

  document.querySelector(".logo").addEventListener("click", () => {
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

  document.querySelector(".searchBtn").addEventListener("click", () => {
    const query = document.querySelector(".search-query").value;
    app._searchList(query);
  });
});
