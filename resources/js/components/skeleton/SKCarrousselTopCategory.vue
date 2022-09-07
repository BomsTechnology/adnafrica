<script setup>
import {
    PhotoIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/vue/24/solid";
</script>
<template>
    <div class="animate-pulse">
        <div class="mb-4 h-2.5 w-52 rounded-full bg-gray-200"></div>
        <div class="relative">
            <div class="absolute top-1/2 left-0 rounded-full bg-gray-300 p-2">
                <ChevronLeftIcon class="h-8 w-8 text-gray-100" />
            </div>
            <div class="absolute right-0 top-1/2 rounded-full bg-gray-300 p-2">
                <ChevronRightIcon class="h-8 w-8 text-gray-100" />
            </div>

            <div
                class="grid w-full grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5"
            >
                <div
                    class="h-36 w-36 overflow-hidden rounded-lg bg-gray-200 shadow lg:h-56 lg:w-56"
                >
                    <PhotoIcon class="h-full w-full text-gray-100" />
                </div>
                <div
                    class="h-36 w-36 overflow-hidden rounded-lg bg-gray-200 shadow lg:h-56 lg:w-56"
                >
                    <PhotoIcon class="h-full w-full text-gray-100" />
                </div>
                <div
                    class="hidden h-36 w-36 overflow-hidden rounded-lg bg-gray-200 shadow md:block lg:h-56 lg:w-56"
                >
                    <PhotoIcon class="h-full w-full text-gray-100" />
                </div>
                <div
                    class="hidden h-36 w-36 overflow-hidden rounded-lg bg-gray-200 shadow lg:block lg:h-56 lg:w-56"
                >
                    <PhotoIcon class="h-full w-full text-gray-100" />
                </div>
                <div
                    class="hidden h-36 w-36 overflow-hidden rounded-lg bg-gray-200 shadow lg:block lg:h-56 lg:w-56"
                >
                    <PhotoIcon class="h-full w-full text-gray-100" />
                </div>
            </div>
        </div>
    </div>
</template>
