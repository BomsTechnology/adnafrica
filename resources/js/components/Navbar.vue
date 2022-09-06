<script>
export default {
    inheritAttrs: false,
};
</script>
<script setup>
import {
    XMarkIcon,
    Bars4Icon,
    DocumentPlusIcon,
    UserIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    HeartIcon,
    RectangleStackIcon,
    ViewColumnsIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    MapPinIcon,
    ChevronRightIcon,
} from "@heroicons/vue/24/solid";
import { ref, watch, onMounted } from "vue";
import { useAuthenticateStore } from "@/stores/authenticate";
import { ArrowUpCircleIcon } from "@heroicons/vue/24/solid";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const currentRoute = ref("");
watch(route, (nRoute, oRoute) => {
    currentRoute.value = nRoute.name;
});
onMounted(async () => {
    currentRoute.value = route.name;
});
const authenticateStore = useAuthenticateStore();
const open = ref(false);
const navigationTo = async (routeName) => {
    open.value = false;
    if (routeName == "account") {
        router.push({
            name: "account",
            params: {
                id: authenticateStore.user.id ? authenticateStore.user.id : "",
                slug: authenticateStore.user.slug
                    ? authenticateStore.user.slug
                    : "",
            },
        });
    } else {
        router.push({ name: routeName });
    }
};
const isScroll = ref(false);
document.addEventListener("scroll", async function () {
    let bodyTopPosition = document.body.getBoundingClientRect().top;
    // await router.isReady();
    if (bodyTopPosition < -150) {
        isScroll.value = true;
    } else {
        isScroll.value = false;
    }
});

const goTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
</script>

