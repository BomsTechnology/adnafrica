<script setup>
const props = defineProps({
    errors: String,
});
const emit = defineEmits(["cleanErrors"]);

const hideErrors = () => {
    emit("cleanErrors");
};
</script>

<template>
    <Transition name="toast">
        <div
            class="mt-4 w-full bg-red-500 text-white"
            v-if="props.errors != ''"
        >
            <div
                class="container mx-auto flex items-center justify-between px-6 py-4"
            >
                <div class="flex">
                    <svg viewBox="0 0 40 40" class="h-6 w-6 fill-current">
                        <path
                            d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
                        ></path>
                    </svg>

                    <p class="mx-3 text-sm">
                        {{ props.errors }}
                    </p>
                </div>

                <button
                    @click="hideErrors()"
                    class="transform rounded-md p-1 transition-colors duration-200 hover:bg-gray-600 hover:bg-opacity-25 focus:outline-none"
                >
                    <svg
                        class="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 18L18 6M6 6L18 18"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </Transition>
</template>

<style>
.toast-enter-active {
    animation: wooble 0.5s ease;
}
.toast-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}
.toast-leave-from {
    opacity: 1;
    transform: translateY(0);
}
.toast-leave-active {
    transition: all 0.5s ease;
}
@keyframes wooble {
    0% {
        opacity: 0;
        transform: translateY(-60px);
    }
    50% {
        opacity: 1;
        transform: translateY(0);
    }
    60% {
        transform: translateX(8px);
    }
    70% {
        transform: translateX(-8px);
    }
    80% {
        transform: translateX(4px);
    }
    90% {
        transform: translateX(-4px);
    }
    100% {
        transform: translateX(0s);
    }
}
</style>
