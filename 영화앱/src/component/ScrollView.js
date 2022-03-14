import infinityScroll from "../util/InfinityScroll.js";

export default class ScrollView {
  constructor({ $target, data, fetchData }) {
    this.section = document.createElement("section");
    this.section.classList.add("container");
    this.data = [];
    fetchData();
    this.intersection = infinityScroll(fetchData);
    $target.appendChild(this.section);
  }

  setData(data, ...rest) {
    this.data = data;
    this.render();
  }

  render() {
    this.section.innerHTML = "";
    this.data.forEach((val, index) => {
      const block = document.createElement("div");
      block.classList.add("block");
      const title = document.createElement("h1");
      title.innerHTML = val.title;
      const image = document.createElement("img");
      image.src = val.medium_cover_image;
      block.appendChild(title);
      block.appendChild(image);
      this.section.appendChild(block);
    });
    this.setIntersection();
  }
  setIntersection() {
    const blocks = document.querySelectorAll(".block");
    this.intersection.observe(blocks[blocks.length - 1]);
  }
}
