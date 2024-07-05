<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";

const count = ref(0)

onBeforeMount(() => {
    console.log('component about to mount');
})

onMounted(() => {
    console.log('component has been mounted');
})

onBeforeUpdate(() => {
    console.log('component about to update');
})


onUpdated(() => {
    console.log('component has been updated');
})

onUnmounted(() => {
    console.log('component has been unmounted');
})

onBeforeUnmount(() => {
    console.log('component about to unmount');
})

</script>

<template>
    <h2>Lifecycle hooks child component</h2>
    <hr>

    <h2>Count: {{ count }}</h2>
    <button @click="count++">++ Increment</button>
    <button @click="count--">-- Decrement</button>
    <button @click="count = 0">Reset</button>

</template>