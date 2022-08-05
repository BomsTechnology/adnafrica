import { ref } from "vue";
import { axiosClient, axiosClientFile } from "@/axios";

export default function useCurrency() {
    const errors = ref("");
    const loading = ref(0);
    const currencies = ref([]);
    const deleteArray = ref([]);
    const chks = ref([]);
    const chkAll = ref(false);

    const getCurrencies = async () => {
        errors.value = "";
        chks.value = [];
        try {
            loading.value = 1;
            let response = await axiosClient.get("/currencies");
            currencies.value = response.data.data;
            loading.value = 2;

            currencies.value.forEach((currency) => {
                chks.value.push({
                    id: currency.id,
                    value: false,
                });
            });
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            } else {
                errors.value = e.response.data.message;
            }
        }
    };

    const createCurrency = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axiosClient.post("/currencies", data);
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            } else {
                errors.value = e.response.data.message;
            }
        }
    };

    const updateCurrency = async (data, id) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axiosClient.put(`/currencies/${id}`, data);
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            } else {
                errors.value = e.response.data.message;
            }
        }
    };

    const deleteCurrencies = async () => {
        errors.value = "";
        try {
            await axiosClient.delete(
                `/currencies/${JSON.stringify(deleteArray.value)}`
            );
            deleteArray.value = [];
            await getCurrencies();
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            } else {
                errors.value = e.response.data.message;
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
            chks.value.forEach((currency) => {
                if (!currency.value) {
                    currency.value = true;
                    deleteArray.value.push(currency.id);
                }
            });
        } else {
            chks.value.forEach((currency) => {
                currency.value = false;
            });
            deleteArray.value = [];
        }
    };

    const cleanErrors = () => {
        errors.value = "";
    };

    return {
        chks,
        chkAll,
        errors,
        loading,
        checkAll,
        cleanErrors,
        currencies,
        getCurrencies,
        updateCurrency,
        createCurrency,
        deleteCurrencies,
        toogleDeleteArray,
    };
}
