<script setup>
import useAuth from "../../services/authServices.js";


</script>

<template>

<section>
    
    <div class="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">Se Connecter</h1>

        <form class="mt-6">
            <div>
                <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">E-mail</label>
                <input type="email"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>

            <div class="mt-4">
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                    <a href="#" class="text-xs text-blue-500 dark:text-gray-400 hover:underline">Forget Password?</a>
                </div>

                <input type="password"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>

            <div class="mt-6">
                <button
                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-500">
                    Login
                </button>
            </div>
        </form>

        <p class="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <a href="#"
                class="font-medium text-blue-700 dark:text-gray-200 hover:underline">Create One</a></p>
    </div>
</section>

</template>