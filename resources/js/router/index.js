import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/front/Home.vue");
const Login = () => import("../views/front/Login.vue");
const SingleAds = () => import("../views/front/SingleAds.vue");
const Account = () => import("../views/front/Account.vue");
const Register = () => import("../views/front/Register.vue");
const Alert = () => import("../views/front/Alert.vue");
const Chat = () => import("../views/front/Chat.vue");
const Favorite = () => import("../views/front/Favorite.vue");
const LoginAdmin = () => import("../views/back/Login.vue");
const Dashboard = () => import("../views/back/Dashboard.vue");
const NotFound = () => import("../views/front/NotFound.vue");

const siteName = "Adnafrica";

const routes = [
    // front office routes
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            title: siteName + " - Accueil",
        },
    },
    {
        path: "/login/:redirect?",
        name: "login",
        props: true,
        component: Login,
        meta: {
            title: siteName + " - Se Connecter",
        },
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        meta: {
            title: siteName + " - S'inscrire",
        },
    },
    {
        path: "/ads",
        name: "ads.single",
        component: SingleAds,
        meta: {
            title: siteName + " - ads",
        },
    },
    {
        path: "/chat",
        name: "chat",
        component: Chat,
        meta: {
            title: siteName,
        },
    },
    {
        path: "/alert",
        name: "alert",
        component: Alert,
        meta: {
            title: siteName,
        },
    },
    {
        path: "/favorite",
        name: "favorite",
        component: Favorite,
        meta: {
            title: siteName,
        },
    },
    {
        path: "/account",
        name: "account",
        component: Account,
        meta: {
            title: siteName + " - ads",
        },
    },
    {
        path: "/:pathMatch(.*)",
        name: "not.found",
        component: NotFound,
        meta: {
            title: siteName + " - Page Introuvable",
        },
    },

    // back office routes
    {
        path: "/admin",
        name: "admin",
        component: LoginAdmin,
        name: "admin",
        children: [
            {
                path: "",
                component: LoginAdmin,
                name: "admin.login",
                meta: {
                    title: siteName + " - Admin Panel",
                },
            },
            {
                path: "ho",
                component: Dashboard,
                name: "admin.dash",
                meta: {
                    title: siteName + " - Dashboard",
                },
            },
            {
                path: "dashboard",
                component: Dashboard,
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

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;
