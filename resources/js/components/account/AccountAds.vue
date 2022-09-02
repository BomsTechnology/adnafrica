<script setup>
import {
    TableCellsIcon,
    ChevronDownIcon,
    ArrowTrendingDownIcon,
    ArrowTrendingUpIcon,
    TrashIcon,
} from "@heroicons/vue/24/solid";
import useAnnouncement from "@/services/announcementServices";
import SelectFilter from "@/components/SelectFilter.vue";
import useCategory from "@/services/categoryServices";
import { computed, reactive, watch, onMounted } from "vue";

const props = defineProps({
    userId: String,
});
const {
    chks,
    chkAll,
    errors,
    loading,
    checkAll,
    cleanErrors,
    announcements,
    getAnnouncementUser,
    deleteAnnouncements,
    toogleDeleteArray,
} = useAnnouncement();
const { categories, getCategories } = useCategory();
const open = reactive({
    online: true,
    expired: false,
});

onMounted(async () => {
    await getAnnouncementUser(props.userId);
    await getCategories();
});

watch(props, async (newProps, oldProps) => {
    await getAnnouncementUser(newProps.userId);
    await getCategories();
});

const search = reactive({ words: "", category: "" });

const filteredAnnouncement = computed(() => {
    if (search.category) {
        return announcements.value.filter((announcement) =>
            announcement.title
                .toLowerCase()
                .includes(
                    search.words.toLowerCase() &&
                        announcement.category.id == search.category
                )
        );
    } else {
        return announcements.value.filter((announcement) =>
            announcement.title
                .toLowerCase()
                .includes(search.words.toLowerCase())
        );
    }
});

function changeTab(tab) {
    switch (tab) {
        case "expired":
            open.online = false;
            open.expired = true;
            break;
        case "online":
            open.expired = false;
            open.online = true;
            break;
    }
}
</script>

<template>
    <div class="mt-4 border-b border-gray-200">
        <ul
            class="-mb-px flex flex-wrap bg-white text-center text-sm font-medium text-gray-900"
        >
            <li class="mr-2">
                <button
                    @click="changeTab('online')"
                    type="button"
                    :class="[
                        open.online
                            ? 'inline-flex  border-2 border-primary-color p-4 text-primary-color'
                            : 'group inline-flex  border-2 border-transparent p-4 hover:border-secondary-color hover:text-secondary-color',
                    ]"
                >
                    <span
                        ><ArrowTrendingUpIcon
                            :class="[
                                open.online
                                    ? 'mr-2 h-5 w-5 text-primary-color'
                                    : 'mr-2 h-5 w-5 text-gray-700 group-hover:text-secondary-color',
                            ]"
                    /></span>
                    <span class="hidden md:block">Annonces en ligne</span> (0)
                </button>
            </li>
            <li class="mr-2">
                <button
                    @click="changeTab('expired')"
                    type="button"
                    :class="[
                        open.expired
                            ? 'inline-flex  border-2 border-primary-color p-4 text-primary-color'
                            : 'group inline-flex  border-2 border-transparent p-4 hover:border-secondary-color hover:text-secondary-color',
                    ]"
                    aria-current="page"
                >
                    <span
                        ><ArrowTrendingDownIcon
                            :class="[
                                open.expired
                                    ? 'mr-2 h-5 w-5 text-primary-color'
                                    : 'mr-2 h-5 w-5 text-gray-700 group-hover:text-secondary-color',
                            ]"
                    /></span>
                    <span class="hidden md:block">Annonces expirées </span> (0)
                </button>
            </li>
        </ul>
    </div>
    <Error :errors="errors" @cleanErrors="cleanErrors" />
    <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
        <div class="items-center justify-between p-4 lg:flex">
            <div
                class="mt-1 items-center space-y-1 lg:flex lg:space-y-0 lg:space-x-2"
            >
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <div
                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                        <svg
                            class="dark:text-gray-400 h-5 w-5 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="table-search"
                        v-model="search.words"
                        class="dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 block w-full rounded border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 lg:w-80"
                        placeholder="Search for items"
                    />
                </div>
                <div class="">
                    <SelectFilter
                        v-model="search.category"
                        :data="categories"
                        :placeholder="'Select category'"
                        :subCategory="true"
                        :className="'w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm'"
                    />
                </div>
            </div>
            <div class="mt-1 flex justify-end lg:mt-0 lg:block">
                <button
                    type="button"
                    title="delete"
                    @click="deleteAnnouncements()"
                    class="flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"
                >
                    <TrashIcon class="h-6 w-6" />
                    <span class="hidden text-sm font-thin lg:block"
                        >Supprimer</span
                    >
                </button>
            </div>
        </div>
        <table
            class="dark:text-gray-400 w-full text-left text-sm text-gray-500"
        >
            <thead
                class="dark:bg-gray-700 dark:text-gray-400 bg-gray-50 text-xs uppercase text-gray-700"
            >
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input
                                @change="checkAll()"
                                v-model="chkAll"
                                id="checkbox-all-search"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                            />
                            <label for="checkbox-all-search" class="sr-only"
                                >checkbox</label
                            >
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">Ads title</th>
                    <th scope="col" class="px-6 py-3">Category</th>
                    <th scope="col" class="px-6 py-3">Country</th>
                    <th scope="col" class="px-6 py-3">Price</th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="loading == 1">
                    <td colspan="6">
                        <div
                            class="flex w-full items-center justify-center p-3 text-center"
                        >
                            <Spin
                                :width="'w-10'"
                                :height="'h-10'"
                                :color="'text-primary-color'"
                            />
                        </div>
                    </td>
                </tr>
                <tr
                    v-else-if="filteredAnnouncement.length != 0"
                    v-for="(announcement, index) in filteredAnnouncement"
                    :key="announcement.id"
                    class="border-b bg-white hover:bg-gray-50"
                >
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input
                                v-model="chks[index].value"
                                @change="toogleDeleteArray(index)"
                                id="checkbox-table-search-1"
                                type="checkbox"
                                class="-600 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                            />
                            <label for="checkbox-table-search-1" class="sr-only"
                                >checkbox</label
                            >
                        </div>
                    </td>
                    <th
                        scope="row"
                        class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                    >
                        {{ announcement.title }}
                    </th>
                    <td class="px-6 py-4">
                        {{ announcement.category.name }}
                    </td>

                    <td class="px-6 py-4">
                        <img
                            :src="announcement.country.image"
                            :alt="announcement.country.name"
                            class="h-5 w-8 object-cover"
                        />
                    </td>
                    <td class="px-6 py-4">
                        {{ announcement.price }}
                        {{ announcement.currency.symbol }}
                    </td>
                    <td class="px-6 py-4 text-right">
                        <router-link
                            :to="{
                                name: 'ads.single',
                                params: {
                                    id: announcement.id,
                                    slug: announcement.slug,
                                },
                            }"
                            class="dark:text-blue-500 font-medium text-blue-600 hover:underline"
                            >view</router-link
                        >
                    </td>
                </tr>
                <tr v-else>
                    <td colspan="6" class="p-3 text-center text-2xl font-bold">
                        <span>NO ADS</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
