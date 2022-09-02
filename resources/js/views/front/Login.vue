<script setup>
import useAuth from "@/services/authServices.js";
import { reactive } from "vue";
const { loginUser, errors, loading, cleanErrors } = useAuth();
const user = reactive({
    email: "",
    password: "",
});

const login = async () => {
    await loginUser({ ...user });
    if (errors.value == "") {
        location.href = "/";
    }
};
</script>

<template>
    <Goback />
    <section class="mb-16 mt-10">
        <div class="m-auto w-full max-w-sm rounded-md bg-white p-6 shadow-md">
            <h1 class="text-center text-3xl font-semibold text-gray-700">
                Se Connecter
            </h1>
            <p
                class="dark:text-gray-400 mt-2 text-center font-light text-gray-500"
            >
                Connectez-vous pour accéder à votre compte
            </p>
            <Error :errors="errors" @cleanErrors="cleanErrors" />
            <form @submit.prevent="login" class="mt-6">
                <div>
                    <label
                        for="username"
                        class="dark:text-gray-200 block text-sm text-gray-800"
                        >E-mail</label
                    >
                    <input
                        type="email"
                        v-model="user.email"
                        required
                        class="dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-primary-color mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
                    />
                </div>

                <div class="mt-4">
                    <div class="flex items-center justify-between">
                        <label
                            for="password"
                            class="dark:text-gray-200 block text-sm text-gray-800"
                            >Mot de passe</label
                        >
                        <a
                            href="#"
                            class="dark:text-gray-400 text-xs text-primary-color hover:underline"
                            >Mot de passe oublié ?</a
                        >
                    </div>

                    <input
                        type="password"
                        v-model="user.password"
                        required
                        class="dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-primary-color mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
                    />
                </div>

                <div class="mt-6">
                    <button
                        v-if="loading == 0"
                        type="submit"
                        class="w-full transform rounded-md bg-primary-color px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
                    >
                        Se Connecter
                    </button>
                    <button
                        type="button"
                        v-if="loading == 1"
                        disabled
                        class="flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
                    >
                        <Spin />
                    </button>
                </div>
            </form>

            <p class="mt-8 text-center text-xs font-light text-gray-400">
                Vous n'avez pas de compte ?
                <router-link
                    :to="{ name: 'register' }"
                    class="dark:text-gray-200 font-medium text-primary-color hover:underline"
                    >S'inscrire</router-link
                >
            </p>
        </div>
    </section>
</template>
