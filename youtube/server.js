const express = require("express");
const path = require("path");

const app = express();
app.use("/src", express.static(path.resolve(__dirname, "frontend", "src")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(process.env.PORT || 5500, () => {
  console.log("server running....");
});

// express 는 서버 엔드 포인트를 설정할 수 있다. (API 등의 최종 주소! 일종의 라우팅이랑 같은 거임.)
