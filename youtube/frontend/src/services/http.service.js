export default class httpService {
  constructor(url = "", key, query = {}) {
    this.url = url;
    this.query = query;
    this.key = `key=${key}`;
  }

  get() {
    const requestTo =
      this.url + "?" + this.key + this.queryToString(this.query);
    return fetch(requestTo)
      .then((res) => res.json())
      .catch((err) => console.log(new Error(err)));
  }

  queryToString(query) {
    let queryString = "";
    Object.keys(query).forEach((key) => {
      queryString += `&${key}=${query[key]}`;
    });
    return queryString;
  }
}
