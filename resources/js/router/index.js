import { createRouter, createWebHistory } from "vue-router";
import { useAuthenticateStore } from "@/stores/authenticate";

const siteName = "Adnafrica";

const routes = [
    // front office routes
    {
        path: "/",
        name: "home",
        component: () => import("@/views/front/Home.vue"),
        meta: {
            title: siteName + " - Accueil",
        },
    },
    {
        path: "/login",
        name: "login",
        props: true,
        component: () => import("@/views/front/Login.vue"),
        meta: {
            title: siteName + " - Se Connecter",
        },
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/front/Register.vue"),
        meta: {
            title: siteName + " - S'inscrire",
        },
    },
    {
        path: "/ads",
        name: "ads.single",
        component: () => import("../views/front/SingleAds.vue"),
        meta: {
            title: siteName + " - ads",
        },
    },
    {
        path: "/chat",
        name: "chat",
        component: () => import("../views/front/Chat.vue"),
        meta: {
            title: siteName,
            requiresAuth: true,
        },
    },

    {
        path: "/favorite",
        name: "favorite",
        component: () => import("../views/front/Favorite.vue"),
        meta: {
            title: siteName,
            requiresAuth: true,
        },
    },
    {
        path: "/account",
        name: "account",
        component: () => import("../views/front/Account.vue"),
        meta: {
            title: siteName + " - ads",
            requiresAuth: true,
        },
    },
    {
        path: "/:pathMatch(.*)",
        name: "not.found",
        component: () => import("../views/front/NotFound.vue"),
        meta: {
            title: siteName + " - Page Introuvable",
        },
    },

    // back office routes
    {
        path: "/admin",
        name: "admin",
        component: () => import("../views/back/Login.vue"),
        name: "admin",
        children: [
            {
                path: "",
                component: () => import("../views/back/Login.vue"),
                name: "admin.login",
                meta: {
                    title: siteName + " - Admin Panel",
                },
            },
            {
                path: "ho",
                component: () => import("../views/back/Dashboard.vue"),
                name: "admin.dash",
                meta: {
                    title: siteName + " - Dashboard",
                },
            },
            {
                path: "dashboard",
                component: () => import("../views/back/Dashboard.vue"),
                name: "admin.o",
                meta: {
                    title: siteName + " - Dashboard",
                },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    const authenticateStore = useAuthenticateStore();
    if (to.meta.requiresAuth && !authenticateStore.token) {
        next({ name: "login" });
    } else {
        next();
    }
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;
