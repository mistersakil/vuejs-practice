<script setup>
import { reactive, ref, watch } from "vue";
const state = reactive({
    search: ''
})
const details = ref('')

watch(() => state.search, (newVal, oldVal) => {

    console.log(newVal, oldVal);
})

</script>

<template>
    <h1>Reactive Watch</h1>
    <hr>
    <h2 v-if="details">{{ details }}</h2>
    <input v-model="state.search" placeholder="write some text here..." type="text">



</template>