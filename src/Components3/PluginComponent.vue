<script setup>
import { ref } from 'vue'

const $counter = ref(10)

</script>

<template>
    <h1>Vue Plugin component using plugin pattern</h1>
    <hr>

    <h3 v-font-style="$counter">counter: {{ $counter }}</h3>

    <button @click="$counter++">increment ++</button>

</template>