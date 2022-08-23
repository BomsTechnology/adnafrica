<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Zoom, Thumbs } from "swiper";
import { XIcon, CurrencyEuroIcon } from "@heroicons/vue/solid";
import { HeartIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

const modules = [FreeMode, Navigation, Thumbs, Zoom];
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
const props = defineProps({
    open: Boolean,
    list: Array,
    tooglSlider: Function,
});
</script>

<template>
    <div v-if="props.open" class="absolute top-0 z-50 h-full w-full bg-white">
        <div
            class="absolute top-0 z-50 flex w-full items-center justify-between py-6 px-8"
        >
            <h1 class="text-lg font-bold text-gray-600">05 Photos</h1>

            <div class="flex items-center justify-center space-x-2">
                <button
                    type="button"
                    title="Contacter"
                    class="flex items-center justify-center rounded bg-primary-color p-2 text-white hover:bg-secondary-color"
                >
                    <CurrencyEuroIcon class="h-5 w-5 lg:mr-2" />
                    <span class="hidden text-sm lg:block">Achat sécurisé</span>
                </button>
                <button
                    type="button"
                    title="Ajouter/Retirer aux favoris"
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:scale-95 hover:bg-pink-300 focus:bg-pink-300"
                >
                    <HeartIcon class="h-7 w-7 bg-transparent text-pink-500" />
                </button>
                <button @click="props.tooglSlider()">
                    <XIcon class="h-8 w-8 text-gray-600" />
                </button>
            </div>
        </div>

        <swiper
            :navigation="true"
            :loop="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :pagination="{
                clickable: true,
            }"
            :modules="modules"
            :zoom="true"
            class="mt-10 h-[500px] lg:mt-0 lg:h-4/5"
        >
            <swiper-slide
                class="h-full"
                v-for="ads in props.list"
                :key="ads.name"
            >
                <div
                    class="relative mx-auto mt-8 h-full overflow-hidden rounded-lg shadow lg:w-[1000px]"
                >
                    <img
                        :src="ads.image"
                        class="h-full w-full bg-cover object-cover"
                        alt=""
                    />
                </div>
            </swiper-slide>
        </swiper>
        <swiper
            @swiper="setThumbsSwiper"
            :loop="true"
            :spaceBetween="50"
            :slidesPerView="4"
            :breakpoints="{
                300: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper !py-3 !px-6"
        >
            <swiper-slide
                class="h-full"
                v-for="ads in props.list"
                :key="ads.name"
            >
                <div class="h-full w-full overflow-hidden rounded-lg">
                    <img
                        :src="ads.image"
                        class="h-full w-full bg-cover object-cover"
                        alt=""
                    />
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<style>
.mySwiper {
    height: 20%;
    box-sizing: border-box;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}
</style>
