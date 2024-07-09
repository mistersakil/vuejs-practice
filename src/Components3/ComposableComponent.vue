<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { faker } from '@faker-js/faker';

const randomName = ref('');

const generateFullName = () => {
    randomName.value = faker.person.fullName();
}

onMounted(() => {
    window.addEventListener('mousemove', generateFullName);

})
onUnmounted(() => {
    window.removeEventListener('mousemove', generateFullName);
})

watch(randomName, (newVal, oldVal) => {
    console.log(newVal);

})

</script>

<template>
    <h1>Composable</h1>
    <hr>
    <h3>Full name: {{ randomName }}</h3>



</template>