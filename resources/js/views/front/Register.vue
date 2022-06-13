<script setup>
import { reactive } from "vue";
import useAuth from "../../services/authServices.js";

const user = reactive({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    password_confirmation: "",
    type: "user",
});

const { createUser, errors, loading } = useAuth();

const register = async () => {
    await createUser({ ...user });
};
</script>

<template>
    <Goback />
    <section class="mb-16">
        <div
            class="m-auto w-full max-w-sm rounded-md bg-white p-6 shadow-md dark:bg-gray-800"
        >
            <h1 class="text-center text-3xl font-semibold text-gray-700">
                Rejoindre Adnafrica
            </h1>
            <form @submit.prevent="register()" class="mt-6">
                <div class="mt-4">
                    <div>
                        <label for="email" class="block text-sm text-gray-800"
                            >E-mail</label
                        >
                        <input
                            type="email"
                            required
                            v-model="user.email"
                            class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
                        />
                    </div>
                </div>
                <div class="mt-6">
                    <button
                        v-if="loading == 0"
                        class="w-full transform rounded-md bg-primary-color px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
                    >
                        S'inscrire
                    </button>
                    <button
                        v-if="loading == 1"
                        class="flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
                    >
                        <svg
                            class="mr-3 h-5 w-5 animate-spin text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                class="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                            ></circle>
                            <path
                                class="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        S'inscrire
                    </button>
                </div>
            </form>

            <p class="mt-8 text-center text-xs font-light text-gray-400">
                Vous avez déja un compte ?
                <router-link
                    :to="{ name: 'login' }"
                    class="font-medium text-primary-color hover:underline dark:text-gray-200"
                    >Se connecter</router-link
                >
            </p>
        </div>
    </section>
</template>
