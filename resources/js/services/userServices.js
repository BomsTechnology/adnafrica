import { ref } from "vue";
import { axiosClient, axiosClientFile } from "@/axios";

export default function useUser() {
    const errors = ref([]);
    const loading = ref(0);
    const users = ref([]);
    const user = ref([]);
    const deleteArray = ref([]);
    const chks = ref([]);
    const chkAll = ref(false);

    const getUsers = async () => {
        errors.value = [];
        chks.value = [];
        try {
            loading.value = 1;
            let response = await axiosClient.get("/users");
            users.value = response.data.data;
            loading.value = 2;

            users.value.forEach((user) => {
                chks.value.push({
                    id: user.id,
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
            } else {
                errors.value.push(e.response.data.message);
            }
        }
    };

    const createUser = async (data) => {
        errors.value = [];
        try {
            loading.value = 1;
            await axiosClient.post("/users", data);
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

    const updateUser = async (data, id) => {
        errors.value = [];
        try {
            loading.value = 1;
            await axiosClient.put(`/users/${id}`, data);
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

    const deleteUsers = async () => {
        errors.value = [];
        try {
            await axiosClient.delete(
                `/users/${JSON.stringify(deleteArray.value)}`
            );
            deleteArray.value = [];
            await getUsers();
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
        } else {
            let pos = deleteArray.value.indexOf(chks.value[index].id);
            deleteArray.value.splice(pos, 1);
        }
    };

    const checkAll = async () => {
        if (chkAll.value) {
            chks.value.forEach((user) => {
                if (!user.value) {
                    user.value = true;
                    deleteArray.value.push(user.id);
                }
            });
        } else {
            chks.value.forEach((user) => {
                user.value = false;
            });
            deleteArray.value = [];
        }
    };

    const cleanErrors = () => {
        errors.value = [];
    };

    const getUser = async (id) => {
        errors.value = [];
        try {
            loading.value = 1;
            let response = await axiosClient.get(`/users/${id}`);
            user.value = response.data.data;
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
        chks,
        chkAll,
        errors,
        loading,
        checkAll,
        cleanErrors,
        user,
        users,
        getUser,
        getUsers,
        updateUser,
        createUser,
        deleteUsers,
        toogleDeleteArray,
    };
}
