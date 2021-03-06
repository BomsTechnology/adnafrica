import axios from "axios";
import { ref } from "vue";
import router from "../router";

export default function useAuth() {
    const user = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const sendEmailVerification = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.post("/api/send-verification-email", data);
            loading.value = 0;
        } catch (error) {
            if (error.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            } else {
                errors.value = error.response.data.message;
            }

            loading.value = 0;
        }
    };

    const sendSmsVerification = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.post("/api/send-verification-sms", data);
            loading.value = 0;
        } catch (error) {
            if (error.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            } else {
                errors.value = error.response.data.message;
            }

            loading.value = 0;
        }
    };

    const createUser = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axios.post("/api/register", data);
            user.value = response.data.data;
            localStorage.user = JSON.stringify(response.data.data.user);
            localStorage.tokenUser = response.data.data.token;
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const loginUser = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axios.post("/api/login", data);
            user.value = response.data.data;
            localStorage.user = JSON.stringify(response.data.data.user);
            localStorage.tokenUser = response.data.data.token;
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            errors.value = e.response.data.message;
        }
    };

    // const loginAdmin = async (data) => {
    //     errors.value = "";
    //     try {
    //         loading.value = 1;
    //         let response = await axios.post("/api/login-admin", data);
    //         localStorage.user = JSON.stringify(response.data.data.user);
    //         localStorage.token = response.data.data.token;
    //         loading.value = 2;
    //         router.push({ name: "admin.dash" });
    //     } catch (e) {
    //         loading.value = 0;
    //         errors.value = "invalid email or password";
    //     }
    // };

    return {
        sendEmailVerification,
        sendSmsVerification,
        createUser,
        errors,
        loading,
        user,
        loginUser,
        // loginAdmin,
    };
}
