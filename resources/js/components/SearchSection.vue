<script setup>
import {
    ChevronDownIcon,
    SearchIcon,
    LocationMarkerIcon,
    CollectionIcon,
    ViewBoardsIcon,
} from "@heroicons/vue/solid";
</script>

<template>
    <form class="mx-auto w-full rounded bg-white p-8 shadow-md lg:w-[1000px]">
        <div class="mb-6 grid grid-cols-2 gap-2 lg:grid-cols-9">
            <div class="relative lg:col-span-2">
                <span class="absolute left-3 top-3"
                    ><ViewBoardsIcon class="h-6 w-6 text-gray-400"
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
                class="flex w-full cursor-pointer items-center justify-between rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 hover:bg-gray-100 lg:col-span-2"
            >
                <div>
                    <CollectionIcon class="h-6 w-6 text-gray-400" />
                </div>
                <div class="w-full pl-4">Catégorie</div>
                <div>
                    <ChevronDownIcon class="h-6 w-6 text-gray-400" />
                </div>
            </div>
            <div class="relative lg:col-span-2">
                <span class="absolute left-3 top-3"
                    ><SearchIcon class="h-6 w-6 text-gray-400"
                /></span>
                <input
                    type="text"
                    class="block w-full rounded border border-gray-300 bg-gray-50 py-3 pl-12 text-sm text-gray-900 focus:border-primary-color focus:ring-primary-color"
                    placeholder="Que recherchez - vous ?"
                    required
                />
            </div>
            <div class="relative lg:col-span-2">
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
            <div class="col-span-2 lg:col-span-1">
                <button
                    type="submit"
                    class="flex w-full justify-center rounded bg-primary-color px-5 py-3 text-center text-sm font-medium text-white hover:bg-secondary-color focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    <SearchIcon class="h-6 w-6" />
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
