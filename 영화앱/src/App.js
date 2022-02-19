import ScrollView from "./component/ScrollView.js";
import { api } from "./api/movieAPi.js";

export default class App {
  constructor($target) {
    let page = 1;
    const scrollView = new ScrollView({
      $target,
      fetchData: async () => {
        const response = await api.getMovies(page);
        page += 1;
        if (!response.isError) {
          const newData = [...scrollView.data, ...response.data];
          scrollView.setData(newData);
          //   hello.setData([...hello.data, ...response.data]); // 이거 앞에건 왜 필요한 거임..?
        } else {
        }
      },
    });
  }
}
