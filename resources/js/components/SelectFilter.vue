<script setup>
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/solid";
import { computed, reactive, ref, watch } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
    placeholder: {
        type: String,
        default: "Select item",
    },
    required: {
        type: Boolean,
        default: true,
    },
    className: {
        type: String,
        default: "",
    },
    data: {
        type: Array,
    },
    modelValue: {
        type: String,
    },
    resetField: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:modelValue", "resetValue"]);

const open = ref(false);
const search = ref("");
const itemModal = ref(null);
const selectItem = reactive({
    id: "",
    name: "",
});

const filteredData = computed(() =>
    props.data.filter((item) =>
        item.name.toLowerCase().includes(search.value.toLowerCase())
    )
);

async function changeValue(item) {
    selectItem.id = item.id;
    selectItem.name = item.name;
    emit("update:modelValue", `${item.id}`);
    open.value = false;
}

async function resetValue() {
    emit("update:modelValue", "");
    selectItem.id = "";
    selectItem.name = "";
    search.value = "";
    open.value = false;
}

watch(props, async (newProps, oldProps) => {
    if (newProps.modelValue) {
        let currentData = newProps.data.find(
            (item) => item.id == newProps.modelValue
        );
        selectItem.id = currentData.id;
        selectItem.name = currentData.name;
    } else {
        resetValue();
    }
});

onClickOutside(itemModal, () => {
    open.value = false;
});
</script>
<template>
    <div class="relative">
        <span
            @click="open = !open"
            class="absolute right-3 top-1/4 cursor-pointer"
            ><ChevronDownIcon v-if="!open" class="h-5 w-5 text-gray-400" />
            <ChevronUpIcon v-else class="h-5 w-5 text-gray-400"
        /></span>
        <input
            readonly
            :value="selectItem.name"
            :required="required"
            :class="className + ' cursor-pointer'"
            :placeholder="placeholder"
            @click="open = !open"
        />
        <div
            ref="itemModal"
            v-show="open"
            class="absolute top-full z-50 w-full rounded-b bg-white shadow"
        >
            <input
                type="text"
                v-model="search"
                class="container mx-auto my-2 block w-[95%] border border-gray-300 py-2 px-3 text-sm focus:border-indigo-500 focus:outline-none"
            />
            <div class="mt-4 h-48 w-full overflow-y-auto text-sm">
                <span
                    v-if="resetField"
                    @click="resetValue()"
                    class="block w-full cursor-pointer py-2 px-3 text-gray-400 hover:bg-gray-100 hover:font-semibold hover:text-gray-900"
                >
                    {{ placeholder }}
                </span>
                <span
                    v-if="filteredData.length != 0"
                    v-for="(item, index) in filteredData"
                    :key="index"
                    @click="changeValue(item)"
                    :class="[
                        selectItem.id == item.id ||
                        (selectItem.id == '' && index == 0)
                            ? 'block w-full cursor-pointer bg-blue-400 px-3 py-2 font-semibold text-white hover:bg-gray-100 hover:text-gray-900'
                            : 'block w-full cursor-pointer px-3 py-2 hover:bg-gray-100 hover:font-semibold hover:text-gray-900',
                    ]"
                    >{{ item.name }}</span
                >
                <span v-else class="block w-full py-2 text-center font-bold">
                    NO DATA !
                </span>
            </div>
        </div>
    </div>
</template>
