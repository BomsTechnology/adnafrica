<script setup>
import { ref } from "vue";

const open = ref(false);
</script>

<template>
    <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container mx-auto px-6 py-3">
            <div
                class="flex flex-col md:flex-row md:items-center md:justify-between"
            >
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <a
                            class="transform text-2xl font-bold text-gray-800 transition-colors duration-200 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
                            href="#"
                            >Brand</a
                        >
                    </div>

                    <!-- Mobile menu button -->
                    <div class="flex md:hidden" @click="open = !open">
                        <button
                            type="button"
                            class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                class="h-6 w-6 fill-current"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Search input on desktop screen -->
                <div class="mx-10 hidden md:block">
                    <div class="relative">
                        <span
                            class="absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                            <svg
                                class="h-5 w-5 text-gray-400"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                        </span>

                        <input
                            type="text"
                            class="w-full rounded-md border bg-white py-2 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                            placeholder="Search"
                        />
                    </div>
                </div>

                <div class="-mx-1 hidden items-center py-2 md:mx-0 md:flex">
                    <a
                        class="mx-1 block w-1/2 transform rounded-md bg-gray-500 px-3 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-200 hover:bg-blue-600 md:mx-2 md:w-auto"
                        href="#"
                        >Login</a
                    >
                    <a
                        class="mx-1 block w-1/2 transform rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-200 hover:bg-blue-600 md:mx-0 md:w-auto"
                        href="#"
                        >Join free</a
                    >
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div class="items-center md:flex" v-if="open">
                    <div class="-mx-1 flex items-center py-2 md:mx-0">
                        <a
                            class="mx-1 block w-1/2 transform rounded-md bg-gray-500 px-3 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-200 hover:bg-blue-600 md:mx-2 md:w-auto"
                            href="#"
                            >Login</a
                        >
                        <a
                            class="mx-1 block w-1/2 transform rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-200 hover:bg-blue-600 md:mx-0 md:w-auto"
                            href="#"
                            >Join free</a
                        >
                    </div>

                    <!-- Search input on mobile screen -->
                    <div class="mt-3 md:hidden">
                        <div class="relative">
                            <span
                                class="absolute inset-y-0 left-0 flex items-center pl-3"
                            >
                                <svg
                                    class="h-5 w-5 text-gray-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </span>

                            <input
                                type="text"
                                class="w-full rounded-md border bg-white py-2 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
