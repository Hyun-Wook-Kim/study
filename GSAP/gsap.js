// setTimeout(() => {
//   gsap.to(".orange", {
//     duration: 2,
//     x: 300,
//     rotateX: 720,
//   });
//   gsap.to(".green", {
//     duration: 2,
//     x: 300,
//   });
//   gsap.to(".red", {
//     duration: 1,
//     x: 300,
//     rotation: 360,
//     skewX: 45,
//     skewY: 12,
//   });
// }, 1000);

// gsap.from("#logo", {
//   x: 100,
//   duration: 2,
//   y: 100,
//   opacity: 0,
// });

// gsap.fromTo(
//   "#logo",
//   {
//     width: 0,
//     height: 0,
//     opacity: 0,
//   },
//   {
//     duration: 3,
//     width: 200,
//     height: 200,
//     opacity: 1,
//     ease: "bounce",
//   }
// );

// gsap.set("#box1", {
//   x: 100,
// });

gsap.to(".box", {
  x: 100,
  duration: 2,
  stagger: {
    amount: 1,
  },
  repeat: 2,
  yoyo: true,
  //   ease: "bounce",
  onStart: function (message) {
    console.log(message);
  },
  onStartParams: ["ㅎㅇ"],
  onComplete: function () {
    console.log("끝남");
  },
  onRepeat: function () {
    console.log("반복함");
  },
  //   onUpdate: function () {
  //     console.log("업데이트됨");
  //   },
  onReverseComplete: function () {
    console.log("리버스컴플리트");
  },
});
