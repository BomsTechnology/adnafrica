import { createRouter, createWebHistory } from "vue-router";
import { useAuthenticateStore } from "@/stores/authenticate";

const Home = () => import("@/views/front/Home.vue");
const Login = () => import("@/views/front/Login.vue");
const Register = () => import("@/views/front/Register.vue");
const SingleAds = () => import("@/views/front/SingleAds.vue");
const Chat = () => import("@/views/front/Chat.vue");
const Favorite = () => import("@/views/front/Favorite.vue");
const Account = () => import("@/views/front/Account.vue");
const DashHome = () => import("@/views/back/DashHome.vue");
const NavBar = () => import("@/components/Navbar.vue");
const Footer = () => import("@/components/Footer.vue");
const Sidebar = () => import("@/components/Sidebar.vue");

const siteName = "Adnafrica";

const routes = [
    // front office routes
    {
        path: "/",
        name: "home",
        components: {
            default: Home,
            navbar: NavBar,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Accueil",
        },
    },
    {
        path: "/login",
        name: "login",
        components: {
            default: Login,
            navbar: NavBar,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Se Connecter",
        },
    },
    {
        path: "/register",
        name: "register",
        components: {
            default: Register,
            navbar: NavBar,
            footer: Footer,
        },
        meta: {
            title: siteName + " - S'inscrire",
        },
    },
    {
        path: "/ads",
        name: "ads.single",
        components: {
            default: SingleAds,
            navbar: NavBar,
            footer: Footer,
        },
        meta: {
            title: siteName + " - ads",
        },
    },
    {
        path: "/chat",
        name: "chat",
        components: {
            default: Chat,
            navbar: NavBar,
            footer: Footer,
        },
        meta: {
            title: siteName,
            requiresAuth: true,
        },
    },

    {
        path: "/favorite",
        name: "favorite",
        components: {
            default: Favorite,
            navbar: NavBar,
            footer: Footer,
        },
        meta: {
            title: siteName,
            requiresAuth: true,
        },
    },
    {
        path: "/account",
        name: "account",
        components: {
            default: Account,
            navbar: NavBar,
            footer: Footer,
        },
        meta: {
            title: siteName + " - ads",
            requiresAuth: true,
        },
    },
    {
        path: "/:pathMatch(.*)",
        name: "not.found",
        component: () => import("@/views/front/NotFound.vue"),
        meta: {
            title: siteName + " - Page Introuvable",
        },
    },

    // back office routes
    {
        path: "/admin/login",
        name: "login.admin",
        component: () => import("@/views/back/Login.vue"),
        meta: {
            title: siteName + " - Login Admin",
        },
    },
    {
        path: "/admin",
        name: "admin",
        components: {
            default: DashHome,
            sidebar: Sidebar,
        },
        meta: {
            requiresAuth: true,
            isAdmin: true,
        },
        children: [
            {
                path: "",
                component: () => import("@/views/back/Dashboard.vue"),
                name: "admin.dashboard",
                meta: {
                    title: siteName + " - Admin Panel",
                },
            },
            {
                path: "ads",
                component: () => import("@/views/back/ads/AdsIndex.vue"),
                name: "admin.ads.index",
                meta: {
                    title: siteName + " - Ads",
                },
            },
            {
                path: "ads/create",
                component: () => import("@/views/back/ads/AdsCreate.vue"),
                name: "admin.ads.create",
                meta: {
                    title: siteName + " - Ads Create",
                },
            },
            {
                path: "ads/:id/edit",
                props: true,
                component: () => import("@/views/back/ads/AdsEdit.vue"),
                name: "admin.ads.edit",
                meta: {
                    title: siteName + " - Ads Edit",
                },
            },
            {
                path: "user",
                component: () => import("@/views/back/user/UserIndex.vue"),
                name: "admin.user.index",
                meta: {
                    title: siteName + " - User",
                },
            },
            {
                path: "user/create",
                component: () => import("@/views/back/user/UserCreate.vue"),
                name: "admin.user.create",
                meta: {
                    title: siteName + " - User Create",
                },
            },
            {
                path: "user/:id/edit",
                props: true,
                component: () => import("@/views/back/user/UserEdit.vue"),
                name: "admin.user.edit",
                meta: {
                    title: siteName + " - User Edit",
                },
            },
            {
                path: "faq",
                component: () => import("@/views/back/faq/FaqIndex.vue"),
                name: "admin.faq.index",
                meta: {
                    title: siteName + " - Faq",
                },
            },
            {
                path: "faq/create",
                component: () => import("@/views/back/faq/FaqCreate.vue"),
                name: "admin.faq.create",
                meta: {
                    title: siteName + " - Faq Create",
                },
            },
            {
                path: "faq/:id/edit",
                props: true,
                component: () => import("@/views/back/faq/FaqEdit.vue"),
                name: "admin.faq.edit",
                meta: {
                    title: siteName + " - Faq Edit",
                },
            },
            {
                path: "category/:id?",
                props: true,
                component: () => import("@/views/back/Category.vue"),
                name: "admin.category",
                meta: {
                    title: siteName + " - Category",
                },
            },
            {
                path: "city/:id?",
                props: true,
                component: () => import("@/views/back/City.vue"),
                name: "admin.city",
                meta: {
                    title: siteName + " - City",
                },
            },
            {
                path: "country/:id?",
                props: true,
                component: () => import("@/views/back/Country.vue"),
                name: "admin.country",
                meta: {
                    title: siteName + " - Country",
                },
            },
            {
                path: "currency/:id?",
                props: true,
                component: () => import("@/views/back/Currency.vue"),
                name: "admin.currency",
                meta: {
                    title: siteName + " - Currency",
                },
            },
            {
                path: "messages/:id?",
                props: true,
                component: () => import("@/views/back/Message.vue"),
                name: "admin.message",
                meta: {
                    title: siteName + " - Message",
                },
            },
            {
                path: "feedback",
                component: () => import("@/views/back/FeedBack.vue"),
                name: "admin.feedback",
                meta: {
                    title: siteName + " - Feedback",
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

    if (
        to.meta.isAdmin &&
        (!authenticateStore.user || authenticateStore.user.type != "admin") &&
        to.meta.requiresAuth &&
        !authenticateStore.token
    ) {
        next({ name: "login.admin" });
    } else if (to.meta.requiresAuth && !authenticateStore.token) {
        next({ name: "login" });
    } else {
        next();
    }
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;
