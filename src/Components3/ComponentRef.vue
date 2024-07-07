<script setup>
import { ref, onMounted, watch, watchEffect } from 'vue'
const nameRef = ref('aaa')
const nameDetails = ref('');
// watch(nameRef, (newVal, oldVal) => {
//     console.log(nameRef.value);
//     nameDetails.value = `Result: ${newVal}`
// });

// onMounted(() => {
//     console.log(nameRef.value.value);
//     nameRef.value.focus();
// })

const search = ref(null);

// console.log(search.value);

watch(search, (newVal, oldVal) => {
    console.log(newVal, oldVal);
    console.log('running watchEffect');
    console.log(search.value);

    if (search.value) {
        console.log(search.value);
    } else {
        console.log('component did not mount yet...');
    }
});
</script>

<template>
    <h1>component ref with watchEffect</h1>
    <hr>
    <input ref="search" type="search">

    <!-- <h1>Simple Component Ref</h1>
    <hr>
    <input ref="nameRef" type="text" placeholder="write something">

    <h3 v-if="nameDetails">{{ nameDetails }}</h3> -->
</template>