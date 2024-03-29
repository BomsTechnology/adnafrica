<script setup>
import {
    TableCellsIcon,
    ChevronDownIcon,
    PlusCircleIcon,
    TrashIcon,
} from "@heroicons/vue/24/solid";
import useAnnouncement from "@/composables/announcementServices";
import useCategory from "@/composables/categoryServices";
import { computed, onMounted, reactive, ref } from "vue";
import SelectFilter from "@/components/SelectFilter.vue";

const { categories, getCategories } = useCategory();
const {
    chks,
    chkAll,
    errors,
    loading,
    checkAll,
    cleanErrors,
    announcements,
    getAnnouncements,
    deleteAnnouncements,
    toogleDeleteArray,
} = useAnnouncement();
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

onMounted(async () => {
    await getAnnouncements();
    await getCategories();
});
</script>

<template>
    <div class="h-full p-8">
        <h1 class="text-3xl font-bold">Ads</h1>
        <div
            class="mt-4 flex items-center justify-end border-b border-gray-200 px-2 py-3"
        >
            <router-link
                :to="{ name: 'admin.ads.create' }"
                class="flex items-end space-x-2 rounded bg-primary-color px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-secondary-color focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                <PlusCircleIcon class="h-5 w-5" />
                <span>Add Ads</span>
            </router-link>
        </div>
        <Error :errors="errors" @cleanErrors="cleanErrors" />
        <div
            class="relative w-full overflow-x-auto bg-white shadow-md sm:rounded-lg"
        >
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
                                <label
                                    for="checkbox-table-search-1"
                                    class="sr-only"
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
                        <td
                            colspan="6"
                            class="p-3 text-center text-2xl font-bold"
                        >
                            <span>NO ADS</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
