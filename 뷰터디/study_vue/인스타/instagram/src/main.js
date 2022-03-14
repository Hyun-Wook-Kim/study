import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import store from "./store.js";

let emitter = mitt();
let app = createApp(App);
// 자주 사용하는 라이브러리 가튼 거 여기다가 쑤셔박아도 됨.
app.config.globalProperties.emitter = emitter;

app.use(store).mount("#app");
