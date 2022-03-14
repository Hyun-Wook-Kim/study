export default class Hello {
  constructor({ $target, fetchData }) {
    this.section = document.createElement("section");
    this.section.classList.add("container");
    this.data = [];

    $target.appendChild(this.section);
    // this.render();
    fetchData();
  }

  setData(data, ...rest) {
    this.data = data;
    this.render();
  }

  render() {
    this.section.innerHTML = "";
    this.data.forEach((val, index) => {
      const block = document.createElement("div");
      const title = document.createElement("h1");
      title.innerHTML = val.title;
      block.appendChild(title);
      this.section.appendChild(block);
    });
  }
}
