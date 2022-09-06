<script setup>
import { TrashIcon } from "@heroicons/vue/24/solid";
import { reactive, ref, onMounted, computed } from "vue";
import useCountry from "@/composables/countryServices";

const {
    chks,
    chkAll,
    errors,
    loading,
    checkAll,
    countries,
    cleanErrors,
    getCountries,
    updateCountry,
    createCountry,
    deleteCountries,
    toogleDeleteArray,
} = useCountry();
const country = reactive({
    name: "",
    image: "",
});
const search = ref("");
const isEdit = ref(false);
const image = ref(null);

const saveCountry = async () => {
    let data = new FormData();
    data.append("name", country.name);
    data.append("image", country.image);
    if (!isEdit.value) {
        await createCountry(data);
    } else {
        data.append("_method", "PUT");
        await updateCountry(data, country.id);
        if (errors.value.length == []) isEdit.value = false;
    }
    if (errors.value.length == []) {
        await getCountries();
        country.name = "";
        country.name = "";
        image.value ? (image.value.value = null) : (image.value = null);
    }
};
const filteredCountry = computed(() =>
    countries.value.filter((country) =>
        country.name.toLowerCase().includes(search.value.toLowerCase())
    )
);
const handleImage = async () => {
    country.image = image.value.files[0];
};
const selectCountry = async (cat) => {
    country.name = cat.name;
    country.image = cat.image;
    country.id = cat.id;
    isEdit.value = true;
};
onMounted(async () => {
    await getCountries();
});
</script>

<template>
    <div class="h-full p-8">
        <h1 class="text-3xl font-bold">Country</h1>
        <div class="space-x-0 space-y-4 py-6 lg:flex lg:space-x-4 lg:space-y-0">
            <div class="lg:w-[40%]">
                <div class="w-full bg-white p-6 shadow-md sm:rounded-lg">
                    <h1
                        class="text-xl font-semibold underline decoration-primary-color decoration-dotted decoration-2 underline-offset-2"
                    >
                        <span v-if="isEdit">Edit</span>
                        <span v-else>Add</span> Country
                    </h1>
                    <Error :errors="errors" @cleanErrors="cleanErrors" />
                    <form class="mt-4" @submit.prevent="saveCountry()">
                        <div class="">
                            <label
                                for="name"
                                class="block text-sm font-medium text-gray-700"
                                >Country Name</label
                            >
                            <input
                                type="text"
                                id="name"
                                required
                                v-model="country.name"
                                autocomplete="given-name"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div
                            class="mt-2"
                            v-if="
                                country.parent == null ||
                                country.parent == 'null'
                            "
                        >
                            <label
                                class="mb-2 block text-sm font-medium text-gray-900"
                                for="file_input"
                                >Image</label
                            >
                            <div class="flex space-x-3">
                                <div
                                    v-if="
                                        isEdit &&
                                        typeof country.image === 'string'
                                    "
                                    class="h-10 w-10 overflow-hidden rounded-full"
                                >
                                    <img
                                        v-if="country.image"
                                        :src="country.image"
                                        :alt="country.name"
                                        class="h-full w-full object-cover"
                                    />
                                </div>

                                <input
                                    ref="image"
                                    :required="!isEdit"
                                    @change="handleImage()"
                                    class="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:outline-none"
                                    id="file_input"
                                    accept="image/*"
                                    type="file"
                                />
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

            <div class="lg:w-[60%]">
                <div
                    class="relative w-full overflow-x-auto bg-white shadow-md sm:rounded-lg"
                >
                    <div class="items-center justify-between p-4 lg:flex">
                        <div
                            class="mt-1 items-center space-y-1 lg:flex lg:space-y-0 lg:space-x-2"
                        >
                            <label for="table-search" class="sr-only"
                                >Search</label
                            >
                            <div class="relative">
                                <div
                                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                >
                                    <svg
                                        class="h-5 w-5 text-gray-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="table-search"
                                    v-model="search"
                                    class="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 lg:w-80"
                                    placeholder="Search for items"
                                />
                            </div>
                        </div>
                        <div class="mt-1 flex justify-end lg:mt-0 lg:block">
                            <button
                                type="button"
                                title="delete"
                                @click="deleteCountries()"
                                class="flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"
                            >
                                <TrashIcon class="h-6 w-6" />
                                <span class="hidden text-sm font-thin lg:block"
                                    >Supprimer</span
                                >
                            </button>
                        </div>
                    </div>
                    <table class="w-full text-left text-sm text-gray-500">
                        <thead
                            class="bg-gray-50 text-xs uppercase text-gray-700"
                        >
                            <tr>
                                <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                        <input
                                            @change="checkAll()"
                                            v-model="chkAll"
                                            id="checkbox-all-search"
                                            type="checkbox"
                                            class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                                        />
                                        <label
                                            for="checkbox-all-search"
                                            class="sr-only"
                                            >checkbox</label
                                        >
                                    </div>
                                </th>

                                <th scope="col" class="px-6 py-3">Name</th>
                                <th scope="col" class="px-6 py-3">Image</th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="loading == 1">
                                <td colspan="4">
                                    <div
                                        class="flex w-full items-center justify-center p-3 text-center"
                                    >
                                        <Spin
                                            :width="'w-10'"
                                            :height="'h-10'"
                                            :color="'text-primary-color'"
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr
                                v-else-if="filteredCountry.length != 0"
                                v-for="(country, index) in filteredCountry"
                                :key="country.id"
                                class="border-b bg-white hover:bg-gray-50"
                            >
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input
                                            v-model="chks[index].value"
                                            @change="toogleDeleteArray(index)"
                                            id="checkbox-table-search-1"
                                            type="checkbox"
                                            class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                                        />
                                        <label
                                            for="checkbox-table-search-1"
                                            class="sr-only"
                                            >checkbox</label
                                        >
                                    </div>
                                </td>

                                <th
                                    scope="row"
                                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                                >
                                    {{ country.name }}
                                </th>
                                <td class="px-6 py-4">
                                    <img
                                        :src="country.image"
                                        :alt="country.name"
                                        class="h-5 w-8 object-cover"
                                    />
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button
                                        type="button"
                                        @click="selectCountry(country)"
                                        class="font-medium text-blue-600 hover:underline"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>

                            <tr v-else>
                                <td
                                    colspan="4"
                                    class="p-3 text-center text-2xl font-bold"
                                >
                                    <span>NO COUNTRY</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
