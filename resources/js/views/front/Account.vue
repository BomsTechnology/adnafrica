<script setup>
import {
    StarIcon,
    MegaphoneIcon,
    MapPinIcon,
    EllipsisVerticalIcon,
    ArrowsRightLeftIcon,
    AdjustmentsHorizontalIcon,
} from "@heroicons/vue/24/solid";
import useUser from "@/services/userServices";
import AccountAds from "@/components/account/AccountAds.vue";
import AccountSetting from "@/components/account/AccountSetting.vue";
import AccountTransaction from "@/components/account/AccountTransaction.vue";
import { useAuthenticateStore } from "@/stores/authenticate";
import { reactive, onMounted } from "vue";

const props = defineProps({
    id: String,
    slug: String,
});
const { errors, loading, user, getUser } = useUser();
const open = reactive({
    ads: true,
    transaction: false,
    setting: false,
});

onMounted(async () => {
    await getUser(props.id);
});

const authenticateStore = useAuthenticateStore();
function changeTab(tab) {
    switch (tab) {
        case "ads":
            open.setting = false;
            open.transaction = false;
            open.ads = true;
            break;
        case "transaction":
            open.setting = false;
            open.ads = false;
            open.transaction = true;
            break;
        case "setting":
            open.transaction = false;
            open.ads = false;
            open.setting = true;
            break;
    }
}
</script>

<template>
    <div class="mt-10 px-4 md:px-28">
        <div
            class="flex w-full flex-col items-center justify-between rounded-lg bg-white py-2 px-8 lg:h-48 lg:flex-row"
        >
            <div
                class="flex flex-col items-center space-x-2 py-3 px-2 text-center lg:flex-row lg:text-left"
            >
                <div class="mr-2 h-28 w-28 overflow-hidden rounded-full">
                    <Spin v-if="loading == 1" />
                    <img
                        v-else
                        :src="user.avatar"
                        class="h-full w-full bg-cover object-cover"
                        alt=""
                    />
                </div>
                <div v-if="loading == 2">
                    <h2 class="text-justify text-xl font-bold text-gray-800">
                        {{ user.firstname }}
                        <span v-if="user.lastname"> {{ user.lastname }}</span>
                    </h2>
                    <h3 class="mt-1 text-sm font-semibold text-gray-600">
                        A rejoint adnafrica en
                        {{
                            new Date(user.date).toLocaleDateString("fr-FR", {
                                year: "numeric",
                                month: "long",
                            })
                        }}
                    </h3>
                    <h4
                        class="mt-1 flex items-center space-x-1 text-xs font-light text-gray-400"
                    >
                        <MapPinIcon class="h-3 w-3" />
                        <span>Douala Bonamousadi</span>
                    </h4>
                </div>
            </div>
            <div class="flex justify-center lg:flex-col">
                <button
                    type="button"
                    title="options"
                    class="flex items-center justify-center space-x-2 rounded border border-primary-color p-2 text-primary-color hover:bg-primary-color hover:text-white"
                >
                    <EllipsisVerticalIcon class="h-6 w-6" />
                    <span class="hidden text-sm font-thin lg:block"
                        >Options</span
                    >
                </button>
                <span class="mt-1 lg:flex">
                    <span class="mt-1 flex">
                        <StarIcon class="h-4 w-4 text-orange-400" />
                        <StarIcon class="h-4 w-4 text-orange-400" /><StarIcon
                            class="h-4 w-4 text-orange-400"
                        /><StarIcon class="h-4 w-4 text-orange-400" /><StarIcon
                            class="h-4 w-4 text-gray-400"
                        />
                    </span>
                    <span
                        class="ml-1 text-center text-sm font-semibold text-gray-500 hover:underline"
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
                    <button
                        @click="changeTab('ads')"
                        type="button"
                        :class="[
                            open.ads
                                ? 'inline-flex rounded-t-lg border-b-2 border-primary-color p-4 text-primary-color'
                                : 'group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-secondary-color hover:text-secondary-color',
                        ]"
                    >
                        <span
                            ><MegaphoneIcon
                                :class="[
                                    open.ads
                                        ? 'mr-2 h-5 w-5 text-primary-color'
                                        : 'mr-2 h-5 w-5 text-gray-700 group-hover:text-secondary-color',
                                ]"
                        /></span>
                        <span class="hidden md:block">Annonces</span>
                    </button>
                </li>
                <li class="mr-2">
                    <button
                        @click="changeTab('transaction')"
                        type="button"
                        :class="[
                            open.transaction
                                ? 'inline-flex rounded-t-lg border-b-2 border-primary-color p-4 text-primary-color'
                                : 'group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-secondary-color hover:text-secondary-color',
                        ]"
                        aria-current="page"
                    >
                        <span
                            ><ArrowsRightLeftIcon
                                :class="[
                                    open.transaction
                                        ? 'mr-2 h-5 w-5 text-primary-color'
                                        : 'mr-2 h-5 w-5 text-gray-700 group-hover:text-secondary-color',
                                ]"
                        /></span>
                        <span class="hidden md:block">Transactions</span>
                    </button>
                </li>
                <li class="mr-2">
                    <button
                        @click="changeTab('setting')"
                        type="button"
                        :class="[
                            open.setting
                                ? 'inline-flex rounded-t-lg border-b-2 border-primary-color p-4 text-primary-color'
                                : 'group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-secondary-color hover:text-secondary-color',
                        ]"
                    >
                        <span
                            ><AdjustmentsHorizontalIcon
                                :class="[
                                    open.setting
                                        ? 'mr-2 h-5 w-5 text-primary-color'
                                        : 'mr-2 h-5 w-5 text-gray-700 group-hover:text-secondary-color',
                                ]"
                        /></span>
                        <span class="hidden md:block">Paramètres</span>
                    </button>
                </li>
            </ul>
        </div>
        <div class="relative h-[1000px]">
            <transition-group
                enter-active-class="transition duration-1000"
                enter-from-class="opacity-0 translate-x-20"
                enter-to-class="opacity-1 translate-x-0"
                leave-active-class="transition duration-1000 absolute ease-out"
                leave-from-class="opacity-1 translate-x-0"
                leave-to-class=" -translate-x-full opacity-0"
                mode="out-in"
            >
                <div v-if="open.ads"><AccountAds :user-id="props.id" /></div>
                <div v-if="open.transaction"><AccountSetting /></div>
                <div v-if="open.setting"><AccountTransaction /></div>
            </transition-group>
        </div>
    </div>
</template>
