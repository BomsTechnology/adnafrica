<script setup>
import SearchSection from "@/components/SearchSection.vue";
import {
    HeartIcon,
    MapPinIcon,
    XMarkIcon,
    ChevronRightIcon,
    ArrowLeftIcon,
    BuildingOffice2Icon,
    FunnelIcon,
} from "@heroicons/vue/24/solid";
import { useAuthenticateStore } from "@/stores/authenticate";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import useSearch from "@/composables/searchServices";
import SKSearchAds from "@/components/skeleton/SKSearchAds.vue";
import SKSearchCompany from "@/components/skeleton/SKSearchCompany.vue";

const {
    mount,
    searchData,
    searchResult,
    searching,
    saveRecentSearch,
    showCategory,
    selectCategory,
    selectedCategory,
    selectedSubCategory,
    returnCategory,
    categories,
    errors,
    loading,
} = useSearch();
const authenticateStore = useAuthenticateStore();
const route = useRoute();
onMounted(async () => {
    await mount({
        gender: route.query.gender,
        type: route.query.type,
        keywords: route.query.keywords,
        category: route.query.category,
        location: route.query.location,
    });
    await searching();
    console.log(searchResult.value);
    if (
        authenticateStore.user &&
        authenticateStore.token &&
        route.query.category != "all"
    ) {
        await saveRecentSearch(authenticateStore.user.id, route.query.category);
    }
});
watch(route, async (newRoute, oldRoute) => {
    await mount({
        gender: newRoute.query.gender,
        type: newRoute.query.type,
        keywords: newRoute.query.keywords,
        category: newRoute.query.category,
        location: newRoute.query.location,
    });
    await searching();
    if (
        authenticateStore.user &&
        authenticateStore.token &&
        newRoute.query.category != "all"
    ) {
        await saveRecentSearch(
            authenticateStore.user.id,
            newRoute.query.category
        );
    }
});
function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
}
</script>
<template>
    <!-- Search section -->
    <div class="my-4 w-full">
        <SearchSection
            :gender="route.query.gender"
            :type="route.query.type"
            :keywords="route.query.keywords"
            :category="route.query.category"
            :location="route.query.location"
        />
        <div class="-mt-4 flex justify-center">
            <button
                type="button"
                @click="showCategory.filter = true"
                class="flex items-center space-x-2 rounded-full bg-primary-color py-1 px-3 text-sm text-white shadow transition-all hover:bg-secondary-color hover:shadow-xl lg:text-lg"
            >
                <span
                    ><FunnelIcon
                        class="h-4 w-4 text-white lg:h-6 lg:w-6" /></span
                ><span>Tous les filtres</span>
            </button>
        </div>
    </div>

    <!-- Big Filter -->
    <div
        :class="[
            showCategory.filter
                ? 'fixed top-0 z-50 h-screen w-full bg-black/25'
                : 'hidden transition-all duration-500',
        ]"
    >
        <Transition
            enter-active-class="transition duration-500"
            enter-from-class="opacity-0 translate-x-full"
            enter-to-class="opacity-1 translate-x-0"
            leave-active-class="transition duration-500"
            leave-from-class="opacity-1 translate-x-0"
            leave-to-class="opacity-0 translate-x-full"
        >
            <div
                v-if="showCategory.filter"
                class="z-10 float-right flex h-full w-5/6 flex-col bg-white md:w-2/3 lg:w-1/3"
            >
                <div
                    class="flex items-center justify-between border-b py-2 px-6"
                >
                    <button
                        v-if="showCategory.modal"
                        type="button"
                        @click="showCategory.modal = false"
                        class="group rounded p-2 transition-colors hover:bg-primary-color"
                    >
                        <ArrowLeftIcon
                            class="h-5 w-5 text-primary-color group-hover:text-white lg:h-7 lg:w-7"
                        />
                    </button>
                    <button
                        v-else
                        type="button"
                        @click="showCategory.filter = false"
                        class="group rounded p-2 text-sm transition-colors hover:bg-primary-color"
                    >
                        <XMarkIcon
                            class="h-5 w-5 text-gray-500 group-hover:text-white lg:h-7 lg:w-7"
                        />
                    </button>

                    <h1 class="text-sm font-semibold text-gray-500 lg:text-lg">
                        Tous les filtres
                    </h1>
                </div>

                <div
                    v-if="showCategory.modal"
                    ref="categoryModal"
                    class="h-full w-full overflow-y-auto rounded-md bg-white"
                >
                    <div class="p-2" v-show="showCategory.category">
                        <button
                            @click="selectedSubCategory('all')"
                            type="button"
                            :class="[
                                selectCategory.subCategory == 'all'
                                    ? 'block w-full whitespace-nowrap rounded bg-secondary-color/25 p-2 text-left font-bold text-primary-color hover:bg-secondary-color hover:text-white'
                                    : 'block w-full whitespace-nowrap rounded p-2 text-left hover:bg-secondary-color hover:font-bold hover:text-white',
                            ]"
                        >
                            Toutes Catégories
                        </button>
                        <button
                            type="button"
                            v-for="category in categories"
                            :key="category.id"
                            @click="selectedCategory(category)"
                            :class="[
                                selectCategory.subCategory != 'all' &&
                                selectCategory.category != null &&
                                selectCategory.category.id == category.id
                                    ? 'group flex w-full justify-between rounded bg-secondary-color/25 p-2 text-left font-bold text-primary-color hover:bg-secondary-color hover:text-white'
                                    : ' group flex w-full justify-between rounded p-2 text-left hover:bg-secondary-color hover:text-white',
                            ]"
                        >
                            <span>{{ category.name }}</span>
                            <span
                                ><ChevronRightIcon
                                    class="h-5 w-5 stroke-secondary-color text-white"
                            /></span>
                        </button>
                    </div>
                    <div class="p-2" v-show="showCategory.subCategory">
                        <button
                            type="button"
                            @click="returnCategory()"
                            class="mb-4 block w-auto rounded bg-secondary-color p-2 text-white"
                        >
                            <ArrowLeftIcon class="h-5 w-5" />
                        </button>
                        <button
                            v-if="selectCategory.category"
                            @click="
                                selectedSubCategory(selectCategory.category)
                            "
                            type="button"
                            :class="[
                                selectCategory.subCategory.id ==
                                selectCategory.category.id
                                    ? 'block w-full whitespace-nowrap rounded bg-secondary-color/25 p-2 text-left font-bold text-primary-color hover:bg-secondary-color hover:text-white'
                                    : 'block w-full whitespace-nowrap rounded p-2 text-left hover:bg-secondary-color hover:font-bold hover:text-white',
                            ]"
                        >
                            {{ selectCategory.category.name }}
                        </button>
                        <button
                            v-if="
                                selectCategory.category &&
                                selectCategory.category.children.length != 0
                            "
                            v-for="subCategory in selectCategory.category
                                .children"
                            @click="selectedSubCategory(subCategory)"
                            :key="subCategory.id"
                            type="button"
                            :class="[
                                selectCategory.subCategory.id == subCategory.id
                                    ? 'block w-full whitespace-nowrap rounded bg-secondary-color/25 p-2 text-left font-bold text-primary-color hover:bg-secondary-color hover:text-white'
                                    : 'block w-full whitespace-nowrap rounded p-2 text-left hover:bg-secondary-color hover:font-bold hover:text-white',
                            ]"
                        >
                            {{ subCategory.name }}
                        </button>
                    </div>
                </div>

                <div
                    v-else
                    class="h-full w-full space-y-2 overflow-y-auto py-4 px-6"
                >
                    <div
                        @click="showCategory.modal = !showCategory.modal"
                        class="flex cursor-pointer items-center justify-between border-b-2 pt-4 pb-6"
                    >
                        <div class="">
                            <h1 class="mb-2 font-bold text-gray-700 lg:text-lg">
                                Catégorie
                            </h1>
                            <h2
                                class="rounded-full bg-secondary-color py-1 px-3 text-xs font-semibold text-white lg:text-sm"
                            >
                                <span
                                    v-if="selectCategory.subCategory == 'all'"
                                >
                                    Toutes Catégories
                                </span>
                                <span v-else>
                                    {{ selectCategory.subCategory.name }}
                                </span>
                            </h2>
                        </div>
                        <div>
                            <ChevronRightIcon
                                class="h-6 w-6 text-primary-color lg:h-8 lg:w-8"
                            />
                        </div>
                    </div>
                </div>
                <div
                    v-if="!showCategory.modal"
                    class="flex h-20 w-full items-center justify-between border-t px-4"
                >
                    <button
                        class="rounded border border-gray-600 bg-white py-2 px-3 text-sm text-gray-800 lg:text-lg"
                    >
                        Tout Effacer
                    </button>
                    <button
                        class="rounded bg-primary-color py-2 px-3 text-sm text-white lg:text-lg"
                    >
                        Rechercher
                    </button>
                </div>
            </div>
        </Transition>
    </div>

    <section class="space-y-6 py-14 px-4 md:px-28 lg:flex lg:space-y-0">
        <div
            v-if="route.query.gender == 'ads' || route.query.gender == 'all'"
            :class="[
                route.query.gender == 'ads'
                    ? 'w-full'
                    : 'w-full lg:w-1/2 lg:border-r',
            ]"
        >
            <SKSearchAds v-if="loading != 2" />
            <div v-else>
                <h1
                    v-if="searchResult.ads"
                    class="font-bold text-gray-800 underline decoration-primary-color underline-offset-4 md:text-xl"
                >
                    Annonces ( {{ searchResult.ads.length }}
                    <span v-if="searchResult.ads.length > 1">résultats</span>
                    <span v-else>résultat</span> )
                </h1>
                <div
                    :class="[
                        route.query.gender == 'ads'
                            ? 'grid-cols-2  gap-4 space-y-4 py-8 lg:grid lg:space-y-0 lg:px-3'
                            : 'space-y-4 py-8 lg:px-3',
                    ]"
                    class=""
                >
                    <div
                        v-if="searchResult.ads && searchResult.ads.length >= 1"
                        v-for="announcement in searchResult.ads"
                        :key="announcement.id"
                        class="h-full w-full items-center rounded-lg border bg-white shadow lg:flex lg:h-36"
                    >
                        <router-link
                            :to="{
                                name: 'ads.single',
                                params: {
                                    id: announcement.id,
                                    slug: announcement.slug,
                                },
                            }"
                            class="relative h-full overflow-hidden"
                        >
                            <img
                                :src="announcement.images[0].path"
                                class="h-36 w-full rounded-t-lg bg-cover object-cover lg:h-full lg:w-60 lg:rounded-l-lg lg:rounded-tr-none"
                                alt=""
                            />
                            <div
                                class="absolute bottom-2 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-sm text-white shadow"
                            >
                                {{ announcement.images.length }}
                            </div>
                        </router-link>
                        <div class="flex h-full grow justify-between px-4">
                            <router-link
                                :to="{
                                    name: 'ads.single',
                                    params: {
                                        id: announcement.id,
                                        slug: announcement.slug,
                                    },
                                }"
                                class="flex h-full flex-col justify-between py-2"
                            >
                                <div>
                                    <h1
                                        class="whitespace-normal text-sm font-bold leading-5 lg:text-lg"
                                    >
                                        {{ announcement.title }}
                                    </h1>
                                    <h6
                                        class="whitespace-normal text-sm font-semibold text-gray-800 lg:text-lg"
                                    >
                                        {{
                                            announcement.price.toLocaleString(
                                                "FR"
                                            )
                                        }}
                                        {{ announcement.currency.symbol }}
                                    </h6>
                                </div>
                                <div class="text-xs font-light text-gray-400">
                                    <h6 class="flex items-center space-x-2">
                                        <span>{{
                                            announcement.category.name
                                        }}</span>

                                        <span v-if="announcement.country"
                                            ><img
                                                :src="
                                                    announcement.country.image
                                                "
                                                :alt="announcement.country.name"
                                                class="h-3 w-4 object-cover"
                                        /></span>
                                    </h6>
                                    <h6>
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
                            </router-link>
                            <div class="flex h-full items-end py-4">
                                <button
                                    type="button"
                                    title="Ajouter/Retirer aux favoris"
                                    class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:scale-95 hover:bg-pink-300 focus:bg-pink-300"
                                >
                                    <HeartIcon
                                        class="h-7 w-7 bg-transparent text-pink-500"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        v-else
                        class="flex w-full flex-col items-center justify-center"
                    >
                        <h1 class="text-xl font-semibold">Aucun Résultat</h1>
                        <img
                            src="/images/icone/no_data.png"
                            class="h-32 lg:h-96"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="
                route.query.gender == 'company' || route.query.gender == 'all'
            "
            :class="[
                route.query.gender == 'company'
                    ? 'w-full'
                    : 'w-full lg:w-1/2 lg:border-l',
            ]"
        >
            <SKSearchCompany v-if="loading != 2" />
            <div v-else>
                <h1
                    v-if="searchResult.company"
                    :class="[
                        route.query.gender == 'company'
                            ? 'font-bold text-gray-800 underline decoration-primary-color underline-offset-4 md:text-xl lg:text-left'
                            : 'font-bold text-gray-800 underline decoration-primary-color underline-offset-4 md:text-xl lg:text-right',
                    ]"
                >
                    Annuaires ( {{ searchResult.company.length }}
                    <span v-if="searchResult.company.length > 1"
                        >résultats</span
                    >
                    <span v-else>résultat</span> )
                </h1>
                <div
                    :class="[
                        route.query.gender == 'company'
                            ? 'grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-4 lg:px-3'
                            : 'grid grid-cols-1 gap-4 py-8 lg:grid-cols-2 lg:px-3',
                    ]"
                >
                    <router-link
                        v-if="
                            searchResult.company &&
                            searchResult.company.length >= 1
                        "
                        v-for="company in searchResult.company"
                        :key="company.id"
                        :to="{
                            name: 'company',
                            params: {
                                id: company.id,
                                slug: company.slug,
                            },
                        }"
                        class="flex h-60 flex-col items-center justify-center rounded bg-white shadow"
                    >
                        <div class="border border-gray-200 p-2">
                            <div class="h-32 w-32 overflow-hidden">
                                <img
                                    v-if="
                                        company.avatar !=
                                        '/images/icone/default_avatar.svg'
                                    "
                                    :src="company.avatar"
                                    alt=""
                                    class="h-full w-full object-cover"
                                />
                                <BuildingOffice2Icon
                                    v-else
                                    class="h-full w-full text-gray-500"
                                />
                            </div>
                        </div>
                        <h1 class="mt-2 font-bold">{{ company.firstname }}</h1>
                        <h4
                            class="mt-1 flex items-center space-x-1 text-xs font-light text-gray-500"
                        >
                            <MapPinIcon class="h-4 w-4" />
                            <span>{{ company.location }}</span>
                        </h4>
                    </router-link>
                    <div
                        v-else
                        class="col-span-4 flex flex-col items-center justify-center"
                    >
                        <h1 class="text-xl font-semibold">Aucun Résultat</h1>
                        <img
                            src="/images/icone/no_data.png"
                            class="h-32 lg:h-96"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
