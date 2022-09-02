<script setup>
import { XCircleIcon } from "@heroicons/vue/24/solid";
import { computed, ref } from "vue";

const props = defineProps({
    files: {
        type: Array,
        default: [],
    },
});

const emit = defineEmits(["removeItem"]);
const items = computed(() => props.files.reverse());
function previewImage(file) {
    return URL.createObjectURL(file);
}
function loadImage(file) {
    return URL.revokeObjectURL(file);
}
function bytesToSize(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}
function deleteItem(item) {
    emit("removeItem", item);
}
</script>
<template>
    <div
        class="no-scrollbar h-36 w-full items-center justify-start space-x-2 overflow-x-auto rounded-b bg-gray-50 p-3"
    >
        <div
            v-for="(item, index) in items"
            :key="item.id"
            class="relative inline-block h-full w-28 overflow-hidden rounded bg-white shadow sm:w-36"
        >
            <img
                :src="previewImage(item.file)"
                @load="loadImage(item.file)"
                :alt="item.file.name"
                class="h-full w-full object-cover"
            />
            <button
                type="button"
                @click="deleteItem(item)"
                class="absolute top-2 left-2 rounded-full text-[10px] text-black/50 text-white hover:text-secondary-color"
            >
                <XCircleIcon class="h-5 w-5" />
            </button>
            <span
                class="absolute bottom-2 right-2 rounded-full bg-black/50 py-1 px-2 text-[10px] text-white"
                >{{ bytesToSize(item.file.size) }}</span
            >
        </div>
    </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
