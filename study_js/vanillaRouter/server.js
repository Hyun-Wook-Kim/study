const express = require("express"); // require 은 node.js 의 import 라고 생각하면 될듯?
// 기본적으로 node_modules 폴더 안에서 express를 찾아 활용한다.

const path = require("path"); // path 찾아서 써먹을 거야. 이건 폴더와 파일의 경로를 지정해주는 모듈임.

const app = express(); // app 변수에다가 express의 함수 반환값을 저장함. REST end Point를 생성할 거임.

// ?? REST가 뭐임 : 고객이 요청하면 HTTP 메소드 이용해서 필요한 정보를 받아오는 거임
// ?? end point는 또 뭐임 : URL 뒤의 /posts/1  처럼 요청의 도착지를 구분해 주는 거임.

//문제가 하나 있음. 아래대로 냅다 index.html로 보내면, JS 파일 못 찾는다고 찡찡댐. express에서 정적 자산 (JS, IMG, CSS 등등..)을 이용하려면 app.use가 필요하다
app.use(
  "/static", // 만약 파일 경로에 /static/가 들어 있으면
  express.static(path.resolve(__dirname, "src", "static")) // src / static 경로에 있는 걸 정적 자산으로 쓸 거임.
);
//express.static(디렉토리)  << 해당 디렉토리 안에 있는 정적 파일을 이용할 수 있다.

// express 서버에 get 요청을 보낼 거임.
// 근데 모든 URL (/*) 요청에 대한 응답 (res)는 () 안에 들어가는 파일로 연결이 된다.

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

//path.resolve는 주어진 경로를 합쳐 텍스트로 반환. 위 예시는 src/index.html

// 서버를 열어줄 건데, 앞에건 모르겠고, 지정된 값이 따로 없으면 port 5060을 쓴다.
app.listen(process.env.PORT || 5050, () => console.log("server is running"));
