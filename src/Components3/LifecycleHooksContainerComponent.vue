<script setup>
import LifecycleHooks from "./LifecycleHooks.vue";
import { ref } from "vue"
const count = ref(0)

const toggleCounter = ref(true)

</script>

<template>
    <h1>Lifecycle hooks container</h1>
    <button @click="toggleCounter = !toggleCounter">hide counter</button>
    <hr>
    <LifecycleHooks v-if="toggleCounter" />

</template>