let page = 1;

// fetch.then().catch()  << 이렇게 하면 값이 리턴이 안 됨.

const request = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data.data);
      return data;
    } else {
      const error = await response.json();
      console.log(error);
    }
  } catch (e) {
    throw {
      message: e.message,
      status: e.status,
    };
  }
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((el) => {
    if (el.isIntersecting) {
      page++;
      getData(page);
      console.log(el.target);
      observer.unobserve(el.target);
    }
  });
});

//post, put, delete, get, patch (수정?)

{
  "
  "
}
const getData = function (page) {
  request(`https://yts.mx/api/v2/list_movies.json?limit=15&page=${page}`) 
    .then((response) => {
      const movie = response.data.movies;
      movie.forEach((el, index) => {
        const item = document.createElement("item");
        item.classList.add("item");
        const title = document.createElement("h2");
        title.innerHTML = el.title;
        item.append(title);
        const img = document.createElement("img");
        img.src = el.medium_cover_image;
        item.append(img);
        document.querySelector(".list").append(item);
      });
    })
    .then(() => {
      const item = document.querySelectorAll(".item");
      console.log(item[item.length - 1]);
      observer.observe(item[item.length - 1]);
    });
};

getData(page);
