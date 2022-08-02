import axios from "axios";
import { ref } from "vue";
import { axiosClient, axiosClientFile } from "@/axios";
export default function useCategory() {
    const errors = ref("");
    const loading = ref(0);
    const categories = ref([]);

    const getCategories = async () => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axiosClient.get("/categories");
            categories.value = response.data.data;
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            } else {
                errors.value = e.message;
            }
        }
    };

    const createCategory = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axiosClientFile.post("/category", data);
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            } else {
                errors.value = e.message;
            }
        }
    };

    const cleanErrors = () => {
        errors.value = "";
    };

    return {
        errors,
        loading,
        cleanErrors,
        createCategory,
        categories,
        getCategories,
    };
}
