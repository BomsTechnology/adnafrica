<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const modules = [Navigation];

const categoryList = [
    {
        name: "Vetement",
        image: "/images/categories/cat_vetement.jpg",
    },
    {
        name: "Cuisine",
        image: "/images/categories/cat_cuisine.jpg",
    },
    {
        name: "Informatique",
        image: "/images/categories/cat_informatique.webp",
    },
    {
        name: "Décoration",
        image: "/images/categories/cat_decoration.jpg",
    },
    {
        name: "Emploi",
        image: "/images/categories/cat_offre.jpg",
    },
    {
        name: "Electroménager",
        image: "/images/categories/cat_electromenager.jpg",
    },
    {
        name: "Véhicule",
        image: "/images/categories/cat_vehicule.jpg",
    },
    {
        name: "Livre",
        image: "/images/categories/cat_livre.jpg",
    },
];
</script>

<template>
    <swiper
        :navigation="true"
        :slidesPerView="5"
        :spaceBetween="5"
        :breakpoints="{
            300: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 5,
            },
        }"
        :modules="modules"
        class="mt-8"
    >
        <swiper-slide
            class="relative"
            v-for="category in categoryList"
            :key="category.name"
        >
            <div
                class="h-36 w-36 overflow-hidden rounded-lg shadow lg:h-56 lg:w-56"
            >
                <img
                    :src="category.image"
                    class="h-full w-full bg-cover object-cover"
                    alt=""
                />
            </div>
            <div
                class="absolute top-0 flex h-36 w-36 flex-col items-center justify-center rounded-lg bg-gradient-to-t from-black/60 to-transparent lg:h-56 lg:w-56"
            >
                <h1 class="text-xl font-bold text-white">
                    {{ category.name }}
                </h1>
                <h5 class="font-light text-gray-100">O Annonce</h5>
            </div>
        </swiper-slide>
    </swiper>
</template>
