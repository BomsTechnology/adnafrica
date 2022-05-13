<script setup>
import { reactive } from "vue";
import useAuth from "../../services/authServices.js";
import Error from "../../components/Error.vue";

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
    <section>
        <div
            class="m-auto w-full max-w-4xl rounded-md bg-white p-6 shadow-md dark:bg-gray-800"
        >
            <h1
                class="text-center text-3xl font-semibold text-gray-700 dark:text-white"
            >
                S'inscrire
            </h1>
            <p
                class="mt-1 text-center font-light text-gray-500 dark:text-gray-400"
            >
                Remplir les champs ci-dessous pour vous insrire
            </p>
            <Error
                :errors="errors"
                :hideErrors="
                    () => {
                        errors = '';
                    }
                "
            />
            <form @submit.prevent="register()" class="mt-6">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label
                            for="lastname"
                            class="block text-sm text-gray-800 dark:text-gray-200"
                            >Nom</label
                        >
                        <input
                            type="text"
                            required
                            v-model="user.lastname"
                            class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                        />
                    </div>
                    <div>
                        <label
                            for="firstname"
                            class="block text-sm text-gray-800 dark:text-gray-200"
                            >Prénom</label
                        >
                        <input
                            type="text"
                            required
                            v-model="user.firstname"
                            class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                        />
                    </div>
                </div>
                <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label
                            for="email"
                            class="block text-sm text-gray-800 dark:text-gray-200"
                            >E-mail</label
                        >
                        <input
                            type="email"
                            required
                            v-model="user.email"
                            class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                        />
                    </div>
                    <div>
                        <label
                            for="firstname"
                            class="block text-sm text-gray-800 dark:text-gray-200"
                            >Téléphone</label
                        >
                        <input
                            type="text"
                            required
                            v-model="user.phone"
                            class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                        />
                    </div>
                </div>
                <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <div>
                            <label
                                for="password"
                                class="block text-sm text-gray-800 dark:text-gray-200"
                                >Mot de passe</label
                            >
                        </div>

                        <input
                            type="password"
                            required
                            v-model="user.password"
                            class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                        />
                    </div>
                    <div>
                        <div>
                            <label
                                for="cpassword"
                                class="block text-sm text-gray-800 dark:text-gray-200"
                                >Confirmer le mot de passe</label
                            >
                        </div>

                        <input
                            type="password"
                            required
                            v-model="user.password_confirmation"
                            class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                        />
                    </div>
                </div>
                <div class="mt-6">
                    <button
                        class="w-full transform rounded-md bg-blue-500 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-500 focus:outline-none"
                    >
                        S'inscrire
                    </button>
                    <button
                        class="w-full transform rounded-md bg-blue-500 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-500 focus:outline-none"
                    >
                        S'inscrire
                    </button>
                </div>
            </form>

            <p class="mt-8 text-center text-xs font-light text-gray-400">
                Vous avez déja un compte ?
                <router-link
                    :to="{ name: 'login' }"
                    class="font-medium text-blue-700 hover:underline dark:text-gray-200"
                    >Se connecter</router-link
                >
            </p>
        </div>
    </section>
</template>