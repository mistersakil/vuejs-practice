<script setup>
import { reactive, ref, watch } from "vue";
const state = reactive({
    search: ''
})
const details = ref('')

watch(() => state.search, (newVal, oldVal) => {
    if (newVal.length) {
        details.value = `Your input: ${newVal}`
    } else {
        details.value = '';
    }
})

</script>

<template>
    <h1>Reactive Watch</h1>
    <hr>
    <h2 v-if="details">{{ details }}</h2>
    <input v-model="state.search" placeholder="write some text here..." type="text">



</template>