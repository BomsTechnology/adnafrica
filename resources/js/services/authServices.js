import axios from "axios";
import { ref } from "vue";
import router from "../router";

export default function useAuth() {
    const user = ref([]);
    const errors = ref('');
    const loading = ref(0);

    const createUser = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.post('/api/register', data);
            loading.value = 2;
            //router.push({ name: "login" });
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const loginUser = async (data) => {
        errors.value = ''; 
        try {
            loading.value = 1;
            let response = await axios.post('/api/login', data);
            user.value = response.data.data;
            localStorage.user = JSON.stringify(response.data.data.user);
            localStorage.token = response.data.data.token;
            loading.value = 2;
            //router.push({ name: "home" });
        } catch (e) {
                    loading.value = 0;
                    // errors.value = "invalid email or password";
                    errors.value = e.response.data.message
        }
    };

    const loginAdmin = async (data) => {
        errors.value = ''; 
        try {
            loading.value = 1;
            let response = await axios.post('/api/login-admin', data);
            localStorage.user = JSON.stringify(response.data.data.user);
            localStorage.token = response.data.data.token;
            loading.value = 2;
            router.push({ name: "admin.dash" });
        } catch (e) {
                    loading.value = 0;
                    errors.value = "invalid email or password";

        }
    };

    return {
        createUser,
        errors,
        loading,
        user,
        loginUser,
        loginAdmin,
    }
}