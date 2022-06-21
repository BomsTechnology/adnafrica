<script setup>
import {
    SearchIcon,
    TrashIcon,
    PaperAirplaneIcon,
    HashtagIcon,
    LocationMarkerIcon,
    ChatAlt2Icon,
    DotsCircleHorizontalIcon,
} from "@heroicons/vue/solid";
import { reactive } from "vue";
const open = reactive({
    chat: true,
    conversation: false,
    detail: false,
});

function changeView(view) {
    switch (view) {
        case "chat":
            open.conversation = false;
            open.detail = false;
            open.chat = true;
            break;
        case "conversation":
            open.chat = false;
            open.detail = false;
            open.conversation = true;
            break;
        case "detail":
            open.conversation = false;
            open.chat = false;
            open.detail = true;
            break;
    }
}
</script>

<template>
    <div class="block lg:hidden">
        <Goback />
    </div>

    <section class="px-4 md:px-28">
        <div
            class="relative mb-10 flex h-[600px] w-full rounded-lg bg-white shadow-lg"
        >
            <!-- start  mobile button change view -->
            <button
                @click="changeView('conversation')"
                type="button"
                :class="[
                    open.conversation
                        ? 'absolute -left-2 top-2 z-10 rounded-full border border-primary-color bg-primary-color p-2 text-white shadow lg:hidden'
                        : 'absolute -left-2 top-2 z-10 rounded-full border border-primary-color bg-white p-2 text-primary-color shadow lg:hidden',
                ]"
            >
                <ChatAlt2Icon class="h-5 w-5" />
            </button>
            <button
                @click="changeView('detail')"
                type="button"
                :class="[
                    open.detail
                        ? 'absolute -right-2 top-2 z-10 rounded-full border border-white bg-primary-color  p-2 text-primary-color shadow lg:hidden'
                        : 'absolute -right-2 top-2 z-10 rounded-full border border-primary-color bg-white p-2 text-primary-color shadow lg:hidden',
                ]"
            >
                <DotsCircleHorizontalIcon class="h-5 w-5" />
            </button>
            <!-- end  mobile button change view -->

            <!-- start conversation mobile view -->
            <div v-if="open.conversation" class="w-full overflow-auto py-4">
                <div class="relative mx-2">
                    <div
                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                        <SearchIcon class="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        id="simple-search"
                        class="block w-full rounded-full border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Rechercher..."
                        required
                    />
                </div>
                <div class="mt-4 overflow-auto">
                    <div
                        class="flex items-center justify-between space-x-3 p-4"
                    >
                        <div class="flex items-center space-x-3">
                            <input
                                id="checkbox-all-search"
                                type="checkbox"
                                class="dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                            />
                            <label for="checkbox-all-search" class="text-xs"
                                >Tout selectionner</label
                            >
                        </div>

                        <button
                            type="button"
                            title="options"
                            class="rounded border border-red-500 p-1 text-red-500 hover:bg-red-500 hover:text-white"
                        >
                            <TrashIcon class="h-4 w-4" />
                        </button>
                    </div>
                    <div
                        class="flex h-24 w-full items-center space-x-2 border-l-4 border-b border-l-primary-color bg-gray-50 p-3"
                    >
                        <div
                            class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                        >
                            <img
                                src="/images/ads/cuisine/1.jpg"
                                class="h-full w-full bg-cover object-cover"
                                alt=""
                            />
                        </div>
                        <div class="shrink">
                            <h1 class="whitespace-normal text-sm font-bold">
                                Boms
                            </h1>
                            <h6
                                class="whitespace-normal text-xs font-semibold text-gray-800"
                            >
                                Gâteau à la crème chocolat
                            </h6>
                        </div>
                        <div class="flex grow items-center justify-end">
                            <input
                                id="checkbox-all-search"
                                type="checkbox"
                                class="dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div
                        class="flex h-24 w-full items-center space-x-2 border-b p-3"
                    >
                        <div
                            class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                        >
                            <img
                                src="/images/ads/cuisine/2.jpg"
                                class="h-full w-full bg-cover object-cover"
                                alt=""
                            />
                        </div>
                        <div class="shrink">
                            <h1 class="whitespace-normal text-sm font-bold">
                                Thomas
                            </h1>
                            <h6
                                class="whitespace-normal text-xs font-semibold text-gray-800"
                            >
                                Gâteau chocolat
                            </h6>
                        </div>
                        <div class="flex grow items-center justify-end">
                            <input
                                id="checkbox-all-search"
                                type="checkbox"
                                class="dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <!-- end conversation mobile view -->

            <!-- start conversation pc view -->
            <div class="hidden w-[25%] flex-col py-4 lg:flex">
                <div class="relative mx-2">
                    <div
                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                        <SearchIcon class="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        id="simple-search"
                        class="block w-full rounded-full border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Rechercher..."
                        required
                    />
                </div>
                <div
                    class="mt-4 flex items-center justify-between space-x-3 p-4"
                >
                    <div class="flex items-center space-x-3">
                        <input
                            id="checkbox-all-search"
                            type="checkbox"
                            class="dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <label for="checkbox-all-search" class="text-xs"
                            >Tout selectionner</label
                        >
                    </div>

                    <button
                        type="button"
                        title="options"
                        class="rounded border border-red-500 p-1 text-red-500 hover:bg-red-500 hover:text-white"
                    >
                        <TrashIcon class="h-4 w-4" />
                    </button>
                </div>
                <div class="grow overflow-auto">
                    <div
                        class="flex h-24 w-full items-center space-x-2 border-l-4 border-b border-l-primary-color bg-gray-50 p-3"
                    >
                        <div
                            class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                        >
                            <img
                                src="/images/ads/cuisine/1.jpg"
                                class="h-full w-full bg-cover object-cover"
                                alt=""
                            />
                        </div>
                        <div class="shrink">
                            <h1 class="whitespace-normal text-sm font-bold">
                                Boms
                            </h1>
                            <h6
                                class="whitespace-normal text-xs font-semibold text-gray-800"
                            >
                                Gâteau à la crème chocolat
                            </h6>
                        </div>
                        <div class="flex grow items-center justify-end">
                            <input
                                id="checkbox-all-search"
                                type="checkbox"
                                class="dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div
                        class="flex h-24 w-full items-center space-x-2 border-b p-3"
                    >
                        <div
                            class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                        >
                            <img
                                src="/images/ads/cuisine/2.jpg"
                                class="h-full w-full bg-cover object-cover"
                                alt=""
                            />
                        </div>
                        <div class="shrink">
                            <h1 class="whitespace-normal text-sm font-bold">
                                Thomas
                            </h1>
                            <h6
                                class="whitespace-normal text-xs font-semibold text-gray-800"
                            >
                                Gâteau chocolat
                            </h6>
                        </div>
                        <div class="flex grow items-center justify-end">
                            <input
                                id="checkbox-all-search"
                                type="checkbox"
                                class="dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <!-- end conversation pc view -->

            <!-- start chat  view -->
            <div
                v-if="open.chat"
                class="relative flex w-full flex-col bg-gray-50 lg:w-[50%]"
            >
                <div
                    class="flex h-24 w-full flex-col items-center justify-center space-x-2 bg-white p-3"
                >
                    <div
                        class="h-12 w-12 overflow-hidden rounded-full drop-shadow-md"
                    >
                        <img
                            src="/images/icone/default_avatar.svg"
                            class="h-full w-full bg-cover object-cover"
                            alt=""
                        />
                    </div>
                    <h1 class="whitespace-normal text-sm font-bold">Boms</h1>
                </div>

                <div class="grow overflow-auto p-4">
                    <div class="mb-2 flex justify-start pr-10">
                        <p
                            class="whitespace-pre-line break-all rounded-r-lg rounded-bl-lg bg-white p-2 text-xs leading-normal tracking-wider"
                        >
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their
                            default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy.
                            Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose
                            (injected humour and the like).

                            <span class="mt-2 block text-xs font-bold"
                                >16 h 40</span
                            >
                        </p>
                    </div>

                    <div class="mb-2 flex justify-end pl-10">
                        <p
                            class="whitespace-pre-line break-all rounded-l-lg rounded-tr-lg bg-primary-color p-2 text-xs leading-normal tracking-wider text-white"
                        >
                            It is a long established fact
                            <span
                                class="mt-2 block text-right text-xs font-bold"
                                >16 h 45</span
                            >
                        </p>
                    </div>
                    <div class="mb-2 flex justify-end pl-10">
                        <p
                            class="whitespace-pre-line break-all rounded-l-lg bg-primary-color p-2 text-xs leading-normal tracking-wider text-white"
                        >
                            It is a long established fact search for 'lorem
                            ipsum' will uncover many web sites still in their
                            infancy. Various versions have evolved over the
                            years, sometimes by accident, sometimes on pur
                            <span
                                class="mt-2 block text-right text-xs font-bold"
                                >16 h 46</span
                            >
                        </p>
                    </div>
                </div>

                <form class="0 w-full bg-white">
                    <div
                        class="dark:bg-gray-700 flex items-center rounded-lg py-2 px-3"
                    >
                        <textarea
                            id="chat"
                            rows="1"
                            class="mx-4 block w-full resize-none rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your message..."
                        ></textarea>

                        <button
                            type="submit"
                            class="inline-flex cursor-pointer items-center justify-center rounded-full bg-primary-color p-2 text-white hover:bg-secondary-color"
                        >
                            <PaperAirplaneIcon class="h-6 w-6 rotate-90" />
                        </button>
                    </div>
                </form>
            </div>
            <!-- end chat  view -->

            <!-- start detail pc view -->
            <div class="hidden w-[25%] flex-col lg:flex">
                <div
                    class="flex h-24 w-full items-center space-x-2 border-b p-3"
                >
                    <div
                        class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                    >
                        <img
                            src="/images/ads/cuisine/1.jpg"
                            class="h-full w-full bg-cover object-cover"
                            alt=""
                        />
                    </div>
                    <div class="shrink">
                        <h1 class="whitespace-normal text-sm font-bold">
                            Gâteau à la crème chocolat
                        </h1>
                        <h6
                            class="whitespace-normal text-xs font-semibold text-gray-800"
                        >
                            10 000 XFA
                        </h6>
                    </div>
                </div>
                <div class="grow overflow-auto">
                    <div class="w-full border-b p-3">
                        <h1 class="text-md font-semibold">Description</h1>
                        <p class="p-2 text-justify text-xs leading-4">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English...
                        </p>
                        <span
                            class="ml-2 text-xs font-semibold text-primary-color hover:underline"
                            >voir plus</span
                        >
                    </div>
                    <div class="w-full border-b p-3">
                        <h1 class="text-md font-semibold">Critères</h1>
                        <div class="grid grid-cols-2 gap-6 p-2">
                            <div class="flex items-center space-x-1">
                                <HashtagIcon class="h-5 w-5 text-gray-500" />

                                <h2 class="text-center">
                                    <span class="block text-xs text-gray-500"
                                        >Marque</span
                                    >
                                    <span class="text-sm font-semibold"
                                        >Opel</span
                                    >
                                </h2>
                            </div>
                            <div class="flex items-center space-x-1">
                                <HashtagIcon class="h-5 w-5 text-gray-500" />

                                <h2 class="text-center">
                                    <span class="block text-xs text-gray-500"
                                        >Marque</span
                                    >
                                    <span class="text-sm font-semibold"
                                        >Opel</span
                                    >
                                </h2>
                            </div>
                            <div class="flex items-center space-x-1">
                                <HashtagIcon class="h-5 w-5 text-gray-500" />

                                <h2 class="text-center">
                                    <span class="block text-xs text-gray-500"
                                        >Marque</span
                                    >
                                    <span class="text-sm font-semibold"
                                        >Opel</span
                                    >
                                </h2>
                            </div>
                            <div class="flex items-center space-x-1">
                                <HashtagIcon class="h-5 w-5 text-gray-500" />

                                <h2 class="text-center">
                                    <span class="block text-xs text-gray-500"
                                        >Marque</span
                                    >
                                    <span class="text-sm font-semibold"
                                        >Opel</span
                                    >
                                </h2>
                            </div>
                        </div>
                        <span
                            class="ml-2 text-xs font-semibold text-primary-color hover:underline"
                            >voir plus</span
                        >
                    </div>
                    <div class="w-full p-3">
                        <h1
                            class="text-md flex items-center space-x-3 font-semibold"
                        >
                            <LocationMarkerIcon class="h-4 w-4" />
                            <span>Douala Bonamousadi</span>
                        </h1>
                        <div
                            class="my-3 flex h-60 items-center justify-center rounded bg-gray-50"
                        >
                            <span
                                class="text-sm font-semibold italic text-gray-400"
                                >La Carte de Google Map</span
                            >
                        </div>
                    </div>
                </div>
            </div>
            <!-- end detail pc view -->

            <!-- start detail mobile view -->
            <div v-if="open.detail" class="flex w-full flex-col">
                <div
                    class="flex h-24 w-full items-center space-x-2 border-b p-3"
                >
                    <div
                        class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                    >
                        <img
                            src="/images/ads/cuisine/1.jpg"
                            class="h-full w-full bg-cover object-cover"
                            alt=""
                        />
                    </div>
                    <div class="shrink">
                        <h1 class="whitespace-normal text-sm font-bold">
                            Gâteau à la crème chocolat
                        </h1>
                        <h6
                            class="whitespace-normal text-xs font-semibold text-gray-800"
                        >
                            10 000 XFA
                        </h6>
                    </div>
                </div>
                <div class="grow overflow-auto">
                    <div class="w-full border-b p-3">
                        <h1 class="text-md font-semibold">Description</h1>
                        <p class="p-2 text-justify text-xs leading-4">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English...
                        </p>
                        <span
                            class="ml-2 text-xs font-semibold text-primary-color hover:underline"
                            >voir plus</span
                        >
                    </div>
                    <div class="w-full border-b p-3">
                        <h1 class="text-md font-semibold">Critères</h1>
                        <div class="grid grid-cols-2 gap-6 p-2">
                            <div class="flex items-center space-x-1">
                                <HashtagIcon class="h-5 w-5 text-gray-500" />

                                <h2 class="text-center">
                                    <span class="block text-xs text-gray-500"
                                        >Marque</span
                                    >
                                    <span class="text-sm font-semibold"
                                        >Opel</span
                                    >
                                </h2>
                            </div>
                            <div class="flex items-center space-x-1">
                                <HashtagIcon class="h-5 w-5 text-gray-500" />

                                <h2 class="text-center">
                                    <span class="block text-xs text-gray-500"
                                        >Marque</span
                                    >
                                    <span class="text-sm font-semibold"
                                        >Opel</span
                                    >
                                </h2>
                            </div>
                            <div class="flex items-center space-x-1">
                                <HashtagIcon class="h-5 w-5 text-gray-500" />

                                <h2 class="text-center">
                                    <span class="block text-xs text-gray-500"
                                        >Marque</span
                                    >
                                    <span class="text-sm font-semibold"
                                        >Opel</span
                                    >
                                </h2>
                            </div>
                            <div class="flex items-center space-x-1">
                                <HashtagIcon class="h-5 w-5 text-gray-500" />

                                <h2 class="text-center">
                                    <span class="block text-xs text-gray-500"
                                        >Marque</span
                                    >
                                    <span class="text-sm font-semibold"
                                        >Opel</span
                                    >
                                </h2>
                            </div>
                        </div>
                        <span
                            class="ml-2 text-xs font-semibold text-primary-color hover:underline"
                            >voir plus</span
                        >
                    </div>
                    <div class="w-full p-3">
                        <h1
                            class="text-md flex items-center space-x-3 font-semibold"
                        >
                            <LocationMarkerIcon class="h-4 w-4" />
                            <span>Douala Bonamousadi</span>
                        </h1>
                        <div
                            class="my-3 flex h-60 items-center justify-center rounded bg-gray-50"
                        >
                            <span
                                class="text-sm font-semibold italic text-gray-400"
                                >La Carte de Google Map</span
                            >
                        </div>
                    </div>
                </div>
            </div>
            <!-- end detail mobile view -->
        </div>
    </section>
</template>
