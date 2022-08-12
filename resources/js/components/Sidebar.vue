<script setup>
import {
    CollectionIcon,
    ChevronDownIcon,
    UserGroupIcon,
    ClipboardListIcon,
    QuestionMarkCircleIcon,
    CurrencyEuroIcon,
    SpeakerphoneIcon,
    GlobeIcon,
    OfficeBuildingIcon,
    ChevronUpIcon,
    ChatAlt2Icon,
    StarIcon,
    HomeIcon,
    ViewGridIcon,
    MenuAlt2Icon,
    XIcon,
} from "@heroicons/vue/solid";
import { CogIcon, LogoutIcon, UserCircleIcon } from "@heroicons/vue/outline";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuthenticateStore } from "@/stores/authenticate";
const router = useRouter();
const authenticateStore = useAuthenticateStore();
const open = reactive({
    menu: true,
    ads: false,
});
</script>

<template>
    <div
        :class="[
            open.menu
                ? 'relative z-50 mr-60 h-full transition-all duration-1000'
                : 'relative z-50 h-full transition-all duration-1000',
        ]"
    >
        <transition
            enter-active-class="transition duration-1000 "
            enter-from-class="-translate-x-full"
            enter-to-class=" translate-x-0"
            leave-active-class="transition duration-1000 absolute ease-out"
            leave-from-class=" translate-x-0"
            leave-to-class=" -translate-x-full "
        >
            <div
                v-if="open.menu"
                class="fixed flex h-screen w-64 flex-col overflow-y-auto overflow-x-hidden bg-primary-color py-4"
            >
                <h2 class="text-center text-2xl font-bold text-white">
                    Adnafrica
                </h2>

                <div class="-mx-2 mt-6 flex flex-col items-center">
                    <img
                        class="mx-2 h-24 w-24 rounded-full object-cover text-white"
                        :src="authenticateStore.user.avatar"
                        :alt="authenticateStore.user.firstname"
                    />

                    <h4
                        class="mx-2 mt-2 font-medium text-white hover:underline"
                    >
                        {{ authenticateStore.user.firstname }}
                    </h4>
                    <p
                        class="mx-2 mt-2 text-sm font-medium text-white hover:underline"
                    >
                        {{ authenticateStore.user.email }}
                    </p>
                    <div class="mx-2 mt-2 flex items-center space-x-4">
                        <a
                            href="#"
                            title="setting account"
                            class="rounded-full p-2 text-white hover:bg-gray-50 hover:text-gray-700"
                            ><CogIcon class="h-6 w-6" /></a
                        ><button
                            type="button"
                            title="logout"
                            class="rounded-full p-2 text-white hover:bg-gray-50 hover:text-gray-700"
                        >
                            <LogoutIcon class="h-6 w-6" />
                        </button>
                    </div>
                </div>

                <div class="mt-6 flex flex-1 flex-col justify-between">
                    <nav>
                        <router-link
                            :to="{ name: 'admin.dashboard' }"
                            class="flex transform items-center px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-200 hover:text-gray-700"
                        >
                            <HomeIcon class="h-5 w-5" />
                            <span class="mx-4 font-medium">Dashboard</span>
                        </router-link>
                        <div>
                            <button
                                type="button"
                                @click="open.ads = !open.ads"
                                class="mt-2 flex w-full transform items-center justify-between px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-200 hover:text-gray-700"
                            >
                                <div class="flex items-center">
                                    <SpeakerphoneIcon class="h-5 w-5" />
                                    <span class="mx-4 font-medium">Ads</span>
                                </div>

                                <ChevronDownIcon
                                    v-if="!open.ads"
                                    class="h-5 w-5"
                                />
                                <ChevronUpIcon
                                    v-if="open.ads"
                                    class="h-5 w-5"
                                />
                            </button>
                            <transition
                                enter-active-class="transition duration-500"
                                enter-from-class="-translate-y-20"
                                enter-to-class=" translate-y-0"
                                leave-active-class="transition duration-500 ease-out"
                                leave-from-class=" translate-y-0"
                                leave-to-class=" -translate-y-20 opacity-0"
                                mode="out-in"
                            >
                                <div
                                    v-if="open.ads"
                                    class="mx-4 my-5 rounded-lg bg-gray-50"
                                >
                                    <router-link
                                        :to="{ name: 'admin.ads.index' }"
                                        class="flex transform items-center rounded-t-lg px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-700"
                                    >
                                        <ViewGridIcon class="h-5 w-5" />

                                        <span class="mx-4 font-medium"
                                            >All Ads</span
                                        >
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'admin.category' }"
                                        class="flex transform items-center px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-700"
                                    >
                                        <CollectionIcon class="h-5 w-5" />

                                        <span class="mx-4 font-medium"
                                            >Categories</span
                                        >
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'admin.currency' }"
                                        class="flex transform items-center rounded-b-lg px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-700"
                                    >
                                        <CurrencyEuroIcon class="h-5 w-5" />

                                        <span class="mx-4 font-medium"
                                            >Currency</span
                                        >
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'admin.country' }"
                                        class="flex transform items-center rounded-b-lg px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-700"
                                    >
                                        <GlobeIcon class="h-5 w-5" />

                                        <span class="mx-4 font-medium"
                                            >Country</span
                                        >
                                    </router-link>
                                    <router-link
                                        :to="{ name: 'admin.city' }"
                                        class="flex transform items-center rounded-b-lg px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-700"
                                    >
                                        <OfficeBuildingIcon class="h-5 w-5" />

                                        <span class="mx-4 font-medium"
                                            >City</span
                                        >
                                    </router-link>
                                </div>
                            </transition>
                        </div>

                        <router-link
                            :to="{ name: 'admin.user.index' }"
                            class="mt-2 flex transform items-center px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-200 hover:text-gray-700"
                        >
                            <UserGroupIcon class="h-5 w-5" />

                            <span class="mx-4 font-medium">Users</span>
                        </router-link>

                        <router-link
                            :to="{ name: 'admin.feedback' }"
                            class="mt-2 flex transform items-center px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-200 hover:text-gray-700"
                        >
                            <ClipboardListIcon class="h-5 w-5" />

                            <span class="mx-4 font-medium">Feedback</span>
                        </router-link>

                        <router-link
                            :to="{ name: 'admin.faq.index' }"
                            class="mt-2 flex w-full transform items-center px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-200 hover:text-gray-700"
                        >
                            <QuestionMarkCircleIcon class="h-5 w-5" />

                            <span class="mx-4 font-medium">Faqs</span>
                        </router-link>

                        <router-link
                            :to="{ name: 'admin.message' }"
                            class="mt-2 flex transform items-center px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-200 hover:text-gray-700"
                        >
                            <ChatAlt2Icon class="h-5 w-5" />

                            <span class="mx-4 font-medium">Messages</span>
                        </router-link>
                    </nav>
                </div>
            </div>
        </transition>
        <button
            @click="open.menu = !open.menu"
            class="fixed top-0 block rounded-r-lg bg-primary-color p-2 text-white"
        >
            <MenuAlt2Icon v-if="!open.menu" class="h-7 w-7" />
            <XIcon v-else class="h-7 w-7" />
        </button>
    </div>
</template>

<style scoped>
.a-exact-active {
    @apply bg-gray-50 text-gray-700;
}
</style>
