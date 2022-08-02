import axios from "axios";
import { useAuthenticateStore } from "@/stores/authenticate";
const authenticateStore = useAuthenticateStore();

const axiosClient = axios.create({
    baseURL: `${window.location.origin}/api`,
});

const axiosClientFile = axios.create({
    baseURL: `${window.location.origin}/api`,
});

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${authenticateStore.token}`;
    return config;
});

axiosClientFile.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${authenticateStore.token}`;
    config.headers.post["Content-Type"] = `multipart/form-data`;
    return config;
});

export { axiosClient, axiosClientFile };
