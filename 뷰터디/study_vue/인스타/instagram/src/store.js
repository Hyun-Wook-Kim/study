import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      name2: "kim",
      age: 20,
      likes: 30,
      more: {},
    };
  },
  mutations: {
    이름변경(state, data) {
      state.name = data;
    },
    나이변경(state, data) {
      state.age += data;
    },
    like(state) {
      state.likes++;
    },
    dislike(state) {
      state.likes--;
    },
    setMore(state, data) {
      state.more = data;
    },
  },
  // AJAX 요청하는 거. 시간이 오래 걸리는 함수는 여기다가 넣는다. (순차적 실행을 위해)
  actions: {
    // context 는 state라고 생각하면 편함.
    getData(context) {
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then((result) => {
          console.log(result.data);
          context.commit("setMore", result.data);
        });
    },
  },
});

export default store;
