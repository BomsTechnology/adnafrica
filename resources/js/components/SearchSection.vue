<script setup>
import {
    TableIcon,
    ChevronDownIcon,
    SearchIcon,
    LocationMarkerIcon,
} from "@heroicons/vue/solid";
</script>

<template>
    <form class="mx-auto w-full rounded bg-white p-8 shadow-md lg:w-[1000px]">
        <div class="mb-6 grid grid-cols-2 gap-2 lg:grid-cols-4">
            <div
                class="flex w-full cursor-pointer items-center justify-between rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 hover:bg-gray-100"
            >
                <div>
                    <TableIcon class="h-6 w-6 text-gray-400" />
                </div>
                <div>Catégorie</div>
                <div>
                    <ChevronDownIcon class="h-6 w-6 text-gray-400" />
                </div>
            </div>
            <div class="relative">
                <span class="absolute left-3 top-2"
                    ><SearchIcon class="h-6 w-6 text-gray-400"
                /></span>
                <input
                    type="text"
                    class="block w-full rounded border border-gray-300 bg-gray-50 py-3 pl-12 text-sm text-gray-900 focus:border-primary-color focus:ring-primary-color dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Que recherchez - vous ?"
                    required
                />
            </div>
            <div class="relative">
                <span class="absolute left-3 top-2"
                    ><LocationMarkerIcon class="h-6 w-6 text-gray-400"
                /></span>
                <input
                    type="text"
                    class="block w-full rounded border border-gray-300 bg-gray-50 py-3 pl-12 text-sm text-gray-900 focus:border-primary-color focus:ring-primary-color"
                    placeholder="Situé à..."
                    required
                />
            </div>
            <div>
                <button
                    type="submit"
                    class="block w-full rounded bg-primary-color px-5 py-3 text-center text-sm font-medium text-white hover:bg-secondary-color focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    Rechercher
                </button>
            </div>
        </div>
        <div class="flex items-center justify-center space-x-6">
            <div class="flex items-center justify-center space-x-2">
                <input
                    type="radio"
                    class="form-radio text-primary-color focus:border-primary-color focus:ring-primary-color"
                />
                <h1 class="text-gray-500">Offres</h1>
            </div>
            <div class="flex items-center justify-center space-x-2">
                <input
                    type="radio"
                    class="form-radio text-primary-color focus:border-primary-color focus:ring-primary-color"
                />
                <h1 class="text-gray-500">Demande</h1>
            </div>
        </div>
    </form>
</template>
