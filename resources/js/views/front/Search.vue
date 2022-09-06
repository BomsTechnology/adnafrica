<script setup>
import SearchSection from "@/components/SearchSection.vue";
import {
    HeartIcon,
    MapPinIcon,
    XMarkIcon,
    ChevronRightIcon,
    ArrowLeftIcon,
    BuildingOffice2Icon,
} from "@heroicons/vue/24/solid";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import useSearch from "@/composables/searchServices";

const {
    mount,
    searchData,
    showCategory,
    selectCategory,
    selectedCategory,
    selectedSubCategory,
    returnCategory,
    categories,
} = useSearch();
const route = useRoute();
onMounted(async () => {
    await mount({
        gender: route.query.gender,
        type: route.query.type,
        keywords: route.query.keywords,
        category: route.query.category,
        location: route.query.location,
    });
});
watch(route, async (newRoute, oldRoute) => {
    await mount({
        gender: newRoute.query.gender,
        type: newRoute.query.type,
        keywords: newRoute.query.keywords,
        category: newRoute.query.category,
        location: newRoute.query.location,
    });
});
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
                class="rounded-full bg-primary-color py-1 px-3 text-sm text-white shadow transition-all hover:bg-secondary-color hover:shadow-xl lg:text-lg"
            >
                Tous les filtres
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
        <div class="w-full lg:border-r">
            <h1
                class="font-bold text-gray-800 underline decoration-primary-color underline-offset-4 md:text-xl"
            >
                Annonces (200 résultats)
            </h1>
            <div class="space-y-4 py-8 lg:px-3">
                <div
                    class="flex h-36 w-full items-center rounded-lg border bg-white shadow"
                >
                    <div class="h-full overflow-hidden rounded-l-lg">
                        <img
                            src="/images/ads/cuisine/1.jpg"
                            class="h-full w-full bg-cover object-cover"
                            alt=""
                        />
                    </div>
                    <div class="flex h-full grow justify-between px-4">
                        <div class="flex h-full flex-col justify-between py-2">
                            <div>
                                <h1
                                    class="whitespace-normal text-sm font-bold leading-5 lg:text-lg"
                                >
                                    Gâteau à la crème chocolat
                                </h1>
                                <h6
                                    class="whitespace-normal text-sm font-semibold text-gray-800 lg:text-lg"
                                >
                                    10 000 XFA
                                </h6>
                            </div>
                            <div class="text-xs font-light text-gray-400">
                                <h6>Automobile</h6>
                                <h6>Douala Bonamousadi - 12/05/2022 à 16h30</h6>
                            </div>
                        </div>
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
            </div>
        </div>
        <div class="w-full lg:border-l">
            <h1
                class="font-bold text-gray-800 underline decoration-primary-color underline-offset-4 md:text-xl lg:text-right"
            >
                Annuaires (200 résultats)
            </h1>
            <div class="grid grid-cols-1 gap-4 py-8 lg:grid-cols-2 lg:px-3">
                <div
                    class="flex h-60 flex-col items-center justify-center rounded bg-white shadow"
                >
                    <div class="border border-gray-200 p-2">
                        <div class="h-32 w-32 overflow-hidden">
                            <!-- <img
                                src="/images/avatar/1.jpg"
                                alt=""
                                class="h-full w-full object-cover"
                            /> -->
                            <BuildingOffice2Icon
                                class="h-full w-full text-gray-500"
                            />
                        </div>
                    </div>
                    <h1 class="mt-2 font-bold">Gno Solutions</h1>
                    <h4
                        class="mt-1 flex items-center space-x-1 text-xs font-light text-gray-500"
                    >
                        <MapPinIcon class="h-4 w-4" />
                        <span>Douala Bonamousadi</span>
                    </h4>
                </div>
            </div>
        </div>
    </section>
</template>
