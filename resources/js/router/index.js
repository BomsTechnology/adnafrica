import { createRouter, createWebHistory } from "vue-router";

const Home = () => import ("../views/Home.vue");

const siteName = "Elodis Sarl";

const routes = [
    // front routes
    {
        path: '/',
        name: 'home',
        component: Home,
        meta:{
            title: siteName + ' - Accueil'
        }
    },

];


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else  if (savedPosition) {
            return savedPosition
          } else {
            return { top: 0 }
          }
    }
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;