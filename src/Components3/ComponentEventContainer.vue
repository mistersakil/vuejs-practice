<script setup>
import { ref } from "vue"
import ComponentEventChild from "./ComponentEventChild.vue";
const count = ref(0)

const increase = (step) => {
    console.log(step);
    count.value += step;
}
</script>
<template>
    <h2>Component Event Container</h2>
    <hr>
    <h3>Count: {{ count }}</h3>

    <ComponentEventChild @increaseEventFromChild="count++" />
    <ComponentEventChild @increaseEventFromChild="increase(2)" />
    <ComponentEventChild @increaseEventFromChild="increaseByArg" />



</template>