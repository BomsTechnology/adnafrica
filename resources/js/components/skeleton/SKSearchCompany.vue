<script setup>
import { useRoute } from "vue-router";
import { PhotoIcon } from "@heroicons/vue/24/solid";
const route = useRoute();
const items = [1, 2, 3];
</script>
<template>
    <div class="animate-pulse">
        <div
            :class="[
                route.query.gender == 'company'
                    ? 'flex items-center justify-start space-x-2'
                    : 'flex items-center justify-end space-x-2',
            ]"
        >
            <div class="mb-4 h-2.5 w-52 rounded-full bg-gray-200"></div>

            <div class="mb-4 h-2.5 w-36 rounded-full bg-gray-200"></div>
        </div>
        <div
            :class="[
                route.query.gender == 'company'
                    ? 'grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-4 lg:px-3'
                    : 'grid grid-cols-1 gap-4 py-8 lg:grid-cols-2 lg:px-3',
            ]"
        >
            <div
                v-for="item in items"
                :key="item"
                class="flex h-60 flex-col items-center justify-center rounded bg-gray-100 shadow"
            >
                <div class="h-32 w-32 overflow-hidden">
                    <PhotoIcon class="h-full w-full text-gray-200" />
                </div>

                <div class="mb-4 h-2.5 w-52 rounded-full bg-gray-200"></div>
                <div class="mb-4 h-2.5 w-52 rounded-full bg-gray-200"></div>
            </div>
        </div>
    </div>
</template>
