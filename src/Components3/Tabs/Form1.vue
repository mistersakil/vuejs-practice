<script setup>
import { ref, onActivated, onDeactivated } from 'vue'
const name = ref('')

onActivated(() => {
    console.log('Form1 activated');
})
onDeactivated(() => {
    console.log('Form1 de-activated');
})
</script>

<template>
    <h1>Form one</h1>
    <p>
        <input v-model="name" type="text">
    </p>


</template>