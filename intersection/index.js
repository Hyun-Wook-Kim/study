const option = {
  //   root: document.querySelector(".part-scroll"),
  rootMargin: "20px",
  threshold: 0.8,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    // console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add("Showing");
    }
  });
};

const observer = new IntersectionObserver(callback, option);

// let target = document.querySelector("#section3");
// observer.observe(target);

const section = document.querySelectorAll(".part");

section.forEach((el) => {
  observer.observe(el);
});
