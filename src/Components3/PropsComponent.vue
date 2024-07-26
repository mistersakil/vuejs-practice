<script setup>

let { fName, lName } = defineProps(['fName', 'lName']);
</script>


<template>
    <h1>Props</h1>
    <p>{{ fName }}</p>
    <p>{{ lName }}</p>
</template>0