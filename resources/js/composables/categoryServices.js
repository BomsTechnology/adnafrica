import axios from "axios";
import { ref } from "vue";
import { axiosClient, axiosClientFile } from "@/axios";
export default function useCategory() {
    const errors = ref([]);
    const loading = ref(0);
    const categories = ref([]);
    const deleteArray = ref([]);
    const chks = ref([]);
    const chkAll = ref(false);

    const getCategories = async () => {
        errors.value = [];
        chks.value = [];
        try {
            loading.value = 1;
            let response = await axiosClient.get("/categories");
            categories.value = response.data.data;
            loading.value = 2;
            let i = 0;
            categories.value.forEach((category) => {
                chks.value.push({
                    id: category.id,
                    value: false,
                    children: [],
                });
                if (category.children.length != 0) {
                    category.children.forEach((subCategory) => {
                        chks.value[i].children.push({
                            id: subCategory.id,
                            value: false,
                        });
                    });
                }
                i++;
            });
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value.push(
                        e.response.data.errors[key][0].replace("id", "")
                    );
            } else {
                errors.value.push(e.response.data.message);
            }
        }
    };

    const getTopCategories = async () => {
        errors.value = [];
        chks.value = [];
        try {
            loading.value = 1;
            let response = await axiosClient.get("/categories-top");
            categories.value = response.data.data;
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value.push(
                        e.response.data.errors[key][0].replace("id", "")
                    );
            } else {
                errors.value.push(e.response.data.message);
            }
        }
    };

    const createCategory = async (data) => {
        errors.value = [];
        try {
            loading.value = 1;
            await axiosClientFile.post("/categories", data);
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value.push(
                        e.response.data.errors[key][0].replace("id", "")
                    );
            } else {
                errors.value.push(e.response.data.message);
            }
        }
    };

    const updateCategory = async (data, id) => {
        errors.value = [];
        try {
            loading.value = 1;
            await axiosClientFile.post(`/categories/${id}`, data);
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value.push(
                        e.response.data.errors[key][0].replace("id", "")
                    );
            } else {
                errors.value.push(e.response.data.message);
            }
        }
    };

    const toogleIsTop = async (id) => {
        errors.value = [];
        try {
            await axiosClient.get(`/categories-is-top/${id}`);
            deleteArray.value = [];
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value.push(
                        e.response.data.errors[key][0].replace("id", "")
                    );
            } else {
                errors.value.push(e.response.data.message);
            }
        }
    };

    const deleteCategories = async () => {
        errors.value = [];
        try {
            await axiosClient.delete(
                `/categories/${JSON.stringify(deleteArray.value)}`
            );
            deleteArray.value = [];
            await getCategories();
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value.push(
                        e.response.data.errors[key][0].replace("id", "")
                    );
            } else {
                errors.value.push(e.response.data.message);
            }
        }
    };

    const toogleDeleteArray = async (index) => {
        if (chks.value[index].value) {
            deleteArray.value.push(chks.value[index].id);
            if (chks.value[index].children.length != 0) {
                chks.value[index].children.forEach((subCategory) => {
                    deleteArray.value.push(subCategory.id);
                    subCategory.value = true;
                });
            }
        } else {
            let pos = deleteArray.value.indexOf(chks.value[index].id);
            deleteArray.value.splice(pos, 1);
            if (chks.value[index].children.length != 0) {
                chks.value[index].children.forEach((subCategory) => {
                    pos = deleteArray.value.indexOf(subCategory.id);
                    deleteArray.value.splice(pos, 1);
                    subCategory.value = false;
                });
            }
        }
    };

    const toogleChildDeleteArray = async (index, i) => {
        if (chks.value[index].children[i].value) {
            deleteArray.value.push(chks.value[index].children[i].id);
        } else {
            let pos = deleteArray.value.indexOf(
                chks.value[index].children[i].id
            );
            deleteArray.value.splice(pos, 1);
        }

        console.log(deleteArray.value);
    };

    const checkAll = async () => {
        if (chkAll.value) {
            chks.value.forEach((category) => {
                if (!category.value) {
                    category.value = true;
                    deleteArray.value.push(category.id);
                    if (category.children.length != 0) {
                        category.children.forEach((subCategory) => {
                            if (!subCategory.value) {
                                subCategory.value = true;
                                deleteArray.value.push(subCategory.id);
                            }
                        });
                    }
                }
            });
        } else {
            chks.value.forEach((category) => {
                category.value = false;
                if (category.children.length != 0) {
                    category.children.forEach((subCategory) => {
                        subCategory.value = false;
                    });
                }
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
        categories,
        toogleIsTop,
        getCategories,
        getTopCategories,
        updateCategory,
        createCategory,
        deleteCategories,
        toogleDeleteArray,
        toogleChildDeleteArray,
    };
}
