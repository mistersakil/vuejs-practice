<script setup>
import { ref, watch } from "vue";
const inputText = ref('')
const details = ref('')

watch(inputText, function (newVal, oldVal) {
    if (newVal.length) {
        details.value = `Your input: ${inputText.value}`
    } else {
        details.value = '';
    }
})

</script>

<template>
    <h1>Watch</h1>
    <hr>
    <h2 v-if="details">{{ details }}</h2>
    <input v-model="inputText" placeholder="write some text here..." type="text">



</template>