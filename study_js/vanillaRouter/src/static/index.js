import DashBoard from "./views/DashBoard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

// a태그를 누르면, 순간적으로 페이지가 리로딩이 된다.
// 리로딩 하지 않고 url 상태만 바꾸려면?!
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  // 각 path에 따른 경로 값과, 경로가 일치할 때 실행할 함수.
  const routes = [
    {
      path: "/",
      view: DashBoard, // 각 view 별 JS 파일의 클래스를  import해, routes.view에 넣어준다.
    },
    {
      path: "/posts",
      view: Posts,
    },
    {
      path: "/settings",
      view: Settings,
    },
  ];

  // 내가 임의로 정한 path랑, location.pathname 이랑 일치하는 지 볼 거임.
  const potentialMatch = routes.map((route) => {
    return {
      route: route,
      isMatch: route.path === location.pathname,
    };
  });
  // routes 를 순회하면서 route 와 isMatch를 키값으로 가지는 새로운 객체 생성.
  console.log(potentialMatch);

  // 그 객체에서 객체.isMatch가 true인 애만 찾아 냄.
  let match = potentialMatch.find(
    (potentialMatch) => potentialMatch.isMatch == true
  );

  // 일치하는 거 없으면 기본값. (여기서 보통 404 Not Found를 해주기도 함.)
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  // path랑 일치하는 routes 찾아서, 해당 js가 가지고 있는 class를 생성함.
  const view = new match.route.view();
  document.querySelector("#app").innerHTML = await view.getHtml(); // 그리고 해당 클래스의 getHtml()을 비동기로 실행! (서버에서 가져올수도 있으니까)
};

document.addEventListener("DOMContentLoaded", () => {
  router();

  document.addEventListener("click", (e) => {
    // matches 함수는 element.matches(selector)의 구조다.
    // element.matches('.class')  element.matches('#id')  element.matches('[attribute]') 요런식으로 사용할 수 있는 듯.
    // 왜 document에 이벤트를 주냐면.. 동적으로 생성된 요소는 초기 addEventListener에 반응 X. (a태그에만 이벤트를 주면 동적 요소는 반응 없음)

    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      console.log(e.target);
      const url = e.target.href;
      navigateTo(url);
    }
  });

  window.addEventListener("popstate", () => {
    console.log("뒤로가기 등 히스토리를 탐색하면 이 이벤트가 일어납니다!");
    router();
  });
});
