<script setup>
import { TrashIcon } from "@heroicons/vue/solid";
import { reactive, ref, onMounted, computed } from "vue";
import useCategory from "@/services/categoryServices";
import Spin from "@/components/Spin.vue";

const {
    createCategory,
    errors,
    cleanErrors,
    loading,
    getCategories,
    categories,
} = useCategory();
const category = reactive({
    name: "",
    image: "",
    parent: null,
});
const image = ref(null);
const search = ref("");
const handleImage = async () => {
    category.image = image.value.files[0];
};

const storeCategory = async () => {
    let data = new FormData();
    data.append("name", category.name);
    data.append("image", category.image);
    data.append("parent", category.parent);
    await createCategory(data);
    await getCategories();
};

onMounted(async () => {
    await getCategories();
    console.log(categories.value);
});

const filteredCategory = computed(() =>
    categories.value.filter((category) =>
        category.name.toLowerCase().includes(search.value.toLowerCase())
    )
);
</script>

<template>
    <div class="h-full p-8">
        <h1 class="text-3xl font-bold">Category</h1>
        <div class="space-x-0 space-y-4 py-6 lg:flex lg:space-x-4 lg:space-y-0">
            <div class="bg-white p-6 shadow-md sm:rounded-lg lg:w-[40%]">
                <h1
                    class="text-xl font-semibold underline decoration-primary-color decoration-dotted decoration-2 underline-offset-2"
                >
                    Add Category
                </h1>
                <Error :errors="errors" @cleanErrors="cleanErrors" />
                <form class="mt-4" @submit.prevent="storeCategory()">
                    <div class="">
                        <label
                            for="name"
                            class="block text-sm font-medium text-gray-700"
                            >Category Name</label
                        >
                        <input
                            type="text"
                            id="name"
                            required
                            v-model="category.name"
                            autocomplete="given-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div class="mt-2">
                        <label
                            for="category"
                            class="block text-sm font-medium text-gray-700"
                            >Parent</label
                        >
                        <select
                            id="category"
                            required
                            v-model="category.parent"
                            class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                            <option value="null">no parent</option>
                            <option
                                v-for="category in categories"
                                :key="category.id"
                                :value="category.id"
                            >
                                {{ category.name }}
                            </option>
                        </select>
                    </div>

                    <div class="mt-2">
                        <label
                            class="mb-2 block text-sm font-medium text-gray-900"
                            for="file_input"
                            >Image</label
                        >
                        <input
                            ref="image"
                            required
                            @change="handleImage()"
                            class="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:outline-none"
                            id="file_input"
                            type="file"
                        />
                    </div>
                    <div class="mt-6">
                        <button
                            type="button"
                            v-if="loading == 1"
                            disabled
                            class="flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
                        >
                            <Spin />
                        </button>
                        <button
                            v-else
                            type="submit"
                            class="w-full transform rounded-md bg-primary-color px-4 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
            <div class="lg:w-[60%]">
                <div
                    class="relative w-full overflow-x-auto bg-white shadow-md sm:rounded-lg"
                >
                    <div class="items-center justify-between p-4 lg:flex">
                        <div
                            class="mt-1 items-center space-y-1 lg:flex lg:space-y-0 lg:space-x-2"
                        >
                            <label for="table-search" class="sr-only"
                                >Search</label
                            >
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
                                    v-model="search"
                                    class="dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 block w-full rounded border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 lg:w-80"
                                    placeholder="Search for items"
                                />
                            </div>
                        </div>
                        <div class="mt-1 flex justify-end lg:mt-0 lg:block">
                            <button
                                type="button"
                                title="options"
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
                                            id="checkbox-all-search"
                                            type="checkbox"
                                            class="dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                                        />
                                        <label
                                            for="checkbox-all-search"
                                            class="sr-only"
                                            >checkbox</label
                                        >
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">Image</th>
                                <th scope="col" class="px-6 py-3">Name</th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="loading == 1">
                                <td colspan="4">
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
                            <template
                                v-else-if="filteredCategory.length != 0"
                                v-for="category in filteredCategory"
                                :key="category.id"
                            >
                                <tr class="border-b bg-white hover:bg-gray-50">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input
                                                id="checkbox-table-search-1"
                                                type="checkbox"
                                                class="dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                                            />
                                            <label
                                                for="checkbox-table-search-1"
                                                class="sr-only"
                                                >checkbox</label
                                            >
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <img
                                            :src="category.image"
                                            :alt="category.name"
                                            class="h-14 w-14 object-cover"
                                        />
                                    </td>
                                    <th
                                        scope="row"
                                        class="dark:text-white whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                                    >
                                        {{ category.name }}
                                    </th>
                                    <td class="px-6 py-4 text-right">
                                        <a
                                            href="#"
                                            class="dark:text-blue-500 font-medium text-blue-600 hover:underline"
                                            >Edit</a
                                        >
                                    </td>
                                </tr>
                                <tr
                                    v-if="category.children.length != 0"
                                    v-for="subCategory in category.children"
                                    :key="subCategory.id"
                                >
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input
                                                id="checkbox-table-search-1"
                                                type="checkbox"
                                                class="dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                                            />
                                            <label
                                                for="checkbox-table-search-1"
                                                class="sr-only"
                                                >checkbox</label
                                            >
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">-</td>
                                    <th
                                        scope="row"
                                        class="dark:text-white whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                                    >
                                        {{ subCategory.name }}
                                    </th>
                                    <td class="px-6 py-4 text-right">
                                        <a
                                            href="#"
                                            class="dark:text-blue-500 font-medium text-blue-600 hover:underline"
                                            >Edit</a
                                        >
                                    </td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td
                                    colspan="4"
                                    class="p-3 text-center text-2xl font-bold"
                                >
                                    <span>NO CATEGORY</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
