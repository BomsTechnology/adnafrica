import { ref } from "vue";
import { axiosClient, axiosClientFile } from "@/axios";

export default function useCity() {
    const errors = ref([]);
    const loading = ref(0);
    const cities = ref([]);
    const deleteArray = ref([]);
    const chks = ref([]);
    const chkAll = ref(false);

    const getCities = async () => {
        errors.value = [];
        chks.value = [];
        try {
            loading.value = 1;
            let response = await axiosClient.get("/cities");
            cities.value = response.data.data;
            loading.value = 2;

            cities.value.forEach((city) => {
                chks.value.push({
                    id: city.id,
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

    const createCity = async (data) => {
        errors.value = [];
        try {
            loading.value = 1;
            await axiosClient.post("/cities", data);
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

    const updateCity = async (data, id) => {
        errors.value = [];
        try {
            loading.value = 1;
            await axiosClient.put(`/cities/${id}`, data);
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

    const deleteCities = async () => {
        errors.value = [];
        try {
            await axiosClient.delete(
                `/cities/${JSON.stringify(deleteArray.value)}`
            );
            deleteArray.value = [];
            await getCities();
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
            chks.value.forEach((city) => {
                if (!city.value) {
                    city.value = true;
                    deleteArray.value.push(city.id);
                }
            });
        } else {
            chks.value.forEach((city) => {
                city.value = false;
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
        cities,
        getCities,
        updateCity,
        createCity,
        deleteCities,
        toogleDeleteArray,
    };
}
