<script setup>
import {
    TableIcon,
    ChevronDownIcon,
    TrendingDownIcon,
    TrendingUpIcon,
    TrashIcon,
} from "@heroicons/vue/solid";
import { reactive } from "vue";
const open = reactive({
    online: true,
    expired: false,
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
                        ><TrendingUpIcon
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
                        ><TrendingDownIcon
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
                            class="h-5 w-5 text-gray-500 dark:text-gray-400"
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
                        class="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:w-80"
                        placeholder="Search for items"
                    />
                </div>
                <div
                    class="flex cursor-pointer items-center justify-between rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 hover:bg-gray-100"
                >
                    <div>
                        <TableIcon class="h-5 w-5 text-gray-400" />
                    </div>
                    <div class="mx-4">Catégorie</div>
                    <div>
                        <ChevronDownIcon class="h-5 w-5 text-gray-400" />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        class="block w-full rounded bg-primary-color px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-secondary-color focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Rechercher
                    </button>
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
            class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
        >
            <thead
                class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
            >
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input
                                id="checkbox-all-search"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                            />
                            <label for="checkbox-all-search" class="sr-only"
                                >checkbox</label
                            >
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">Product name</th>
                    <th scope="col" class="px-6 py-3">Color</th>
                    <th scope="col" class="px-6 py-3">Category</th>
                    <th scope="col" class="px-6 py-3">Price</th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input
                                id="checkbox-table-search-1"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                            />
                            <label for="checkbox-table-search-1" class="sr-only"
                                >checkbox</label
                            >
                        </div>
                    </td>
                    <th
                        scope="row"
                        class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Sliver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4 text-right">
                        <a
                            href="#"
                            class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >Edit</a
                        >
                    </td>
                </tr>
                <tr
                    class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input
                                id="checkbox-table-search-2"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                            />
                            <label for="checkbox-table-search-2" class="sr-only"
                                >checkbox</label
                            >
                        </div>
                    </td>
                    <th
                        scope="row"
                        class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                        Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">White</td>
                    <td class="px-6 py-4">Laptop PC</td>
                    <td class="px-6 py-4">$1999</td>
                    <td class="px-6 py-4 text-right">
                        <a
                            href="#"
                            class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >Edit</a
                        >
                    </td>
                </tr>
                <tr
                    class="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input
                                id="checkbox-table-search-3"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                            />
                            <label for="checkbox-table-search-3" class="sr-only"
                                >checkbox</label
                            >
                        </div>
                    </td>
                    <th
                        scope="row"
                        class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4">Accessories</td>
                    <td class="px-6 py-4">$99</td>
                    <td class="px-6 py-4 text-right">
                        <a
                            href="#"
                            class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >Edit</a
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
