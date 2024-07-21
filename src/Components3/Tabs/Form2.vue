<script setup>
import { ref, onActivated, onDeactivated } from 'vue'
const name = ref('')

onActivated(() => {
    console.log('Form2 activated');
})

onDeactivated(() => {
    console.log('Form2 de-activated');
})

</script>

<template>
    <h1>Form two</h1>
    <p>
        <input v-model="name" type="text">
    </p>


</template>