const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
  jump() {
    let;
  },
};

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

dino.draw();
const cactus = new Cactus();
cactus.draw();

var timer = 0;
let cactusArray = [];
let jumping = false;
let jumptimer = 0;
let jumpallow = true;

function move() {
  const animation = requestAnimationFrame(move);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 120 === 0) {
    let cactus = new Cactus();
    cactusArray.push(cactus);
    cactus.draw();
  }
  cactusArray.forEach((el, index, array) => {
    // x좌표가 0 미만이면 제거

    el.x = el.x - 8;
    if (el.x < -el.width) {
      array.splice(index, 1);
    }
    dead(dino, el);
    el.draw();
  });

  dino.draw();
  if (jumping) {
    dino.y = dino.y - 4;
    jumptimer++;
    if (jumptimer > 35) {
      jumping = false;
      jumptimer = 0;
    }
  }
  if (!jumping && dino.y < 200) {
    dino.y = dino.y + 4;
  }

  // 충돌 확인 콜리전 체크
  function dead(dino, cactus) {
    let xMeet = cactus.x - (dino.x + dino.width);
    let YMeet = cactus.y - (dino.y + dino.height);
    if (xMeet < 0 && YMeet < 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animation);
      alert("game over");
    }
  }
}

move();

document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && jumpallow) {
    jumping = true;
    jumpallow = false;
    setTimeout(() => {
      jumpallow = true;
    }, 1400);
  }
});

document.querySelector("button").addEventListener("click", () => {
  cactusArray = [];
  move();
});
