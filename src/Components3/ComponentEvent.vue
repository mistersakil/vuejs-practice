<script setup>

let { step } = defineProps(['step'])

</script>

<template>
    <h1>Component event</h1>
    <button @click="$emit('increment', step)">++</button>

</template>