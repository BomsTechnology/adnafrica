import { onMounted, reactive, ref } from "vue";
import useCategory from "@/composables/categoryServices";
import { axiosClient, axiosClientFile } from "@/axios";

export default function useSearch() {
    const { categories, getCategories } = useCategory();
    const errors = ref([]);
    const loading = ref(0);

    const searchData = reactive({
        gender: "",
        keywords: "",
        location: "",
        type: "",
        category: "",
    });
    const showCategory = reactive({
        filter: false,
        modal: false,
        category: true,
        subCategory: false,
    });
    const selectCategory = reactive({
        category: null,
        subCategory: "all",
    });

    const mount = async (props) => {
        await getCategories();
        searchData.gender = props.gender;
        searchData.keywords = props.keywords;
        searchData.location = props.location;
        searchData.type = props.type;
        if (props.category != "all") {
            await filterCategory(props.category);
        } else {
            searchData.category = props.category;
            selectCategory.subCategory = props.category;
        }
    };

    const selectedCategory = async (category) => {
        selectCategory.category = category;
        showCategory.category = false;
        showCategory.subCategory = true;
    };
    const selectedSubCategory = async (subCategory) => {
        searchData.category = subCategory == "all" ? "all" : subCategory.id;
        selectCategory.subCategory = subCategory;
        showCategory.modal = false;
        returnCategory();
    };
    const returnCategory = async () => {
        showCategory.category = true;
        showCategory.subCategory = false;
        // showCategory.filter = false;
    };

    const filterCategory = async (id) => {
        for (let i = 0; i < categories.value.length; i++) {
            if (categories.value[i].id == id) {
                selectedSubCategory(categories.value[i]);
                return;
            } else if (categories.value[i].children.length != 0) {
                for (let y = 0; y < categories.value[i].children.length; y++) {
                    if (categories.value[i].children[y].id == id) {
                        selectedSubCategory(categories.value[i].children[y]);
                        return;
                    }
                }
            }
        }
    };

    const saveRecentSearch = async (userId, catId) => {
        errors.value = [];
        try {
            loading.value = 1;
            let response = await axiosClient.get(
                `/search-save-recent/${userId}/${catId}`
            );
            let recent_search = response.data.data;
            localStorage.setItem("recent_search", recent_search.recent_search);

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
    return {
        errors,
        loading,
        searchData,
        showCategory,
        selectCategory,
        selectedCategory,
        saveRecentSearch,
        selectedSubCategory,
        returnCategory,
        categories,
        filterCategory,
        mount,
    };
}
