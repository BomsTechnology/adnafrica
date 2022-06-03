<script setup>
import SearchSection from "../../components/SearchSection.vue";
import CarrousselCategory from "../../components/CarrousselCategory.vue";
</script>

<template>
    <div class="px-4 text-center">
        <h1 class="text-2xl font-bold lg:text-3xl">
            Retrouvez vos annonces classées
        </h1>
        <h5 class="mt-2 mb-8 font-light lg:text-lg">
            Naviguez parmi plus de 15,000,000 annonces tandis que de nouvelles
            arrivent quotidiennement
        </h5>
    </div>
    <SearchSection />
    <section class="py-14 px-10 md:px-28">
        <div>
            <h1 class="text-2xl font-bold">Top Catégories</h1>
            <CarrousselCategory />
        </div>
    </section>
    <h1 class="h-[2000px] text-center text-5xl text-blue-500"></h1>
</template>
