import "./bootstrap";
import "../css/app.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import Goback from "./components/utils/Goback.vue";
import Error from "./components/utils/Error.vue";
import Spin from "./components/utils/Spin.vue";
import Alert from "./components/utils/Alert.vue";
import * as ConfirmDialog from "vuejs-confirm-dialog";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";

const pinia = createPinia();
import router from "./router/index.js";
const globalOptions = {
    mode: "auto",
};

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(ConfirmDialog);
app.use(VueTelInput, globalOptions);
app.component("Goback", Goback);
app.component("Alert", Alert);
app.component("Spin", Spin);
app.component("Error", Error);
app.mount("#app");
