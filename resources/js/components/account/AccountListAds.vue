<script setup>
import {
    TableCellsIcon,
    ChevronDownIcon,
    ArrowTrendingDownIcon,
    ArrowTrendingUpIcon,
    TrashIcon,
    HeartIcon,
} from "@heroicons/vue/24/solid";
import useAnnouncement from "@/composables/announcementServices";
import SelectFilter from "@/components/SelectFilter.vue";
import useCategory from "@/composables/categoryServices";
import { computed, reactive, watch, onMounted } from "vue";

const props = defineProps({
    userId: String,
});
const { errors, loading, cleanErrors, announcements, getAnnouncementUser } =
    useAnnouncement();
const { categories, getCategories } = useCategory();

onMounted(async () => {
    await getAnnouncementUser(props.userId);
    await getCategories();
});

watch(props, async (newProps, oldProps) => {
    await getAnnouncementUser(newProps.userId);
    await getCategories();
});

const search = reactive({ words: "", category: "" });

const filteredAnnouncement = computed(() => {
    if (search.category) {
        return announcements.value.filter((announcement) =>
            announcement.title
                .toLowerCase()
                .includes(
                    search.words.toLowerCase() &&
                        announcement.category.id == search.category
                )
        );
    } else {
        return announcements.value.filter((announcement) =>
            announcement.title
                .toLowerCase()
                .includes(search.words.toLowerCase())
        );
    }
});
function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
}
</script>
<template>
    <div>
        <div v-if="loading != 2"></div>
        <div
            v-else-if="announcements.length != 0"
            v-for="announcement in announcements"
            :key="announcement.id"
            class="h-full w-full items-center rounded-lg border bg-white shadow lg:flex lg:h-36"
        >
            <router-link
                :to="{
                    name: 'ads.single',
                    params: {
                        id: announcement.id,
                        slug: announcement.slug,
                    },
                }"
                class="!relative h-full overflow-hidden"
            >
                <img
                    :src="announcement.images[0].path"
                    class="h-36 w-full rounded-t-lg bg-cover object-cover lg:h-full lg:w-60 lg:rounded-l-lg lg:rounded-tr-none"
                    alt=""
                />
                <span
                    class="absolute top-0 bottom-2 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-sm text-white shadow"
                >
                    {{ announcement.images.length }}
                </span>
            </router-link>
            <div class="flex h-full grow justify-between px-4">
                <router-link
                    :to="{
                        name: 'ads.single',
                        params: {
                            id: announcement.id,
                            slug: announcement.slug,
                        },
                    }"
                    class="flex h-full flex-col justify-between py-2"
                >
                    <div>
                        <h1
                            class="whitespace-normal text-sm font-bold lg:text-lg"
                        >
                            {{ announcement.title }}
                        </h1>
                        <h6
                            class="whitespace-normal text-sm font-semibold text-gray-800 lg:text-lg"
                        >
                            {{ announcement.price.toLocaleString("FR") }}
                            {{ announcement.currency.symbol }}
                        </h6>
                    </div>
                    <div class="text-xs font-light text-gray-400">
                        <h6 class="flex items-center space-x-2">
                            <span>{{ announcement.category.name }}</span>

                            <span v-if="announcement.country"
                                ><img
                                    :src="announcement.country.image"
                                    :alt="announcement.country.name"
                                    class="h-3 w-4 object-cover"
                            /></span>
                        </h6>
                        <h6>
                            {{ announcement.city.name }}
                            {{ announcement.country.name }} -
                            {{
                                new Date(announcement.date).toLocaleDateString(
                                    "fr-FR",
                                    {
                                        day: "numeric",
                                        year: "numeric",
                                        month: "long",
                                    }
                                )
                            }}
                            à
                            {{
                                `${padTo2Digits(
                                    new Date(announcement.date).getHours()
                                )}h${padTo2Digits(
                                    new Date(announcement.date).getMinutes()
                                )}`
                            }}
                        </h6>
                    </div>
                </router-link>
                <div class="flex h-full items-end py-4">
                    <button
                        type="button"
                        title="Ajouter/Retirer aux favoris"
                        class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:scale-95 hover:bg-pink-300 focus:bg-pink-300"
                    >
                        <HeartIcon
                            class="h-7 w-7 bg-transparent text-pink-500"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
