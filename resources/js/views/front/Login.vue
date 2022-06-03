<script setup>
import useAuth from "../../services/authServices.js";
</script>

<template>
    <section>
        <div class="m-auto w-full max-w-sm rounded-md bg-white p-6 shadow-md">
            <h1 class="text-center text-3xl font-semibold text-gray-700">
                Se Connecter
            </h1>
            <p
                class="mt-2 text-center font-light text-gray-500 dark:text-gray-400"
            >
                Connectez-vous pour accéder à votre compte
            </p>
            <form class="mt-6">
                <div>
                    <label
                        for="username"
                        class="block text-sm text-gray-800 dark:text-gray-200"
                        >E-mail</label
                    >
                    <input
                        type="email"
                        required
                        class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-primary-color"
                    />
                </div>

                <div class="mt-4">
                    <div class="flex items-center justify-between">
                        <label
                            for="password"
                            class="block text-sm text-gray-800 dark:text-gray-200"
                            >Mot de passe</label
                        >
                        <a
                            href="#"
                            class="text-xs text-primary-color hover:underline dark:text-gray-400"
                            >Mot de passe oublié ?</a
                        >
                    </div>

                    <input
                        type="password"
                        required
                        class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-primary-color"
                    />
                </div>

                <div class="mt-6">
                    <button
                        class="w-full transform rounded-md bg-primary-color px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
                    >
                        Se Connecter
                    </button>
                </div>
            </form>

            <p class="mt-8 text-center text-xs font-light text-gray-400">
                Vous n'avez pas de compte ?
                <router-link
                    :to="{ name: 'register' }"
                    class="font-medium text-primary-color hover:underline dark:text-gray-200"
                    >S'inscrire</router-link
                >
            </p>
        </div>
    </section>
</template>
