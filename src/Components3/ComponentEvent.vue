<script setup>

let { step } = defineProps(['step'])

</script>

<template>
    <button @click="$emit('increment', step)">++</button>

</template>