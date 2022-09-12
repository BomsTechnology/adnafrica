<script setup>
import { useRoute } from "vue-router";
import { PhotoIcon, HeartIcon } from "@heroicons/vue/24/solid";
const route = useRoute();
const items = [1, 2, 3];
</script>
<template>
    <div class="animate-pulse">
        <div class="flex items-center space-x-2">
            <div class="mb-4 h-2.5 w-52 rounded-full bg-gray-200"></div>

            <div class="mb-4 h-2.5 w-36 rounded-full bg-gray-200"></div>
        </div>

        <div
            :class="[
                route.query.gender == 'ads'
                    ? 'grid-cols-2 gap-4 space-y-4 py-8 lg:grid lg:space-y-0 lg:px-3'
                    : 'space-y-4 py-8 lg:px-3',
            ]"
        >
            <div
                v-for="item in items"
                :key="item"
                class="w-full items-center rounded-lg border bg-gray-100 shadow lg:flex lg:h-36"
            >
                <div
                    class="relative h-36 w-full overflow-hidden rounded-t-lg lg:h-full lg:w-60 lg:rounded-l-lg lg:rounded-tr-none"
                >
                    <PhotoIcon class="h-full w-full text-gray-200" />
                </div>
                <div class="flex h-full grow justify-between px-4">
                    <div class="flex h-full flex-col justify-between py-2">
                        <div
                            class="mb-4 h-2.5 w-60 rounded-full bg-gray-200"
                        ></div>

                        <div
                            class="mb-4 h-2.5 w-32 rounded-full bg-gray-200"
                        ></div>

                        <div
                            class="mb-4 h-2.5 w-48 rounded-full bg-gray-200"
                        ></div>
                        <div
                            class="mb-4 h-2.5 w-96 rounded-full bg-gray-200"
                        ></div>
                    </div>
                    <div class="flex h-full items-end py-4">
                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
                        >
                            <HeartIcon
                                class="h-7 w-7 bg-transparent text-gray-200"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
