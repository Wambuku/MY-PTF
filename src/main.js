import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

/**styling */
import "./style.css";
import "./assets/tailwind.css"; //tailwind
// import "font-awesome/css/all.min.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
