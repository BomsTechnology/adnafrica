<script setup>
import SearchSection from "@/components/SearchSection.vue";
import CarrousselTopCategory from "@/components/CarrousselTopCategory.vue";
import CarrousselAds from "@/components/CarrousselAds.vue";
import { DocumentPlusIcon } from "@heroicons/vue/24/solid";
const cuisineList = [
    {
        name: "Gâteau à la crème chocolat",
        authorName: "Boms",
        authorImage: "/images/icone/default_avatar.svg",
        price: 10000,
        location: "Douala Bonamousadi",
        nbImage: 5,
        image: "/images/ads/cuisine/1.jpg",
    },
    {
        name: "Gâteau au chocolat",
        authorName: "Jean  Luc",
        authorImage: "/images/avatar/1.jpg",
        price: 8000,
        location: "Douala Village",
        nbImage: 10,
        image: "/images/ads/cuisine/2.jpg",
    },
    {
        name: "Cup Cake à la fraise",
        authorName: "Martin du  pond",
        authorImage: "/images/icone/default_avatar.svg",
        price: 5000,
        location: "Douala Makepe",
        nbImage: 4,
        image: "/images/ads/cuisine/3.jpg",
    },
    {
        name: "Crêpe Fraise",
        authorName: "Thomas sam",
        authorImage: "/images/avatar/3.jpg",
        price: 8000,
        location: "Douala Deido",
        nbImage: 4,
        image: "/images/ads/cuisine/4.jpg",
    },
    {
        name: "Gâteau étage",
        authorName: "Boms",
        authorImage: "/images/icone/default_avatar.svg",
        price: 100000,
        location: "Douala Bonamousadi",
        nbImage: 8,
        image: "/images/ads/cuisine/5.jpg",
    },
    {
        name: "Cup Cake",
        authorName: "Nadia Rose",
        authorImage: "/images/avatar/2.jpg",
        price: 2500,
        location: "Bafoussan Marché B",
        nbImage: 2,
        image: "/images/ads/cuisine/6.jpg",
    },
    {
        name: "Beignet viande",
        authorName: "Boms",
        authorImage: "/images/icone/default_avatar.svg",
        price: 3000,
        location: "Yaounde Bastos",
        nbImage: 2,
        image: "/images/ads/cuisine/7.jpg",
    },
];
</script>

<template>
    <div class="mt-10 px-4 text-center">
        <h1 class="text-2xl font-bold lg:text-3xl">
            Retrouvez vos entreprises africaines et annonces classées
        </h1>
        <h5 class="mt-2 mb-8 font-light lg:text-lg">
            Naviguez parmi plus de 15,000,000 entreprises et annonces tandis que
            de nouvelles arrivent quotidiennement
        </h5>
    </div>
    <SearchSection />
    <div class="-mt-4 flex justify-center">
        <router-link
            :to="{ name: 'create-ads' }"
            class="flex items-center space-x-2 rounded-full bg-primary-color py-1 px-3 text-sm text-white shadow transition-all hover:bg-secondary-color hover:shadow-xl lg:text-lg"
        >
            <span
                ><DocumentPlusIcon
                    class="h-4 w-4 text-white lg:h-6 lg:w-6" /></span
            ><span>Déposer une annonce</span>
        </router-link>
    </div>
    <section class="py-14 px-4 md:px-28">
        <CarrousselTopCategory />
    </section>
    <!-- <section class="py-14 px-4 md:px-28">
        <div>
            <h1 class="text-2xl font-bold">D'après vos dernières recherches</h1>
            <CarrousselAds :list="cuisineList" :category="'Cuisine'" />
            <CarrousselAds :list="autoList" :category="'Automobile'" />
        </div>
    </section> -->
</template>
