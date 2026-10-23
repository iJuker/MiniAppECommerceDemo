import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueBridgeGateway from "vue-bridge-gateway";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia()

app.use(VueBridgeGateway, { debug: true, delay: 200 });
app.use(pinia);

app.use(Vue3Toastify, {
  autoClose: 1000,
  theme: "colored",
} as ToastContainerOptions);

app.use(router);
app.mount("#app");
