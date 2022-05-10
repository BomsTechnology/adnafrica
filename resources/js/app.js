require('./bootstrap');

import { createApp } from 'vue';
import router from './router/index.js';
import App from "./App.vue";

const app = createApp(App);
app.use(router)
.mount("#app");

