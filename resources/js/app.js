require('./bootstrap');

import { createApp } from 'vue';
import router from './router/index.js';
import App from "./App.vue";
import BackOffice from "./BackOffice.vue";

const app = createApp(App);
app.use(router)
.mount("#app");

const app2 = createApp(BackOffice);
app2.use(router).mount("#backoffice");

