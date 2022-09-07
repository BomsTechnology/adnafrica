<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SKCarrousselTopCategory from "@/components/skeleton/SKCarrousselTopCategory.vue";
import useCategory from "@/composables/categoryServices";
import { onMounted } from "vue";
const modules = [Navigation];
const { errors, loading, categories, getTopCategories } = useCategory();

onMounted(async () => {
    await getTopCategories();
    console.log(categories.value);
});
</script>

<template>
    <div v-if="loading == 2">
        <h1 class="text-lg font-bold lg:text-2xl">Top Catégories</h1>
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
                v-for="category in categories"
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
                    <h5 class="font-light text-gray-100">
                        {{ category.nb_ads }} Annonce
                    </h5>
                </div>
            </swiper-slide>
        </swiper>
    </div>

    <SKCarrousselTopCategory v-else />
</template>
