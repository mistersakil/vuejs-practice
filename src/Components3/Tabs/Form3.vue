<script setup>

import { ref, onActivated, onDeactivated } from 'vue'
const name = ref('')

onActivated(() => {
    console.log('Form3 activated');
})

onDeactivated(() => {
    console.log('Form3 de-activated');
})

</script>

<template>
    <h1>Form three</h1>
    <p>
        <input v-model="name" type="text">
    </p>


</template>