<template>
    <nav
        :class="[
            isScroll &&
            currentRoute != 'ads.single' &&
            currentRoute != 'company'
                ? 'fixed top-0 z-40  w-full bg-white/90 text-gray-800 shadow-lg'
                : 'z-40 w-full bg-primary-color text-white',
        ]"
    >
        <div class="container mx-auto px-12 py-3">
            <div
                class="flex flex-col md:flex-row md:items-center md:justify-between"
            >
                <div class="flex w-full items-center justify-between lg:w-2/3">
                    <div class="flex items-center">
                        <router-link
                            :to="{ name: 'home' }"
                            class="transform text-2xl font-bold uppercase tracking-widest transition-colors duration-200 lg:text-3xl"
                            >Adnafrica</router-link
                        >
                    </div>

                    <!-- Mobile menu button -->
                    <div class="relative block lg:hidden" @click="open = !open">
                        <transition-group
                            enter-active-class="transition duration-500"
                            enter-from-class="opacity-0 rotate-45"
                            enter-to-class="opacity-1 rotate-0 "
                            leave-active-class="transition duration-500 absolute"
                            leave-from-class="opacity-1 rotate-0"
                            leave-to-class="opacity-0 rotate-45"
                            appear
                        >
                            <button
                                v-if="!open"
                                type="button"
                                class="dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
                                aria-label="toggle menu"
                            >
                                <Bars4Icon class="h-6 w-6 fill-current" />
                            </button>
                            <button
                                v-if="open"
                                type="button"
                                class="dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
                                aria-label="toggle menu"
                            >
                                <XMarkIcon class="h-6 w-6 fill-current" />
                            </button>
                        </transition-group>
                    </div>
                </div>

                <div class="-mx-1 hidden items-center py-2 md:mx-0 lg:flex">
                    <div class="flex items-center justify-center space-x-2">
                        <!-- <router-link
                            :to="{ name: 'alert' }"
                            class="relative"
                            title="Mes alertes"
                            ><BellIcon class="h-8 w-8" />
                             <Ping :color="'red'"/> 
                        </router-link> -->

                        <router-link
                            :to="{ name: 'favorite' }"
                            class="relative"
                            title="Mes annonces Favoris"
                            ><HeartIcon class="h-8 w-8" />
                            <!--  <Ping :color="'red'" /> -->
                        </router-link>

                        <router-link
                            :to="{ name: 'chat' }"
                            class="relative"
                            title="Mes messages"
                            ><ChatBubbleOvalLeftEllipsisIcon class="h-8 w-8"
                        /></router-link>

                        <router-link
                            v-if="authenticateStore.user"
                            :to="{
                                name: 'account',
                                params: {
                                    id: authenticateStore.user.id
                                        ? authenticateStore.user.id
                                        : '',
                                    slug: authenticateStore.user.slug
                                        ? authenticateStore.user.slug
                                        : '',
                                },
                            }"
                            class="relative"
                            title="Mon compte"
                            ><UserIcon class="h-8 w-8"
                        /></router-link>
                        <router-link
                            :to="{ name: 'login' }"
                            v-else
                            class="relative"
                            title="Mon compte"
                            ><UserIcon class="h-8 w-8"
                        /></router-link>
                    </div>
                    <router-link
                        :to="{ name: 'login' }"
                        :class="[
                            isScroll
                                ? 'mx-1 flex w-1/2 items-center space-x-2 rounded border border-gray-800 bg-white px-3 py-2 text-center text-sm font-medium leading-5 transition-colors hover:bg-gray-800 hover:text-white md:mx-2 md:w-auto'
                                : 'mx-1 flex w-1/2 items-center space-x-2 rounded border-white bg-white px-3 py-2 text-center text-sm font-medium leading-5 text-primary-color transition-colors hover:border hover:bg-primary-color hover:text-white md:mx-2 md:w-auto',
                        ]"
                    >
                        <DocumentPlusIcon class="h-6 w-6" />
                        <span>Déposer une annonce</span>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>

    <div class="fixed top-14 z-50 w-full">
        <Transition
            enter-active-class="transition duration-500"
            enter-from-class="opacity-0 translate-x-full"
            enter-to-class="opacity-1 translate-x-0"
            leave-active-class="transition duration-500"
            leave-from-class="opacity-1 translate-x-0"
            leave-to-class="opacity-0 translate-x-full"
        >
            <div class="items-center bg-white p-4 shadow md:flex" v-if="open">
                <div class="-mx-1 w-full py-2">
                    <span
                        @click="navigationTo('login')"
                        class="mx-1 flex w-full transform cursor-pointer items-center space-x-2 rounded border-white bg-white px-3 py-2 text-center text-sm font-medium leading-5 text-gray-700 transition-colors duration-200 hover:border hover:bg-primary-color hover:text-white md:mx-2"
                    >
                        <DocumentPlusIcon class="h-6 w-6" />
                        <span>Déposer une annonce</span>
                    </span>
                    <hr class="my-6 h-px border-none bg-gray-300" />
                    <!-- <router-link
                        :to="{ name: 'alert' }"
                        class="mx-1 flex w-full transform items-center space-x-2 rounded border-white bg-white px-3 py-2 text-center text-sm font-medium leading-5 text-gray-700 transition-colors duration-200 hover:border hover:bg-primary-color hover:text-white md:mx-2 md:w-auto"
                    >
                        <BellIcon class="h-6 w-6" />
                        <span>Mes Alertes</span>
                    </router-link> -->
                    <span
                        @click="navigationTo('favorite')"
                        class="mx-1 flex w-full transform cursor-pointer items-center space-x-2 rounded border-white bg-white px-3 py-2 text-center text-sm font-medium leading-5 text-gray-700 transition-colors duration-200 hover:border hover:bg-primary-color hover:text-white md:mx-2 md:w-auto"
                    >
                        <HeartIcon class="h-6 w-6" />
                        <span>Mes Favoris</span>
                    </span>
                    <span
                        @click="navigationTo('chat')"
                        class="mx-1 flex w-full transform cursor-pointer items-center space-x-2 rounded border-white bg-white px-3 py-2 text-center text-sm font-medium leading-5 text-gray-700 transition-colors duration-200 hover:border hover:bg-primary-color hover:text-white md:mx-2 md:w-auto"
                    >
                        <ChatBubbleOvalLeftEllipsisIcon class="h-6 w-6" />
                        <span>Mes Messages</span>
                    </span>
                    <hr class="my-6 h-px border-none bg-gray-300" />
                    <span
                        @click="navigationTo('account')"
                        v-if="authenticateStore.user"
                        class="mx-1 flex w-full transform cursor-pointer items-center space-x-2 rounded border-white bg-white px-3 py-2 text-center text-sm font-medium leading-5 text-gray-700 transition-colors duration-200 hover:border hover:bg-primary-color hover:text-white md:mx-2 md:w-auto"
                    >
                        <UserIcon class="h-6 w-6" />
                        <span>Mon Compte</span>
                    </span>
                    <span
                        @click="navigationTo('login')"
                        v-else
                        class="mx-1 flex w-full transform cursor-pointer items-center space-x-2 rounded border-white bg-white px-3 py-2 text-center text-sm font-medium leading-5 text-gray-700 transition-colors duration-200 hover:border hover:bg-primary-color hover:text-white md:mx-2 md:w-auto"
                    >
                        <UserIcon class="h-6 w-6" />
                        <span>Mon Compte</span>
                    </span>
                </div>
            </div>
        </Transition>
    </div>
    <div>
        <button
            @click="goTop()"
            :class="[
                isScroll
                    ? 'fixed bottom-8 right-4 z-40  items-center justify-center rounded-full border border-primary-color bg-white p-2 text-primary-color'
                    : 'hidden',
            ]"
        >
            <ArrowUpCircleIcon class="h-6 w-6" />
        </button>
    </div>
</template>
