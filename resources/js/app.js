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
        navbar.classList.remove("noScroll");
        searchNav.classList.remove("hidden");
        btnToTop.classList.remove("hidden");
        mobileNavbar.classList.add("isScrollMobile");
        btnToTop.classList.add("flex");
        navbar.classList.add("isScroll");
    } else {
        mobileNavbar.classList.remove("isScrollMobile");
        navbar.classList.remove("isScroll");
        searchNav.classList.add("hidden");
        navbar.classList.add("noScroll");
        btnToTop.classList.remove("flex");
        btnToTop.classList.add("hidden");
    }
}
