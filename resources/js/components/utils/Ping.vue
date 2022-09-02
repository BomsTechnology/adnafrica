<script setup>
const props = defineProps({
    color: {
        type: String,
        default: 'red'
    },
});
const color1 = "bg-" + props.color + "-400";
const color2 = "bg-" + props.color + "-500";
</script>
<template>
    <span class="absolute top-1 right-0 flex h-2 w-2">
        <span
            :class="
                ' absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ' +
                color1
            "
        ></span>
        <span
            :class="' relative inline-flex h-2 w-2 rounded-full ' + color2"
        ></span>
    </span>
</template>
