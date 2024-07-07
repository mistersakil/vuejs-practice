<script setup>
import { ref, onMounted, watch } from 'vue'
const nameRef = ref('aaa')
const nameDetails = ref('');
// watch(nameRef, (newVal, oldVal) => {
//     console.log(nameRef.value);
//     nameDetails.value = `Result: ${newVal}`
// });

onMounted(() => {
    console.log(nameRef.value.value);
    nameRef.value.focus();
})
</script>

<template>
    <h1>Component Ref</h1>
    <hr>
    <input ref="nameRef" type="text" placeholder="write something">

    <h3 v-if="nameDetails">{{ nameDetails }}</h3>
</template>