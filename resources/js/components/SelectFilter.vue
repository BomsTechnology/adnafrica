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
    subCategory: {
        type: Boolean,
        default: false,
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
const subCategory = ref(false);
const selectItem = reactive({
    id: "",
    name: "",
});

const filteredData = computed(() => {
    let data = props.data.filter((item) =>
        item.name.toLowerCase().includes(search.value.toLowerCase())
    );
    if (data.length != 0) {
        subCategory.value = props.subCategory;
        return data;
    } else if (props.subCategory) {
        subCategory.value = false;
        data = props.data.filter((item) =>
            item.name.toLowerCase().includes(search.value.toLowerCase())
        );
        if (data.length != 0) {
            return data;
        } else {
            data = [];
            for (let i = 0; i < props.data.length; i++) {
                if (props.data[i].children.length != 0) {
                    props.data[i].children.forEach((element) => {
                        if (
                            element.name
                                .toLowerCase()
                                .includes(search.value.toLowerCase())
                        ) {
                            data.push(element);
                        }
                    });
                }
            }
            return data;
        }
    } else {
        return [];
    }
});

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
        if (!props.subCategory) {
            let currentData = newProps.data.find(
                (item) => item.id == newProps.modelValue
            );
            selectItem.id = currentData.id;
            selectItem.name = currentData.name;
        } else {
            for (let i = 0; i < newProps.data.length; i++) {
                if (newProps.data[i].id == newProps.modelValue) {
                    selectItem.id = newProps.data[i].id;
                    selectItem.name = newProps.data[i].name;
                    i = newProps.data.length;
                } else if (newProps.data[i].children.length != 0) {
                    newProps.data[i].children.forEach((element) => {
                        if (element.id == newProps.modelValue) {
                            selectItem.id = element.id;
                            selectItem.name = element.name;
                            i = newProps.data.length;
                        }
                    });
                }
            }
        }
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
                <template
                    v-if="filteredData.length != 0 && subCategory"
                    v-for="(item, index) in filteredData"
                    :key="index"
                >
                    <span
                        class="block w-full bg-gray-50 px-3 py-2 font-bold text-gray-900"
                    >
                        {{ item.name }}
                    </span>
                    <div>
                        <span
                            @click="changeValue(item)"
                            :class="[
                                selectItem.id == item.id
                                    ? 'block w-full cursor-pointer bg-blue-400 py-2 pr-3 pl-8 font-semibold text-white hover:bg-gray-100 hover:text-gray-900'
                                    : 'block w-full cursor-pointer py-2 pr-3 pl-8 hover:bg-gray-100 hover:font-semibold hover:text-gray-900',
                            ]"
                        >
                            {{ item.name }}
                        </span>
                        <span
                            v-if="item.children.length != 0"
                            v-for="subitem in item.children"
                            :key="subitem.id"
                            @click="changeValue(subitem)"
                            :class="[
                                selectItem.id == subitem.id
                                    ? 'block w-full cursor-pointer bg-blue-400 py-2 pr-3 pl-8 font-semibold text-white hover:bg-gray-100 hover:text-gray-900'
                                    : 'block w-full cursor-pointer py-2 pr-3 pl-8 hover:bg-gray-100 hover:font-semibold hover:text-gray-900',
                            ]"
                        >
                            {{ subitem.name }}
                        </span>
                    </div>
                </template>
                <span
                    v-else-if="filteredData.length != 0"
                    v-for="(item, index) in filteredData"
                    :key="item.id"
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
