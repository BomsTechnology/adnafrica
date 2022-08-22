<script setup>
import { computed, onMounted, reactive } from "vue";
import DropZone from "@/components/media/DropZone.vue";
import useAnnouncement from "@/services/announcementServices";
import useCurrency from "@/services/currencyServices";
import useCountry from "@/services/countryServices";
import useCity from "@/services/cityServices";
import SelectFilter from "@/components/SelectFilter.vue";

const { errors, loading, announcements, cleanErrors, createAnnouncement } =
    useAnnouncement();
const { cities, getCities } = useCity();
const { countries, getCountries } = useCountry();
const { currencies, getCurrencies } = useCurrency();
const announcement = reactive({
    country_id: "",
    city_id: "",
    currency_id: 3,
    type: "offer",
    title: "",
    price: "",
    status: 1,
    files: [],
});

onMounted(async () => {
    await getCountries();
    await getCities();
    await getCurrencies();
});

const filteredCity = computed(() =>
    cities.value.filter((city) => city.country.id == announcement.country_id)
);

async function storeAnnouncement() {
    let data = new FormData();
    data.append("title", announcement.title);
    data.append("type", announcement.type);
    data.append("price", announcement.price);
    data.append("status", announcement.status);
    data.append("files", announcement.files);
    data.append("country_id", announcement.country_id);
    data.append("country_id", announcement.country_id);
    data.append("city_id", announcement.city_id);
    data.append("currency_id", announcement.currency_id);
    createAnnouncement({ ...data });
}
</script>
<template>
    <div class="h-full p-8">
        <h1 class="text-3xl font-bold">Create Ads</h1>
        <div class="mt-10 bg-white p-4 lg:p-8">
            <Error :errors="errors" @cleanErrors="cleanErrors" />
            <form @submit.prevent="storeAnnouncement()">
                <div class="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
                    <div class="col-span-2">
                        <label
                            for="title"
                            class="mb-2 block text-sm font-medium text-gray-900"
                            >Title</label
                        >
                        <input
                            type="text"
                            id="title"
                            v-model="announcement.title"
                            class="block w-full rounded border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>

                    <div class="col-span-2 lg:col-span-1">
                        <label
                            for="country"
                            class="mb-2 block text-sm font-medium text-gray-900"
                            >Country</label
                        >
                        <SelectFilter
                            v-model="announcement.country_id"
                            :data="countries"
                            :placeholder="'Select Country'"
                            :className="'w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm'"
                        />
                    </div>

                    <div class="col-span-2 lg:col-span-1">
                        <label
                            for="city"
                            class="mb-2 block text-sm font-medium text-gray-900"
                            >City</label
                        >
                        <SelectFilter
                            v-model="announcement.city_id"
                            :data="filteredCity"
                            :resetField="true"
                            :placeholder="'Select City'"
                            :className="'w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm'"
                        />
                    </div>

                    <div class="col-span-2 lg:col-span-1">
                        <label
                            for="type"
                            class="mb-2 block text-sm font-medium text-gray-900"
                            >Type</label
                        >
                        <select
                            id="type"
                            v-model="announcement.type"
                            class="form-select block w-full rounded border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            <option value="offer">Offre</option>
                            <option value="request">demande</option>
                        </select>
                    </div>

                    <div class="col-span-2 lg:col-span-1">
                        <label
                            for="price"
                            class="mb-2 block text-sm font-medium text-gray-900"
                            >Price</label
                        >
                        <div class="flex items-center">
                            <input
                                type="price"
                                id="title"
                                v-model="announcement.price"
                                class="block w-4/5 rounded-l border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            />
                            <select
                                id="currency"
                                v-model="announcement.currency_id"
                                class="form-select block w-1/5 rounded-r border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                            >
                                <option
                                    v-for="currency in currencies"
                                    :key="currency.id"
                                    :value="currency.id"
                                >
                                    {{ currency.symbol }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="col-span-2">
                        <label
                            for="title"
                            class="mb-2 block text-sm font-medium text-gray-900"
                            >Images</label
                        >
                        <div class="mt-1 w-full">
                            <DropZone
                                v-model="announcement.files"
                                :multiple="true"
                            />
                        </div>
                    </div>

                    <div class="col-span-2 mt-4">
                        <label
                            for="description"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Description
                        </label>
                        <div class="mt-1">
                            <textarea
                                id="description"
                                rows="3"
                                class="mt-1 block w-full rounded-md border border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder=""
                            />
                        </div>
                        <p class="mt-2 text-sm text-gray-500">
                            Brief description for this ads.
                        </p>
                    </div>
                </div>
                <div class="mt-6">
                    <button
                        type="button"
                        v-if="loading == 1"
                        disabled
                        class="flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
                    >
                        <Spin />
                    </button>
                    <button
                        v-else
                        type="submit"
                        class="w-full transform rounded-md bg-primary-color px-4 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
