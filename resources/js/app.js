import "./bootstrap";
import "../css/app.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import Goback from "./components/Goback.vue";
import Error from "./components/Error.vue";
import Spin from "./components/Spin.vue";
import Alert from "./components/Alert.vue";
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

window.onscroll = function () {
    if (!window.location.href.includes("admin")) toogleClass();
};

function toogleClass() {
    var navbar = document.getElementById("navbar");
    var mobileNavbar = document.getElementById("mobileNavbar");
    var searchNav = document.getElementById("searchNav");
    var btnToTop = document.getElementById("btnToTop");
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        if (!document.getElementById("navAds")) {
            navbar.classList.add("isScroll");
            if (!location.href.includes("account")) {
                searchNav.classList.remove("hidden");
            }
            navbar.classList.remove("noScroll");

            mobileNavbar.classList.add("isScrollMobile");
        } else {
            var navAds = document.getElementById("navAds");
            navAds.classList.remove("hidden");
        }

        btnToTop.classList.remove("hidden");
        btnToTop.classList.add("flex");
    } else {
        if (!document.getElementById("navAds")) {
            mobileNavbar.classList.remove("isScrollMobile");

            navbar.classList.remove("isScroll");
            navbar.classList.add("noScroll");
            if (!location.href.includes("account")) {
                searchNav.classList.add("hidden");
            }
        } else {
            var navAds = document.getElementById("navAds");
            navAds.classList.add("hidden");
        }

        btnToTop.classList.remove("flex");
        btnToTop.classList.add("hidden");
    }
}
