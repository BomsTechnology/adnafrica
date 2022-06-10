<script setup>
import {
    StarIcon,
    LocationMarkerIcon,
    DotsVerticalIcon,
} from "@heroicons/vue/solid";
</script>

<template>
    <div class="px-10 md:px-28">
        <div
            class="flex h-48 w-full items-center justify-between rounded-lg bg-white px-8"
        >
            <div class="flex items-center space-x-2 py-3 px-2">
                <div class="mr-2 h-28 w-28 overflow-hidden rounded-full">
                    <img
                        src="/images/icone/default_avatar.svg"
                        class="h-full w-full bg-cover object-cover"
                        alt=""
                    />
                </div>
                <div>
                    <h2 class="text-xl font-bold text-gray-800">Boms</h2>
                    <h3 class="mt-1 text-sm font-semibold text-gray-600">
                        A rejoint adnafrica en Janvier 2022
                    </h3>
                    <h4
                        class="mt-1 flex items-center space-x-1 text-xs font-light text-gray-400"
                    >
                        <LocationMarkerIcon class="h-3 w-3" />
                        <span>Douala Bonamousadi</span>
                    </h4>
                </div>
            </div>
            <div class="flex flex-col justify-center">
                <button
                    type="button"
                    title="options"
                    class="flex items-center justify-center rounded border border-primary-color p-2 text-primary-color hover:bg-primary-color hover:text-white"
                >
                    <DotsVerticalIcon class="h-6 w-6" />
                    <span class="text-sm font-thin">Options</span>
                </button>
                <span class="mt-1 flex">
                    <StarIcon class="h-4 w-4 text-orange-400" />
                    <StarIcon class="h-4 w-4 text-orange-400" /><StarIcon
                        class="h-4 w-4 text-orange-400"
                    /><StarIcon class="h-4 w-4 text-orange-400" /><StarIcon
                        class="h-4 w-4 text-gray-400"
                    />
                    <span
                        class="ml-1 text-sm font-semibold text-gray-500 hover:underline"
                        >10 Avis</span
                    >
                </span>
            </div>
        </div>

        <div class="border-b border-gray-200">
            <ul
                class="-mb-px flex flex-wrap text-center text-sm font-medium text-gray-900"
            >
                <li class="mr-2">
                    <a
                        href="#"
                        class="group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-secondary-color hover:text-secondary-color"
                    >
                        <svg
                            class="mr-2 h-5 w-5 text-gray-700 group-hover:text-secondary-color"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                clip-rule="evenodd"
                            ></path></svg
                        >Profile
                    </a>
                </li>
                <li class="mr-2">
                    <a
                        href="#"
                        class="active group inline-flex rounded-t-lg border-b-2 border-primary-color p-4 text-primary-color"
                        aria-current="page"
                    >
                        <svg
                            class="mr-2 h-5 w-5 text-primary-color"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            ></path></svg
                        >Dashboard
                    </a>
                </li>
                <li class="mr-2">
                    <a
                        href="#"
                        class="group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-secondary-color hover:text-secondary-color"
                    >
                        <svg
                            class="mr-2 h-5 w-5 text-gray-700 group-hover:text-secondary-color"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                            ></path></svg
                        >Settings
                    </a>
                </li>
                <li class="mr-2">
                    <a
                        href="#"
                        class="group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-secondary-color hover:text-secondary-color"
                    >
                        <svg
                            class="mr-2 h-5 w-5 text-gray-700 group-hover:text-secondary-color"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                            <path
                                fill-rule="evenodd"
                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                clip-rule="evenodd"
                            ></path></svg
                        >Contacts
                    </a>
                </li>
            </ul>
        </div>
        <div class="h-[1000px]"></div>
    </div>
</template>
