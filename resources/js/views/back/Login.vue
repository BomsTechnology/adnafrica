<script setup>

</script>

<template>

<section class="h-screen flex justify-center items-center bg-gray-50">
    
    <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="px-6 py-4">
            <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">Admin panel</h2>

            <p class="mt-1 text-center font-light text-gray-500 dark:text-gray-400">login to acces the admin panel </p>

            <form>
                <div class="w-full mt-4">
                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                </div>

                <div class="w-full mt-4">
                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
                </div>

                <div class="w-full mt-4">

                    <button class="px-4 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="button">Login</button>
                </div>
            </form>
        </div>

    </div>
</section>

</template>