<script setup>
import { ref } from 'vue'
const name = ref('')
</script>

<template>
    <h1>Form one</h1>
    <p>
        <input v-model="name" type="text">
    </p>


</template>