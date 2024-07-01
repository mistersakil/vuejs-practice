<script setup>
import { ref } from 'vue';
let count = ref(0)
function increment() {
    count.value++;
}
function decrement() {
    count.value--;
}
</script>

<template>
    <button @click="increment">+</button> -
    <button @click="decrement">-</button>
    <div>count: {{ count }}</div>
</template>

<style></style>