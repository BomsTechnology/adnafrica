<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <Navbar />
    <div class="mt-24">
        <router-view></router-view>
    </div>
    <Footer />
</template>
