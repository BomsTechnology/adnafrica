require("./bootstrap");

import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";
import BackOffice from "./BackOffice.vue";

if (!window.location.href.includes("admin")) {
    const app = createApp(App);
    app.use(router).mount("#app");
} else {
    const app2 = createApp(BackOffice);
    app2.use(router).mount("#backoffice");
}
