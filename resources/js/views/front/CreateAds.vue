<script setup>
import { computed, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import DropZone from "@/components/media/DropZone.vue";
import useAnnouncement from "@/composables/announcementServices";
import useCategory from "@/composables/categoryServices";
import useCurrency from "@/composables/currencyServices";
import useCountry from "@/composables/countryServices";
import useCity from "@/composables/cityServices";
import SelectFilter from "@/components/SelectFilter.vue";
import { useAuthenticateStore } from "@/stores/authenticate";

const authenticateStore = useAuthenticateStore();
const router = useRouter();
const { errors, loading, cleanErrors, createAnnouncement } = useAnnouncement();
const { categories, getCategories } = useCategory();
const { cities, getCities } = useCity();
const { countries, getCountries } = useCountry();
const { currencies, getCurrencies } = useCurrency();
const announcement = reactive({
    user: JSON.stringify(authenticateStore.user),
    country_id: "",
    category_id: "",
    city_id: "",
    currency_id: 3,
    type: "offer",
    title: "",
    price: "",
    description: "",
    status: 1,
    images: [],
});

onMounted(async () => {
    await getCategories();
    await getCountries();
    await getCities();
    await getCurrencies();
});

const filteredCity = computed(() =>
    cities.value.filter((city) => city.country.id == announcement.country_id)
);

async function storeAnnouncement() {
    await createAnnouncement({ ...announcement });
    if (errors.value.length != 0) {
        router.replace({ name: "create-ads", hash: "#errors" });
    } else {
        router.push({
            name: "account",
            params: {
                id: authenticateStore.user.id,
                slug: authenticateStore.user.slug,
            },
        });
    }
}
</script>
<template>
    <div class="h-full px-4 py-14 md:px-28">
        <h1 class="text-3xl font-bold">Déposer une annonce</h1>
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
                            required
                            maxlength="50"
                            v-model="announcement.title"
                            class="block w-full rounded border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <span class="text-xs font-light text-gray-400"
                            >{{ announcement.title.length }} sur 50
                            Caractères</span
                        >
                    </div>

                    <div class="col-span-2">
                        <label
                            for="title"
                            class="mb-2 block text-sm font-medium text-gray-900"
                            >Catégorie</label
                        >
                        <SelectFilter
                            v-model="announcement.category_id"
                            :data="categories"
                            :placeholder="'Select category'"
                            :required="true"
                            :subCategory="true"
                            :className="'w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm'"
                        />
                    </div>

                    <div class="col-span-2 lg:col-span-1">
                        <label
                            for="country"
                            class="mb-2 block text-sm font-medium text-gray-900"
                            >Pays</label
                        >
                        <SelectFilter
                            v-model="announcement.country_id"
                            :data="countries"
                            :placeholder="'Select Country'"
                            :required="true"
                            :className="'w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm'"
                        />
                    </div>

                    <div class="col-span-2 lg:col-span-1">
                        <label
                            for="city"
                            class="mb-2 block text-sm font-medium text-gray-900"
                            >Ville</label
                        >
                        <SelectFilter
                            v-model="announcement.city_id"
                            :data="filteredCity"
                            :resetField="true"
                            :placeholder="'Select City'"
                            :required="true"
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
                            required
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
                            >Prix</label
                        >
                        <div class="flex items-center">
                            <input
                                type="price"
                                id="title"
                                required
                                v-model="announcement.price"
                                class="block w-4/5 rounded-l border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            />
                            <select
                                id="currency"
                                required
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
                                v-model="announcement.images"
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
                                v-model="announcement.description"
                                rows="5"
                                required
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
                        Enregistrer
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
