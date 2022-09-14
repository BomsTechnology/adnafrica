import { ref } from "vue";
import { axiosClient, axiosClientFile } from "@/axios";

export default function useCountry() {
    const errors = ref([]);
    const loading = ref(0);
    const countries = ref([]);
    const deleteArray = ref([]);
    const chks = ref([]);
    const chkAll = ref(false);

    const getCountries = async () => {
        errors.value = [];
        chks.value = [];
        try {
            loading.value = 1;
            let response = await axiosClient.get("/countries");
            countries.value = response.data.data;
            loading.value = 2;

            countries.value.forEach((country) => {
                chks.value.push({
                    id: country.id,
                    value: false,
                });
            });
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value.push(
                        e.response.data.errors[key][0].replace("id", "")
                    );
            } else if (e.response.status == 401) {
                localStorage.removeItem("user");
                localStorage.removeItem("tokenUser");
                localStorage.removeItem("recent_search");
                location.href = "/";
            } else {
                errors.value.push(e.response.data.message);
            }
        }
    };

    const createCountry = async (data) => {
        errors.value = [];
        try {
            loading.value = 1;
            await axiosClientFile.post("/countries", data);
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value.push(
                        e.response.data.errors[key][0].replace("id", "")
                    );
            } else if (e.response.status == 401) {
                localStorage.removeItem("user");
                localStorage.removeItem("tokenUser");
                localStorage.removeItem("recent_search");
                location.href = "/";
            } else {
                errors.value.push(e.response.data.message);
            }
        }
    };

    const updateCountry = async (data, id) => {
        errors.value = [];
        try {
            loading.value = 1;
            await axiosClientFile.post(`/countries/${id}`, data);
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value.push(
                        e.response.data.errors[key][0].replace("id", "")
                    );
            } else if (e.response.status == 401) {
                localStorage.removeItem("user");
                localStorage.removeItem("tokenUser");
                localStorage.removeItem("recent_search");
                location.href = "/";
            } else {
                errors.value.push(e.response.data.message);
            }
        }
    };

    const deleteCountries = async () => {
        errors.value = [];
        try {
            await axiosClient.delete(
                `/countries/${JSON.stringify(deleteArray.value)}`
            );
            deleteArray.value = [];
            await getCountries();
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value.push(
                        e.response.data.errors[key][0].replace("id", "")
                    );
            } else if (e.response.status == 401) {
                localStorage.removeItem("user");
                localStorage.removeItem("tokenUser");
                localStorage.removeItem("recent_search");
                location.href = "/";
            } else {
                errors.value.push(e.response.data.message);
            }
        }
    };

    const toogleDeleteArray = async (index) => {
        if (chks.value[index].value) {
            deleteArray.value.push(chks.value[index].id);
        } else {
            let pos = deleteArray.value.indexOf(chks.value[index].id);
            deleteArray.value.splice(pos, 1);
        }
    };

    const checkAll = async () => {
        if (chkAll.value) {
            chks.value.forEach((country) => {
                if (!country.value) {
                    country.value = true;
                    deleteArray.value.push(country.id);
                }
            });
        } else {
            chks.value.forEach((country) => {
                country.value = false;
            });
            deleteArray.value = [];
        }
    };

    const cleanErrors = () => {
        errors.value = [];
    };

    return {
        chks,
        chkAll,
        errors,
        loading,
        checkAll,
        cleanErrors,
        countries,
        getCountries,
        updateCountry,
        createCountry,
        deleteCountries,
        toogleDeleteArray,
    };
}
