import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios";
import axios from "../lib/axios.js";

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);

app.mount("#app");
