<script setup>
import { reactive } from "vue";

const announcement = reactive({
    country: "",
    city: "",
});
</script>
<template>
    <div class="h-full p-8">
        <h1 class="text-3xl font-bold">Create Training</h1>
        <div class="mt-10 bg-white p-4 lg:p-8">
            <!-- <Error :errors="errors" @cleanErrors="cleanErrors" /> -->
            <form action="">
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div>
                        <label
                            for="title"
                            class="mb-2 block text-sm font-medium text-gray-900"
                            >Title</label
                        >
                        <input
                            type="text"
                            id="title"
                            class="block w-full rounded border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>
                <div></div>
            </form>
        </div>
    </div>
</template>
