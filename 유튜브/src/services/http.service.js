// export default class HttpService {
//   _baseURL = "";
//   _baseQueryParams = {};

//   constructor() {}

//   create(option = {}) {
//     if (option.baseURL) {
//       this._baseURL = option.baseURL;
//     }
//     if (option.params) {
//       this._baseQueryParams = { ...option.params };
//     }
//   }

//   get(url = "", params = {}) {
//     const queryParams = {
//       ...this._baseQueryParams,
//       ...params,
//     };
//     url = `${
//       this._baseURL && this._baseURL + "/"
//     }${url}?${this._queryParamsToString(queryParams)}`;
//     return fetch(url, {
//       method: "GET",
//       header: {
//         "Content-type": "application/json",
//       },
//     }).then((res) => res.json());
//   }

//   _queryParamsToString(params) {
//     if (params === undefined) {
//       return "";
//     }
//     let result = "";
//     Object.keys(params).forEach((key, index) => {
//       if (params[key] === undefined) {
//         return;
//       }
//       if (index > 0) {
//         result += "&";
//       }
//       result += `${key}=${params[key]}`;
//     });
//     return result;
//   }
// }

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
