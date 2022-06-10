<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { SpeakerphoneIcon } from "@heroicons/vue/solid";
import { HeartIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

const modules = [Navigation];

const props = defineProps({
    category: {
        type: String,
        default: null,
    },
    list: Array,
});

const show = ref(false);

const toogleFavorite = () => {
    show.value = true;
};
</script>

<template>
    <!-- <Alert
        :show="show"
        :message="'Your account was registered!'"
        :type="'Favorite'"
    /> -->
    <h1
        v-if="props.category != null"
        class="mt-8 flex w-auto items-center space-x-2 py-4 font-semibold text-gray-500 hover:underline hover:underline-offset-1"
    >
        <span><SpeakerphoneIcon class="h-6 w-6 rotate-[-25deg]" /></span>
        <span>{{ props.category }}</span>
    </h1>
    <swiper
        :navigation="true"
        :slidesPerView="4"
        :spaceBetween="5"
        :breakpoints="{
            300: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }"
        :modules="modules"
    >
        <swiper-slide v-for="ads in props.list" :key="ads.name">
            <div class="flex items-center space-x-2 py-3 px-2">
                <router-link
                    :to="{ name: 'account' }"
                    class="h-6 w-6 overflow-hidden rounded-full opacity-90"
                >
                    <img
                        :src="ads.authorImage"
                        class="h-full w-full bg-cover object-cover"
                        alt=""
                    />
                </router-link>
                <h2 class="text-xs font-semibold text-gray-400">
                    {{ ads.authorName }}
                </h2>
            </div>

            <div
                class="relative h-48 w-full overflow-hidden rounded-lg shadow lg:h-80"
            >
                <router-link :to="{ name: 'ads.single' }">
                    <img
                        :src="ads.image"
                        class="h-full w-full bg-cover object-cover"
                        alt=""
                    />
                </router-link>

                <button
                    type="button"
                    @click="toogleFavorite()"
                    title="Ajouter/Retirer aux favoris"
                    class="absolute top-2 left-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:scale-95 hover:bg-pink-300 focus:bg-pink-300"
                >
                    <HeartIcon class="h-7 w-7 bg-transparent text-pink-500" />
                </button>
                <div
                    class="absolute bottom-2 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-sm text-white shadow"
                >
                    {{ ads.nbImage }}
                </div>
            </div>

            <div class="px-2 py-3">
                <h1 class="whitespace-normal text-lg font-bold">
                    {{ ads.name }}
                </h1>
                <div class="items-center justify-between md:flex">
                    <h6 class="whitespace-normal font-semibold text-gray-800">
                        {{ ads.price.toLocaleString("CM") }} XFA
                    </h6>
                    <h6 class="text-xs font-light text-gray-400">
                        {{ ads.location }}
                    </h6>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
