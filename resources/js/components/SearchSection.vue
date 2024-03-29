<script setup>
import {
    ChevronDownIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon,
    MapPinIcon,
    RectangleStackIcon,
    ViewColumnsIcon,
    ArrowLeftIcon,
} from "@heroicons/vue/24/solid";
import { ref, onMounted, reactive } from "vue";
import {
    onClickOutside,
    breakpointsTailwind,
    useBreakpoints,
} from "@vueuse/core";
import useSearch from "@/composables/searchServices";

const props = defineProps({
    gender: {
        type: String,
        default: "all",
    },
    keywords: {
        type: String,
        default: "",
    },
    location: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: "offer",
    },
    category: {
        type: String,
        default: "all",
    },
});

const breakPoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakPoints.greater("lg");
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
const categoryModal = ref(null);

onMounted(async () => {
    mount({ ...props });
});
onClickOutside(categoryModal, () => {
    showCategory.modal = false;
});
</script>

<template>
    <div
        v-if="showCategory.modal"
        class="fixed top-0 z-10 flex h-full w-full items-center bg-black/25 px-8 lg:hidden"
    >
        <div ref="categoryModal" class="h-4/5 w-full rounded-md bg-white">
            <div class="overflow-y-auto p-2" v-show="showCategory.category">
                <button
                    @click="selectedSubCategory('all')"
                    type="button"
                    :class="[
                        selectCategory.subCategory == 'all'
                            ? 'block w-full whitespace-nowrap rounded bg-secondary-color/25 p-2 text-left text-sm font-bold text-primary-color hover:bg-secondary-color hover:text-white'
                            : 'block w-full whitespace-nowrap rounded p-2 text-left text-sm hover:bg-secondary-color hover:font-bold hover:text-white',
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
                            ? 'group flex w-full justify-between rounded bg-secondary-color/25 p-2 text-left text-sm font-bold text-primary-color hover:bg-secondary-color hover:text-white'
                            : ' group flex w-full justify-between rounded p-2 text-left text-sm hover:bg-secondary-color hover:text-white',
                    ]"
                >
                    <span>{{ category.name }}</span>
                    <span
                        ><ChevronRightIcon
                            class="h-5 w-5 stroke-secondary-color text-white"
                    /></span>
                </button>
            </div>
            <div class="overflow-y-auto p-2" v-show="showCategory.subCategory">
                <button
                    type="button"
                    @click="returnCategory()"
                    class="mb-4 block w-auto rounded bg-secondary-color p-2 text-white"
                >
                    <ArrowLeftIcon class="h-5 w-5" />
                </button>
                <button
                    v-if="selectCategory.category"
                    @click="selectedSubCategory(selectCategory.category)"
                    type="button"
                    :class="[
                        selectCategory.subCategory.id ==
                        selectCategory.category.id
                            ? 'block w-full whitespace-nowrap rounded bg-secondary-color/25 p-2 text-left text-sm font-bold text-primary-color hover:bg-secondary-color hover:text-white'
                            : 'block w-full whitespace-nowrap rounded p-2 text-left text-sm hover:bg-secondary-color hover:font-bold hover:text-white',
                    ]"
                >
                    {{ selectCategory.category.name }}
                </button>
                <button
                    v-if="
                        selectCategory.category &&
                        selectCategory.category.children.length != 0
                    "
                    v-for="subCategory in selectCategory.category.children"
                    @click="selectedSubCategory(subCategory)"
                    :key="subCategory.id"
                    type="button"
                    :class="[
                        selectCategory.subCategory.id == subCategory.id
                            ? 'block w-full whitespace-nowrap rounded bg-secondary-color/25 p-2 text-left text-sm font-bold text-primary-color hover:bg-secondary-color hover:text-white'
                            : 'block w-full whitespace-nowrap rounded p-2 text-left text-sm hover:bg-secondary-color hover:font-bold hover:text-white',
                    ]"
                >
                    {{ subCategory.name }}
                </button>
            </div>
        </div>
    </div>
    <form class="mx-auto w-full rounded bg-white p-8 shadow-md lg:w-[1000px]">
        <div class="relative mb-6 grid grid-cols-2 gap-2 lg:grid-cols-9">
            <div
                v-if="showCategory.modal && isDesktop"
                ref="categoryModal"
                class="absolute top-14 left-0 z-10 hidden h-96 w-full rounded-md bg-white shadow-xl lg:flex"
            >
                <div class="h-full w-1/3 border-r py-4 px-6 text-sm">
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
                                class="hidden h-5 w-5 stroke-white text-white group-hover:block"
                        /></span>
                    </button>
                </div>
                <div class="h-full w-2/3 overflow-y-auto py-4 px-2 text-sm">
                    <button
                        v-if="selectCategory.category"
                        @click="selectedSubCategory(selectCategory.category)"
                        type="button"
                        :class="[
                            selectCategory.subCategory.id ==
                            selectCategory.category.id
                                ? 'block w-1/2 whitespace-nowrap rounded bg-secondary-color/25 p-2 text-left font-bold text-primary-color hover:bg-secondary-color hover:text-white'
                                : 'block w-1/2 whitespace-nowrap rounded p-2 text-left hover:bg-secondary-color hover:font-bold hover:text-white',
                        ]"
                    >
                        {{ selectCategory.category.name }}
                    </button>
                    <button
                        v-if="
                            selectCategory.category &&
                            selectCategory.category.children.length != 0
                        "
                        v-for="subCategory in selectCategory.category.children"
                        @click="selectedSubCategory(subCategory)"
                        :key="subCategory.id"
                        type="button"
                        :class="[
                            selectCategory.subCategory.id == subCategory.id
                                ? 'block w-1/2 whitespace-nowrap rounded  bg-secondary-color/25 p-2 text-left font-bold text-primary-color hover:bg-secondary-color hover:text-white'
                                : 'block w-1/2 whitespace-nowrap rounded p-2 text-left hover:bg-secondary-color hover:font-bold hover:text-white',
                        ]"
                    >
                        {{ subCategory.name }}
                    </button>
                </div>
            </div>
            <div class="relative lg:col-span-2">
                <span class="absolute left-3 top-3"
                    ><ViewColumnsIcon class="h-6 w-6 text-gray-400"
                /></span>
                <select
                    class="form-select block w-full rounded border border-gray-300 bg-gray-50 py-3 pl-12 text-xs text-gray-900 focus:border-primary-color focus:ring-primary-color lg:text-sm"
                    v-model="searchData.gender"
                >
                    <option value="all">Tout</option>
                    <option value="company">Annuaire</option>
                    <option value="ads">Annonce</option>
                </select>
            </div>
            <div
                @click="showCategory.modal = !showCategory.modal"
                class="flex w-full cursor-pointer items-center justify-between overflow-x-hidden rounded border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 hover:bg-gray-100 lg:col-span-2 lg:text-sm"
            >
                <div>
                    <RectangleStackIcon class="h-6 w-6 text-gray-400" />
                </div>
                <div class="w-full whitespace-nowrap pl-4 text-xs lg:text-sm">
                    <span v-if="selectCategory.subCategory == 'all'">
                        Toutes Catégories
                    </span>
                    <span v-else>
                        {{ selectCategory.subCategory.name }}
                    </span>
                </div>
                <div>
                    <ChevronDownIcon class="h-6 w-6 text-gray-400" />
                </div>
            </div>
            <div class="relative lg:col-span-2">
                <span class="absolute left-3 top-3"
                    ><MagnifyingGlassIcon class="h-6 w-6 text-gray-400"
                /></span>
                <input
                    type="text"
                    v-model="searchData.keywords"
                    class="block w-full rounded border border-gray-300 bg-gray-50 py-3 pl-12 text-xs text-gray-900 focus:border-primary-color focus:ring-primary-color lg:text-sm"
                    placeholder="Que recherchez - vous ?"
                />
            </div>
            <div class="relative lg:col-span-2">
                <span class="absolute left-3 top-2"
                    ><MapPinIcon class="h-6 w-6 text-gray-400"
                /></span>
                <input
                    type="text"
                    class="block w-full rounded border border-gray-300 bg-gray-50 py-3 pl-12 text-xs text-gray-900 focus:border-primary-color focus:ring-primary-color lg:text-sm"
                    placeholder="Situé à..."
                    v-model="searchData.location"
                />
            </div>
            <div class="col-span-2 lg:col-span-1">
                <router-link
                    :to="{
                        name: 'search',
                        query: {
                            gender: searchData.gender,
                            type: searchData.type,
                            category: searchData.category,
                            keywords: searchData.keywords,
                            location: searchData.location,
                        },
                    }"
                    type="submit"
                    class="flex w-full justify-center rounded bg-primary-color px-5 py-3 text-center text-sm font-medium text-white hover:bg-secondary-color focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    <MagnifyingGlassIcon class="h-6 w-6" />
                </router-link>
            </div>
        </div>
        <div class="flex items-center justify-center space-x-6">
            <div class="flex items-center justify-center space-x-2">
                <input
                    type="radio"
                    v-model="searchData.type"
                    value="offer"
                    class="form-radio text-primary-color focus:border-primary-color focus:ring-primary-color"
                />
                <h1 class="text-xs text-gray-500 lg:text-sm">Offres</h1>
            </div>
            <div class="flex items-center justify-center space-x-2">
                <input
                    type="radio"
                    v-model="searchData.type"
                    value="request"
                    class="form-radio text-primary-color focus:border-primary-color focus:ring-primary-color"
                />
                <h1 class="text-xs text-gray-500 lg:text-sm">Demande</h1>
            </div>
        </div>
    </form>
</template>
