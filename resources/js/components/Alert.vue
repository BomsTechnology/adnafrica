<script setup>
import { onMounted, ref, computed, watch } from "vue";
const props = defineProps({
    show: {
        type: Boolean,
        default: true,
    },
    type: {
        type: String,
        default: "Success",
    },
    message: {
        type: String,
        default: "No Message !!!",
    },
    delay: {
        type: Number,
        default: 2500,
    },
});

const shower = ref(null);
const bgColor = ref("");
const textColor = ref("");
const icon = ref("");
const message = ref("");
const type = ref("");

const switchData = (display, ctype, cmessage) => {
    shower.value = display;
    message.value = cmessage;
    type.value = ctype;
    switch (ctype) {
        case "Success":
            textColor.value = "text-emerald-500";
            bgColor.value = "bg-emerald-500";
            icon.value =
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>';
            break;
        case "Info":
            textColor.value = "text-blue-500";
            bgColor.value = "bg-blue-500";
            icon.value =
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>';
            break;
        case "Favorite":
            textColor.value = "text-pink-500";
            bgColor.value = "bg-pink-500";
            icon.value =
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg>';
            break;
        case "Warning":
            textColor.value = "text-yellow-400";
            bgColor.value = "bg-yellow-400";
            icon.value =
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd" /></svg>';
            break;
        case "Error":
            textColor.value = "text-red-500";
            bgColor.value = "bg-red-500";
            icon.value =
                '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>';
            break;
    }
    setTimeout(() => {
        if (shower.value) shower.value = false;
    }, props.delay);
};

watch(props.show, (newProps, oldProps) => {
    switchData(newProps, props.type, props.message);
});

onMounted(() => {
    switchData(props.show, props.type, props.message);
});
// computed({
//     get() {
//         shower.value = props.show;
//     },
//     ser(newValue) {},
// });
</script>

<template>
    <Transition name="toast">
        <div
            v-if="shower"
            class="fixed right-4 bottom-0 z-50 flex w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md"
        >
            <div
                :class="
                    'flex w-14 items-center justify-center text-white ' +
                    bgColor
                "
            >
                <span v-html="icon"></span>
            </div>

            <div class="-mx-3 py-2 px-4">
                <div class="mx-3">
                    <span :class="'font-semibold ' + textColor">{{
                        type
                    }}</span>
                    <p class="py-2 text-sm text-gray-600">
                        {{ message }}
                    </p>
                </div>
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
    transform: translateY(-40px);
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
        transform: translateY(-40px);
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
