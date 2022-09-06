<script setup>
import { onMounted, ref } from "vue";
import CarrousselAds from "@/components/CarrousselAds.vue";
import {
    ShareIcon,
    MapPinIcon,
    ExclamationTriangleIcon,
    HashtagIcon,
    StarIcon,
    ChevronRightIcon,
    PhoneIcon,
    ChatBubbleLeftEllipsisIcon,
    CurrencyEuroIcon,
} from "@heroicons/vue/24/solid";
import Slider from "@/components/Slider.vue";
import { HeartIcon } from "@heroicons/vue/24/outline";
import useAnnouncement from "@/composables/announcementServices";
const { errors, loading, cleanErrors, announcement, getAnnouncement } =
    useAnnouncement();
const props = defineProps({
    id: String,
    title: String,
});

onMounted(async () => {
    await getAnnouncement(props.id);
});

const openSlider = ref(false);

const tooglSlider = () => {
    openSlider.value = !openSlider.value;
};
function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
}
const cuisineList = [
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
const isScroll = ref(false);
document.addEventListener("scroll", function () {
    let bodyTopPosition = document.body.getBoundingClientRect().top;
    if (bodyTopPosition < -150) {
        isScroll.value = true;
    } else {
        isScroll.value = false;
    }
});
</script>

<template>
    <section>
        <Slider
            v-if="openSlider && announcement.images"
            :list="announcement.images"
            :open="openSlider"
            :tooglSlider="tooglSlider"
        />

        <div v-else>
            <Goback />
            <nav
                :class="[
                    isScroll
                        ? 'fixed top-0 z-40  w-full bg-white p-4 shadow-lg lg:px-28'
                        : 'hidden',
                ]"
            >
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <div
                            class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                        >
                            <img
                                v-if="announcement.images"
                                :src="announcement.images[0].path"
                                class="h-full w-full bg-cover object-cover"
                                alt=""
                            />
                        </div>
                        <div>
                            <h1
                                class="whitespace-normal text-sm font-bold lg:text-lg"
                            >
                                {{ announcement.title }}
                            </h1>
                            <h6
                                class="whitespace-normal text-xs font-semibold text-gray-800 lg:text-sm"
                                v-if="announcement.currency"
                            >
                                {{ announcement.price }}
                                {{ announcement.currency.symbol }}
                            </h6>
                        </div>
                    </div>
                    <div class="flex items-center justify-center space-x-2">
                        <button
                            type="button"
                            title="Contacter"
                            class="flex items-center justify-center rounded bg-primary-color p-2 text-white hover:bg-secondary-color"
                        >
                            <CurrencyEuroIcon class="h-5 w-5 lg:mr-2" />
                            <span class="hidden text-sm lg:block"
                                >Achat sécurisé</span
                            >
                        </button>
                        <button
                            type="button"
                            title="Ajouter/Retirer aux favoris"
                            class="hidden h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:scale-95 hover:bg-pink-300 focus:bg-pink-300 lg:flex"
                        >
                            <HeartIcon
                                class="h-7 w-7 bg-transparent text-pink-500"
                            />
                        </button>
                    </div>
                </div>
            </nav>
            <section class="lg:flex lg:px-28">
                <div class="px-8 lg:w-[75%]">
                    <div
                        class="relative flex items-center space-x-2"
                        v-if="announcement.images"
                    >
                        <div class="h-80 w-full overflow-hidden rounded shadow">
                            <img
                                :src="announcement.images[0].path"
                                class="h-full w-full bg-cover object-cover"
                                alt=""
                            />
                        </div>
                        <div
                            v-if="announcement.images.length > 1"
                            class="hidden h-80 w-full flex-col space-y-2 lg:flex"
                        >
                            <div class="h-full overflow-hidden rounded shadow">
                                <img
                                    :src="announcement.images[1].path"
                                    class="h-full w-full bg-cover object-cover"
                                    alt=""
                                />
                            </div>
                            <div
                                v-if="announcement.images.length > 2"
                                class="h-full overflow-hidden rounded shadow"
                            >
                                <img
                                    :src="announcement.images[2].path"
                                    class="h-full w-full bg-cover object-cover"
                                    alt=""
                                />
                            </div>
                        </div>
                        <button
                            type="button"
                            @click="tooglSlider()"
                            class="absolute bottom-2 right-4 flex items-center justify-center rounded-full bg-white py-2 px-4 text-xs text-black shadow"
                        >
                            Voir les photos
                        </button>
                    </div>
                    <div>
                        <div class="px-2 py-3">
                            <div class="items-center justify-between lg:flex">
                                <h1
                                    class="flex items-center space-x-2 whitespace-normal text-2xl font-bold"
                                >
                                    <span>{{ announcement.title }}</span>
                                    <span v-if="announcement.country"
                                        ><img
                                            :src="announcement.country.image"
                                            :alt="announcement.country.name"
                                            class="h-5 w-8 object-cover"
                                    /></span>
                                </h1>
                                <div class="flex space-x-2">
                                    <button
                                        type="button"
                                        title="Ajouter/Retirer aux favoris"
                                        class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:scale-95 hover:bg-pink-300 focus:bg-pink-300"
                                    >
                                        <HeartIcon
                                            class="h-7 w-7 bg-transparent text-pink-500"
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        title="Partager"
                                        class="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 shadow hover:scale-95 hover:bg-blue-300 focus:bg-blue-300"
                                    >
                                        <ShareIcon
                                            class="h-7 w-7 bg-transparent text-blue-500"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div class="space-y-1">
                                    <h6
                                        v-if="announcement.currency"
                                        class="whitespace-normal font-semibold text-gray-800"
                                    >
                                        {{ announcement.price }}
                                        {{ announcement.currency.symbol }}
                                    </h6>
                                    <h6
                                        class="text-xs font-light text-gray-400"
                                        v-if="announcement.country"
                                    >
                                        {{ announcement.city.name }}
                                        {{ announcement.country.name }} -
                                        {{
                                            new Date(
                                                announcement.date
                                            ).toLocaleDateString("fr-FR", {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            })
                                        }}
                                        à
                                        {{
                                            `${padTo2Digits(
                                                new Date(
                                                    announcement.date
                                                ).getHours()
                                            )}h${padTo2Digits(
                                                new Date(
                                                    announcement.date
                                                ).getMinutes()
                                            )}`
                                        }}
                                    </h6>
                                </div>
                                <hr class="my-4 h-px border-none bg-gray-300" />
                                <div>
                                    <h1 class="text-lg font-semibold">
                                        Critères
                                    </h1>
                                    <div
                                        class="grid grid-cols-2 gap-6 p-2 md:grid-cols-3"
                                    >
                                        <div
                                            class="flex items-center space-x-1"
                                        >
                                            <HashtagIcon
                                                class="h-5 w-5 text-gray-500"
                                            />

                                            <h2 class="text-center">
                                                <span
                                                    class="block text-xs text-gray-500"
                                                    >Marque</span
                                                >
                                                <span
                                                    class="text-sm font-semibold"
                                                    >Opel</span
                                                >
                                            </h2>
                                        </div>
                                        <div
                                            class="flex items-center space-x-1"
                                        >
                                            <HashtagIcon
                                                class="h-5 w-5 text-gray-500"
                                            />

                                            <h2 class="text-center">
                                                <span
                                                    class="block text-xs text-gray-500"
                                                    >Marque</span
                                                >
                                                <span
                                                    class="text-sm font-semibold"
                                                    >Opel</span
                                                >
                                            </h2>
                                        </div>
                                        <div
                                            class="flex items-center space-x-1"
                                        >
                                            <HashtagIcon
                                                class="h-5 w-5 text-gray-500"
                                            />

                                            <h2 class="text-center">
                                                <span
                                                    class="block text-xs text-gray-500"
                                                    >Marque</span
                                                >
                                                <span
                                                    class="text-sm font-semibold"
                                                    >Opel</span
                                                >
                                            </h2>
                                        </div>
                                        <div
                                            class="flex items-center space-x-1"
                                        >
                                            <HashtagIcon
                                                class="h-5 w-5 text-gray-500"
                                            />

                                            <h2 class="text-center">
                                                <span
                                                    class="block text-xs text-gray-500"
                                                    >Marque</span
                                                >
                                                <span
                                                    class="text-sm font-semibold"
                                                    >Opel</span
                                                >
                                            </h2>
                                        </div>
                                        <div
                                            class="flex items-center space-x-1"
                                        >
                                            <HashtagIcon
                                                class="h-5 w-5 text-gray-500"
                                            />

                                            <h2 class="text-center">
                                                <span
                                                    class="block text-xs text-gray-500"
                                                    >Marque</span
                                                >
                                                <span
                                                    class="text-sm font-semibold"
                                                    >Opel</span
                                                >
                                            </h2>
                                        </div>
                                        <div
                                            class="flex items-center space-x-1"
                                        >
                                            <HashtagIcon
                                                class="h-5 w-5 text-gray-500"
                                            />

                                            <h2 class="text-center">
                                                <span
                                                    class="block text-xs text-gray-500"
                                                    >Marque</span
                                                >
                                                <span
                                                    class="text-sm font-semibold"
                                                    >Opel</span
                                                >
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4 h-px border-none bg-gray-300" />
                                <div>
                                    <h1 class="text-lg font-semibold">
                                        Description
                                    </h1>
                                    <p
                                        class="p-2 text-justify text-sm leading-6"
                                    >
                                        {{ announcement.description }}
                                    </p>
                                </div>
                                <hr class="my-4 h-px border-none bg-gray-300" />
                                <div class="">
                                    <h1
                                        class="flex space-x-3 text-lg font-semibold"
                                    >
                                        <MapPinIcon class="h-6 w-6" />
                                        <span>Douala Bonamousadi</span>
                                    </h1>
                                    <div
                                        class="my-3 flex h-60 items-center justify-center rounded bg-white"
                                    >
                                        <span
                                            class="text-sm font-semibold italic text-gray-400"
                                            >La Carte de Google Map</span
                                        >
                                    </div>
                                </div>
                                <hr
                                    class="my-4 hidden h-px border-none bg-gray-300 lg:block"
                                />
                                <div class="hidden lg:block">
                                    <div
                                        v-if="announcement.user"
                                        class="flex w-full items-center justify-between"
                                    >
                                        <div
                                            class="flex items-center space-x-2 py-3 px-2"
                                        >
                                            <div
                                                class="h-20 w-20 overflow-hidden rounded-full"
                                            >
                                                <img
                                                    :src="
                                                        announcement.user.avatar
                                                    "
                                                    class="h-full w-full bg-cover object-cover"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <h2
                                                    class="text-lg font-semibold text-gray-600"
                                                >
                                                    {{
                                                        announcement.user
                                                            .firstname
                                                    }}
                                                    {{
                                                        announcement.user
                                                            .lastname
                                                    }}
                                                </h2>
                                                <span class="flex">
                                                    <StarIcon
                                                        class="h-5 w-5 text-orange-400"
                                                    />
                                                    <StarIcon
                                                        class="h-5 w-5 text-orange-400"
                                                    /><StarIcon
                                                        class="h-5 w-5 text-orange-400"
                                                    /><StarIcon
                                                        class="h-5 w-5 text-orange-400"
                                                    /><StarIcon
                                                        class="h-5 w-5 text-gray-400"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                title="Contacter"
                                                class="rounded bg-primary-color p-2 text-white hover:bg-secondary-color"
                                            >
                                                <span class="text-sm"
                                                    >Contacter</span
                                                >
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4 h-px border-none bg-gray-300" />
                                <div>
                                    <button
                                        type="button"
                                        title="Signaler"
                                        class="flex items-center justify-center rounded bg-white p-2 hover:scale-95 hover:bg-gray-100"
                                    >
                                        <ExclamationTriangleIcon
                                            class="mr-2 h-5 w-5"
                                        />
                                        <span class="text-sm"
                                            >Signaler l'annonce</span
                                        >
                                    </button>
                                </div>
                                <hr class="my-4 h-px border-none bg-gray-300" />
                                <div>
                                    <h1 class="mb-2 text-lg font-semibold">
                                        Ces annonces peuvent vous intéresser
                                    </h1>
                                    <CarrousselAds :list="cuisineList" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:w-[25%]">
                    <div class="h-80 w-full rounded bg-white px-2 shadow-md">
                        <router-link
                            v-if="announcement.user"
                            :to="{
                                name: 'account',
                                params: {
                                    id: announcement.user.id,
                                    slug: announcement.user.slug,
                                },
                            }"
                            class="flex items-center justify-between"
                        >
                            <div class="flex items-center space-x-2 py-3 px-2">
                                <div
                                    class="mr-2 h-20 w-20 overflow-hidden rounded-full"
                                >
                                    <img
                                        :src="announcement.user.avatar"
                                        class="h-full w-full bg-cover object-cover"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h2
                                        class="text-lg font-semibold text-gray-600"
                                    >
                                        {{ announcement.user.firstname }}
                                    </h2>
                                    <span class="flex">
                                        <StarIcon
                                            class="h-5 w-5 text-orange-400"
                                        />
                                        <StarIcon
                                            class="h-5 w-5 text-orange-400"
                                        /><StarIcon
                                            class="h-5 w-5 text-orange-400"
                                        /><StarIcon
                                            class="h-5 w-5 text-orange-400"
                                        /><StarIcon
                                            class="h-5 w-5 text-gray-400"
                                        />
                                    </span>
                                    <h2 class="mt-1 text-sm font-light">
                                        {{ announcement.user.nbAds }}
                                        <span v-if="announcement.user.nbAds > 1"
                                            >Annonces</span
                                        >
                                        <span v-else>Annonce</span>
                                    </h2>
                                </div>
                            </div>
                            <ChevronRightIcon class="h-7 w-7" />
                        </router-link>
                        <hr class="my-8 mx-2 h-px border-none bg-gray-300" />
                        <div class="space-y-1">
                            <button
                                type="button"
                                title="Achat sécurisé"
                                class="flex w-full items-center justify-center rounded bg-primary-color p-2 text-white hover:bg-secondary-color"
                            >
                                <CurrencyEuroIcon class="mr-2 h-5 w-5" />
                                <span class="text-sm">Achat sécurisé</span>
                            </button>
                            <button
                                type="button"
                                title="Envoyer un message"
                                class="flex w-full items-center justify-center rounded bg-blue-500 p-2 text-white hover:bg-blue-400"
                            >
                                <ChatBubbleLeftEllipsisIcon
                                    class="mr-2 h-5 w-5"
                                />
                                <span class="text-sm">Envoyer un message</span>
                            </button>
                            <button
                                type="button"
                                title="Appeler"
                                class="flex w-full items-center justify-center rounded border border-blue-500 bg-white p-2 text-blue-500"
                            >
                                <PhoneIcon class="mr-2 h-5 w-5" />
                                <span class="text-sm">Appeler</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>
