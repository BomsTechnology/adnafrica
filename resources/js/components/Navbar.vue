<script setup>
import Ping from "./Ping.vue";
import {
    XIcon,
    MenuIcon,
    DocumentAddIcon,
    UserIcon,
    ChatIcon,
    HeartIcon,
    CollectionIcon,
    ViewBoardsIcon,
    ChevronDownIcon,
    SearchIcon,
    LocationMarkerIcon,
    ChevronRightIcon,
} from "@heroicons/vue/solid";
import { ref, onMounted, reactive } from "vue";
import useCategory from "@/services/categoryServices";
import { onClickOutside } from "@vueuse/core";

const { loading, categories, getCategories } = useCategory();
const open = ref(false);
const categoryModal = ref(null);
const showCategory = ref(false);
const selectCategory = reactive({
    category: null,
    subCategory: "all",
});
onMounted(async () => {
    await getCategories();
});
onClickOutside(categoryModal, () => {
    showCategory.value = false;
});
const selectedCategory = async (category) => {
    selectCategory.category = category;
};
const selectedSubCategory = async (subCategory) => {
    selectCategory.subCategory = subCategory;
    showCategory.value = false;
};
</script>

<template>
    <nav class="noScroll z-40 mb-10" id="navbar">
        <div class="container mx-auto px-12 py-3">
            <div
                class="flex flex-col md:flex-row md:items-center md:justify-between"
            >
                <div class="flex w-full items-center justify-between lg:w-2/3">
                    <div class="flex items-center">
                        <router-link
                            :to="{ name: 'home' }"
                            class="transform text-2xl font-bold uppercase tracking-widest transition-colors duration-200 lg:text-3xl"
                            >Adnafrica</router-link
                        >
                    </div>

                    <div class="ml-8 hidden lg:block">
                        <form id="searchNav" class="hidden">
                            <div class="relative grid grid-cols-9">
                                <div
                                    v-if="showCategory"
                                    ref="categoryModal"
                                    class="absolute top-14 left-0 z-10 flex h-96 w-full rounded-md bg-white shadow-xl"
                                >
                                    <div
                                        class="h-full w-2/5 border-r py-4 px-6 text-sm"
                                    >
                                        <button
                                            @click="selectedSubCategory('all')"
                                            type="button"
                                            class="block w-full rounded p-2 text-left hover:bg-secondary-color hover:text-white"
                                        >
                                            Toutes Catégories
                                        </button>
                                        <button
                                            type="button"
                                            v-for="category in categories"
                                            :key="category.id"
                                            @click="selectedCategory(category)"
                                            class="group flex w-full items-center justify-between rounded p-2 hover:bg-secondary-color hover:text-white"
                                        >
                                            <span>{{ category.name }}</span>
                                            <span
                                                ><ChevronRightIcon
                                                    class="h-5 w-5 stroke-white text-white"
                                            /></span>
                                        </button>
                                    </div>
                                    <div
                                        class="h-full w-3/5 overflow-y-auto py-4 px-2 text-sm"
                                    >
                                        <button
                                            v-if="selectCategory.category"
                                            @click="
                                                selectedSubCategory(
                                                    selectCategory.category
                                                )
                                            "
                                            type="button"
                                            class="block w-4/5 rounded p-2 text-left hover:bg-secondary-color hover:text-white"
                                        >
                                            {{ selectCategory.category.name }}
                                        </button>
                                        <button
                                            v-if="
                                                selectCategory.category &&
                                                selectCategory.category.children
                                                    .length != 0
                                            "
                                            v-for="subCategory in selectCategory
                                                .category.children"
                                            @click="
                                                selectedSubCategory(subCategory)
                                            "
                                            :key="subCategory.id"
                                            type="button"
                                            class="block w-4/5 whitespace-nowrap rounded p-2 text-left hover:bg-secondary-color hover:text-white"
                                        >
                                            {{ subCategory.name }}
                                        </button>
                                    </div>
                                </div>
                                <div class="relative col-span-2">
                                    <span class="absolute left-3 top-3"
                                        ><ViewBoardsIcon
                                            class="h-6 w-6 text-gray-400"
                                    /></span>
                                    <select
                                        class="form-selec block w-full rounded border border-gray-300 bg-gray-50 py-3 pl-12 text-sm text-gray-900 focus:border-primary-color focus:ring-primary-color"
                                        required
                                    >
                                        <option value="">Entreprise</option>
                                        <option value="">Annonce</option>
                                    </select>
                                </div>
                                <div
                                    @click="showCategory = !showCategory"
                                    class="col-span-2 flex w-full cursor-pointer items-center justify-between border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 hover:bg-gray-100"
                                >
                                    <div>
                                        <CollectionIcon
                                            class="h-6 w-6 text-gray-400"
                                        />
                                    </div>
                                    <div class="w-full whitespace-nowrap pl-4">
                                        <span
                                            v-if="
                                                selectCategory.subCategory ==
                                                'all'
                                            "
                                        >
                                            Toutes Catégories
                                        </span>
                                        <span v-else>
                                            {{
                                                selectCategory.subCategory.name
                                            }}
                                        </span>
                                    </div>
                                    <div>
                                        <ChevronDownIcon
                                            class="h-6 w-6 text-gray-400"
                                        />
                                    </div>
                                </div>
                                <div class="relative col-span-2">
                                    <span class="absolute left-3 top-3"
                                        ><SearchIcon
                                            class="h-6 w-6 text-gray-400"
                                    /></span>
                                    <input
                                        type="text"
                                        class="dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 block w-full border border-gray-300 bg-gray-50 py-3 pl-12 text-sm text-gray-900 focus:border-primary-color focus:ring-primary-color"
                                        placeholder="Que recherchez - vous ?"
                                        required
                                    />
                                </div>
                                <div class="relative col-span-2">
                                    <span class="absolute left-3 top-2"
                                        ><LocationMarkerIcon
                                            class="h-6 w-6 text-gray-400"
                                    /></span>
                                    <input
                                        type="text"
                                        class="block w-full border border-gray-300 bg-gray-50 py-3 pl-12 text-sm text-gray-900 focus:border-primary-color focus:ring-primary-color"
                                        placeholder="Situé à..."
                                        required
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        class="flex h-full w-full justify-center bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                    >
                                        <SearchIcon class="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="relative block lg:hidden" @click="open = !open">
                        <transition-group
                            enter-active-class="transition duration-500"
                            enter-from-class="opacity-0 rotate-45"
                            enter-to-class="opacity-1 rotate-0 "
                            leave-active-class="transition duration-500 absolute"
                            leave-from-class="opacity-1 rotate-0"
                            leave-to-class="opacity-0 rotate-45"
                            appear
                        >
                            <button
                                v-if="!open"
                                type="button"
                                class="dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
                                aria-label="toggle menu"
                            >
                                <MenuIcon class="h-6 w-6 fill-current" />
                            </button>
                            <button
                                v-if="open"
                                type="button"
                                class="dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
                                aria-label="toggle menu"
                            >
                                <XIcon class="h-6 w-6 fill-current" />
                            </button>
                        </transition-group>
                    </div>
                </div>

                <div class="-mx-1 hidden items-center py-2 md:mx-0 lg:flex">
                    <div class="flex items-center justify-center space-x-2">
                        <!-- <router-link
                            :to="{ name: 'alert' }"
                            class="relative"
                            title="Mes alertes"
                            ><BellIcon class="h-8 w-8" />
                             <Ping :color="'red'"/> 
                        </router-link> -->

                        <router-link
                            :to="{ name: 'favorite' }"
                            class="relative"
                            title="Mes annonces Favoris"
                            ><HeartIcon class="h-8 w-8" />
                            <!--  <Ping :color="'red'" /> -->
                        </router-link>

                        <router-link
                            :to="{ name: 'chat' }"
                            class="relative"
                            title="Mes messages"
                            ><ChatIcon class="h-8 w-8"
                        /></router-link>

                        <router-link
                            :to="{ name: 'account' }"
                            class="relative"
                            title="Mon compte"
                            ><UserIcon class="h-8 w-8"
                        /></router-link>
                    </div>
                    <router-link
                        :to="{ name: 'login' }"
                        class="add-ads mx-1 flex w-1/2 transform items-center space-x-2 rounded border-white bg-white px-3 py-2 text-center text-sm font-medium leading-5 transition-colors duration-200 hover:border hover:bg-primary-color hover:text-white md:mx-2 md:w-auto"
                    >
                        <DocumentAddIcon class="h-6 w-6" />
                        <span>Déposer une annonce</span>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>

    <div id="mobileNavbar" class="z-50">
        <Transition
            enter-active-class="transition duration-500"
            enter-from-class="opacity-0 translate-x-full"
            enter-to-class="opacity-1 translate-x-0"
            leave-active-class="transition duration-500"
            leave-from-class="opacity-1 translate-x-0"
            leave-to-class="opacity-0 translate-x-full"
        >
            <div
                class="-mt-10 items-center bg-white p-4 shadow md:flex"
                v-if="open"
            >
                <div class="-mx-1 w-full py-2">
                    <router-link
                        :to="{ name: 'login' }"
                        class="mx-1 flex w-full transform items-center space-x-2 rounded border-white bg-white px-3 py-2 text-center text-sm font-medium leading-5 text-gray-700 transition-colors duration-200 hover:border hover:bg-primary-color hover:text-white md:mx-2"
                    >
                        <DocumentAddIcon class="h-6 w-6" />
                        <span>Déposer une annonce</span>
                    </router-link>
                    <hr class="my-6 h-px border-none bg-gray-300" />
                    <!-- <router-link
                        :to="{ name: 'alert' }"
                        class="mx-1 flex w-full transform items-center space-x-2 rounded border-white bg-white px-3 py-2 text-center text-sm font-medium leading-5 text-gray-700 transition-colors duration-200 hover:border hover:bg-primary-color hover:text-white md:mx-2 md:w-auto"
                    >
                        <BellIcon class="h-6 w-6" />
                        <span>Mes Alertes</span>
                    </router-link> -->
                    <router-link
                        :to="{ name: 'favorite' }"
                        class="mx-1 flex w-full transform items-center space-x-2 rounded border-white bg-white px-3 py-2 text-center text-sm font-medium leading-5 text-gray-700 transition-colors duration-200 hover:border hover:bg-primary-color hover:text-white md:mx-2 md:w-auto"
                    >
                        <HeartIcon class="h-6 w-6" />
                        <span>Mes Favoris</span>
                    </router-link>
                    <router-link
                        :to="{ name: 'chat' }"
                        class="mx-1 flex w-full transform items-center space-x-2 rounded border-white bg-white px-3 py-2 text-center text-sm font-medium leading-5 text-gray-700 transition-colors duration-200 hover:border hover:bg-primary-color hover:text-white md:mx-2 md:w-auto"
                    >
                        <ChatIcon class="h-6 w-6" />
                        <span>Mes Messages</span>
                    </router-link>
                    <hr class="my-6 h-px border-none bg-gray-300" />
                    <router-link
                        :to="{ name: 'account' }"
                        class="mx-1 flex w-full transform items-center space-x-2 rounded border-white bg-white px-3 py-2 text-center text-sm font-medium leading-5 text-gray-700 transition-colors duration-200 hover:border hover:bg-primary-color hover:text-white md:mx-2 md:w-auto"
                    >
                        <UserIcon class="h-6 w-6" />
                        <span>Mon Compte</span>
                    </router-link>
                </div>
            </div>
        </Transition>
    </div>
</template>
