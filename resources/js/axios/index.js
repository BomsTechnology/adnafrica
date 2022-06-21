import axios from "axios";
import { useAuthenticateStore } from "@/stores/authenticate";
import { config } from "vue/types/umd";
const authenticateStore = useAuthenticateStore;

const axiosClient = axios.create({
    baseURL: `${window.location.origin}/api`,
});

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${authenticateStore.token}`;
    return config;
});

export default axiosClient;
