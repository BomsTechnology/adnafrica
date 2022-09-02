<script setup>
import { CloudUploadIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import UploadList from "./UploadList.vue";

const dropzoneFile = ref(null);
const isDrag = ref(false);
const keyIndex = ref(0);
const files = ref([]);
const props = defineProps({
    modelValue: {
        type: Array,
    },
    multiple: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["update:modelValue"]);

async function handleFiles(event) {
    // files.value = [];
    // emit("update:modelValue", []);
    const inputValue =
        event.target.files ||
        event.dataTransfer.files ||
        dropzoneFile.value.files;
    for (let i = 0; i < inputValue.length; i++) {
        const fileitem = inputValue[i];
        files.value.push({ id: keyIndex.value, file: fileitem });
        keyIndex.value++;
    }
    emit("update:modelValue", files.value);
    isDrag.value = false;
}

async function deleteItem(item) {
    files.value.splice(files.value.indexOf(item), 1);
    files.value = files.value.reverse();
}

async function toogleActiveDrag() {
    isDrag.value = !isDrag.value;
}
</script>
<template>
    <div class="w-full">
        <div
            :class="[
                isDrag
                    ? 'flex w-full flex-col items-center justify-center rounded border-2 border-dashed bg-secondary-color p-4 transition-colors'
                    : 'flex w-full flex-col items-center justify-center rounded border-2 border-dashed bg-white p-4 transition-colors',
            ]"
        >
            <input
                v-if="multiple"
                type="file"
                multiple
                accept="image/*"
                name="dropzone-file"
                id="dropzone-file"
                class="hidden"
                ref="dropzoneFile"
                @change="handleFiles($event)"
            />
            <input
                v-else
                :disabled="files.length != 0 ? true : false"
                type="file"
                accept="image/*"
                name="dropzone-file"
                id="dropzone-file"
                class="hidden"
                ref="dropzoneFile"
                @change="handleFiles($event)"
            />
            <div
                class="w-full"
                @dragenter.prevent="toogleActiveDrag()"
                @dragover.prevent=""
                @dragleave="toogleActiveDrag()"
                @drop.prevent="handleFiles($event)"
            >
                <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center text-center"
                >
                    <CloudUploadIcon
                        :class="[
                            isDrag
                                ? 'h-8 w-8 text-white lg:h-10 lg:w-10'
                                : 'h-8 w-8 text-gray-500 lg:h-10 lg:w-10',
                        ]"
                    />
                    <div
                        :class="[
                            isDrag
                                ? 'space-y-4 text-xs text-white '
                                : 'space-y-4 text-xs',
                        ]"
                    >
                        <p>
                            <span class="block font-semibold"
                                >Drag and Drop files to upload</span
                            >
                            <span class="block"
                                >Your files will be added automatically</span
                            >
                        </p>
                        <span
                            :class="[
                                isDrag
                                    ? 'inline-block cursor-pointer rounded border border-white px-2 py-1 text-xs text-white'
                                    : 'inline-block cursor-pointer rounded border border-gray-600 px-2 py-1 text-xs text-gray-900',
                            ]"
                            >Or select files</span
                        >
                    </div>
                </label>
            </div>
        </div>
        <Transition
            enter-active-class="transition duration-500"
            enter-from-class="opacity-0 -translate-y-full absolute"
            enter-to-class="opacity-1 translate-y-0"
            leave-active-class="transition duration-500"
            leave-from-class="opacity-1/2 translate-y-0"
            leave-to-class="-translate-y-1/2 opacity-0 "
        >
            <UploadList
                v-if="files.length != 0"
                :files="files"
                @remove-item="deleteItem"
            />
        </Transition>
    </div>
</template>
