<script setup>
import Navbar from "./components/Navbar.vue";
import { ArrowCircleUpIcon } from "@heroicons/vue/solid";
import Footer from "./components/Footer.vue";

const goTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
</script>

<template>
    <Navbar />
    <div class="mt-10">
        <router-view v-slot="{ Component, route }">
            <Transition
                enter-active-class="transition duration-1000"
                enter-from-class="opacity-0 translate-y-10"
                enter-to-class="opacity-1 translate-y-0"
                leave-active-class="transition duration-500 "
                leave-from-class="opacity-1 translate-y-0"
                leave-to-class="opacity-0 -translate-y-10"
                mode="out-in"
            >
                <div :key="route.name">
                    <component :is="Component" />
                </div>
            </Transition>
        </router-view>
    </div>
    <div>
        <button
            @click="goTop()"
            id="btnToTop"
            class="fixed bottom-8 right-4 z-40 hidden items-center justify-center rounded-full border border-primary-color bg-white p-2 text-primary-color"
        >
            <ArrowCircleUpIcon class="h-6 w-6" />
        </button>
    </div>
    <Footer />
</template>
