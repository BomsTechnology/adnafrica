import { defineStore } from "pinia";
// import useAuth from "@/composables/authServices.js";
// const { sendEmailVerification, sendSmsVerification, errors } = useAuth();

export const useAuthenticateStore = defineStore("authenticate", {
    state: () => {
        return {
            user: localStorage.user ? JSON.parse(localStorage.user) : null,
            token: localStorage.tokenUser ? localStorage.tokenUser : null,
        };
    },
    actions: {},
    getters: {},
});
