<script setup>
import { ref } from "vue";
import { XIcon, MenuIcon } from "@heroicons/vue/solid";

const open = ref(false);
</script>

<template>
    <nav class="bg-blue-500 fixed top-0 w-full shadow-lg dark:bg-gray-800">
        <div class="container mx-auto px-6 py-3">
            <div
                class="flex flex-col md:flex-row md:items-center md:justify-between"
            >
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <router-link
                        :to="{ name: 'home' }"
                            class="transform text-2xl font-bold text-white transition-colors duration-200 hover:text-gray-100 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
                            >Elodis Sarl</router-link
                        >
                    </div>

                    <!-- Mobile menu button -->
                    <div class="md:hidden block relative" @click="open = !open">
                        
                        <transition-group
                                enter-active-class="transition duration-500"
                                enter-from-class="opacity-0 rotate-45"
                                enter-to-class="opacity-1 rotate-0 "
                                leave-active-class="transition duration-500 absolute"
                                leave-from-class="opacity-1 rotate-0"
                                leave-to-class="opacity-0 rotate-45"
                                appear
                            >
                                <button
                                    v-if="!open"
                                    type="button"
                                    class="text-white  hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
                                    aria-label="toggle menu"
                                >
                                    <MenuIcon
                                        class="h-6 w-6 fill-current"
                                    />
                                </button>
                                <button
                                    v-if="open"
                                    type="button"
                                    class="text-white  hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
                                    aria-label="toggle menu"
                                >
                                    <XIcon
                                        class="h-6 w-6 fill-current"
                                    />
                                </button>
                        </transition-group>
                        
                    </div>
                </div>


                <div class="-mx-1 hidden items-center py-2 md:mx-0 md:flex">
                    <router-link
                        :to="{ name: 'login' }"
                        class="mx-1 block w-1/2 transform rounded-2xl bg-white px-3 py-2 text-center text-sm font-medium leading-5 text-blue-500 transition-colors duration-200 hover:bg-blue-500 hover:text-white hover:border border-white md:mx-2 md:w-auto"
                        >Se Connecter</router-link
                    >
                    <router-link :to="{name: 'register'}"
                        class="mx-1 block w-1/2 transform rounded-2xl bg-blue-500 border border-white  px-3 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-200 hover:bg-blue-600 md:mx-0 md:w-auto"
                        >S'inscrire</router-link
                    >
                </div>
            </div>
        </div>
    </nav>
    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <Transition
        enter-active-class="transition duration-500"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-1 translate-x-0"
        leave-active-class="transition duration-500"
        leave-from-class="opacity-1 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
    >
        <div class="items-center shadow mt-14 bg-white p-4  md:flex" v-if="open">
            <div class="-mx-1 flex items-center py-2 md:mx-0">
                <router-link
                        :to="{ name: 'login' }"
                    class="mx-1 block w-1/2 transform rounded-md bg-gray-500 px-3 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-200 hover:bg-blue-600 md:mx-2 md:w-auto"
                    >Se Connecter</router-link 
                >
                <router-link :to="{name: 'register'}"
                    class="mx-1 block w-1/2 transform rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-200 hover:bg-blue-600 md:mx-0 md:w-auto"
                    >S'inscrire</router-link 
                >
            </div>
        </div>
    </Transition>
</template>
