import axios from "axios";
import { ref } from "vue";
import { axiosClient, axiosClientFile } from "@/axios";

export default function useAnnouncement() {
    const errors = ref([]);
    const loading = ref(0);
    const announcements = ref([]);
    const deleteArray = ref([]);
    const chks = ref([]);
    const chkAll = ref(false);

    const getFormData = (object) =>
        Object.entries(object).reduce((fd, [key, val]) => {
            if (Array.isArray(val)) {
                val.forEach((v) => fd.append(`${key}[]`, v.file));
            } else {
                fd.append(key, val);
            }
            return fd;
        }, new FormData());

    const getAnnouncements = async () => {
        errors.value = [];
        chks.value = [];
        try {
            loading.value = 1;
            let response = await axiosClient.get("/announcements");
            announcements.value = response.data.data;
            loading.value = 2;
            let i = 0;
            announcements.value.forEach((announcement) => {
                chks.value.push({
                    id: announcement.id,
                    value: false,
                    children: [],
                });
                if (announcement.children.length != 0) {
                    announcement.children.forEach((subAnnouncement) => {
                        chks.value[i].children.push({
                            id: subAnnouncement.id,
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

    const createAnnouncement = async (data) => {
        errors.value = [];
        try {
            loading.value = 1;
            await axiosClientFile.post("/announcements", getFormData(data));
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

    const updateAnnouncement = async (data, id) => {
        errors.value = [];
        try {
            loading.value = 1;
            await axiosClientFile.post(`/announcements/${id}`, data);
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

    const deleteAnnouncements = async () => {
        errors.value = [];
        try {
            await axiosClient.delete(
                `/announcements/${JSON.stringify(deleteArray.value)}`
            );
            deleteArray.value = [];
            await getAnnouncements();
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
                chks.value[index].children.forEach((subAnnouncement) => {
                    deleteArray.value.push(subAnnouncement.id);
                    subAnnouncement.value = true;
                });
            }
        } else {
            let pos = deleteArray.value.indexOf(chks.value[index].id);
            deleteArray.value.splice(pos, 1);
            if (chks.value[index].children.length != 0) {
                chks.value[index].children.forEach((subAnnouncement) => {
                    pos = deleteArray.value.indexOf(subAnnouncement.id);
                    deleteArray.value.splice(pos, 1);
                    subAnnouncement.value = false;
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
            chks.value.forEach((announcement) => {
                if (!announcement.value) {
                    announcement.value = true;
                    deleteArray.value.push(announcement.id);
                    if (announcement.children.length != 0) {
                        announcement.children.forEach((subAnnouncement) => {
                            if (!subAnnouncement.value) {
                                subAnnouncement.value = true;
                                deleteArray.value.push(subAnnouncement.id);
                            }
                        });
                    }
                }
            });
        } else {
            chks.value.forEach((announcement) => {
                announcement.value = false;
                if (announcement.children.length != 0) {
                    announcement.children.forEach((subAnnouncement) => {
                        subAnnouncement.value = false;
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
        announcements,
        getAnnouncements,
        updateAnnouncement,
        createAnnouncement,
        deleteAnnouncements,
        toogleDeleteArray,
        toogleChildDeleteArray,
    };
}
