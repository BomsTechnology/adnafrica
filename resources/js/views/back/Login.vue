<script setup>
import useAuth from "@/services/authServices.js";
import { reactive } from "vue";

const { loginAdmin, errors, loading, cleanErrors } = useAuth();

const user = reactive({
    email: "",
    password: "",
});

const login = async () => {
    await loginAdmin({ ...user });
    if (errors.value == "") {
        location.href = "/admin";
    }
};
</script>

<template>
    <section
        class="flex h-screen w-full items-center justify-center bg-gray-50"
    >
        <div
            class="dark:bg-gray-800 mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md"
        >
            <div class="px-6 py-4">
                <h2
                    class="dark:text-white text-center text-3xl font-bold text-gray-700"
                >
                    Admin panel
                </h2>

                <p
                    class="dark:text-gray-400 mt-1 text-center font-light text-gray-500"
                >
                    login to acces the admin panel
                </p>
                <Error :errors="errors" @cleanErrors="cleanErrors" />
                <form @submit.prevent="login" class="mt-6">
                    <div class="mt-4 w-full">
                        <input
                            v-model="user.email"
                            class="dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-300 mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            type="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                        />
                    </div>

                    <div class="mt-4 w-full">
                        <input
                            v-model="user.password"
                            class="dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-300 mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                        />
                    </div>

                    <div class="mt-4 w-full">
                        <button
                            v-if="loading == 0"
                            class="w-full transform rounded bg-primary-color px-4 py-2 leading-5 text-white transition-colors duration-200 hover:bg-secondary-color focus:outline-none"
                            type="submit"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            v-if="loading == 1"
                            disabled
                            class="flex w-full transform items-center justify-center rounded bg-secondary-color px-4 py-2 leading-5 text-white transition-colors duration-200 hover:bg-secondary-color focus:outline-none"
                        >
                            <Spin />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
