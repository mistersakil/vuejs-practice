<script setup>
// import { ref, onMounted, onUnmounted, watch } from 'vue';
// import { faker } from '@faker-js/faker';

// const fullName = ref('');

// const generateFullName = () => {
//     fullName.value = faker.person.fullName();
// }

// onMounted(() => {
//     window.addEventListener('mousemove', generateFullName);

// })
// onUnmounted(() => {
//     window.removeEventListener('mousemove', generateFullName);
// })

// watch(fullName, (newVal, oldVal) => {
//     console.log(newVal);

// })

import name from "../composable/name.js"

const { getFullName } = name();



</script>

<template>
    <h1>Composable</h1>
    <hr>
    <h3>Full name: {{ getFullName() }}</h3>

</template>