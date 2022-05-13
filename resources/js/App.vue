<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Goback from "./components/Goback.vue";
</script>

<template>
    <Navbar />
    <div class="mt-24">
        <Goback />
        <router-view v-slot="{ Component }">
            <Transition
                enter-active-class="transition duration-1000"
                enter-from-class="opacity-0 translate-y-10"
                enter-to-class="opacity-1 translate-y-0"
                leave-active-class="transition duration-500"
                leave-from-class="opacity-1 translate-y-0"
                leave-to-class="opacity-0 -translate-y-10"
                mode="out-in"
            >
                <component :is="Component" />
            </Transition>
        </router-view>
    </div>
    <Footer />
</template>
