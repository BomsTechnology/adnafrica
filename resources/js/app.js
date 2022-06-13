require("./bootstrap");

import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";
import BackOffice from "./BackOffice.vue";
import Goback from "./components/Goback.vue";
import Error from "./components/Error.vue";
import Alert from "./components/Alert.vue";

if (!window.location.href.includes("admin")) {
    const app = createApp(App);
    app.component("Goback", Goback);
    app.component("Alert", Alert);
    app.component("Error", Error).use(router).mount("#app");
} else {
    const app2 = createApp(BackOffice);
    app2.use(router).mount("#backoffice");
}

window.onscroll = function () {
    toogleClass();
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
