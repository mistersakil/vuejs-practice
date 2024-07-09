<script setup>
import { ref } from "vue";
import ComposableComponent from './ComposableComponent.vue';
const toggle = ref(true);
</script>

<template>
    <h1>Composable Container</h1>
    <button @click="toggle = !toggle">toggle composable</button>
    <hr>
    <h2>Composable Component Example</h2>
    <ComposableComponent v-if="toggle" />



</template>