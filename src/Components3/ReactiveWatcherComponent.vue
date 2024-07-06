<script setup>
import { reactive, ref, watch } from "vue";
const state = reactive({
    search: ''
})

const counter = reactive({
    count: 0
})

const details = ref('')
const countDetails = ref(0)

watch(() => {
    return { search: state.search, count: counter.count, something: 'what' }
}, (newVal, oldVal) => {
    console.log(newVal, oldVal)
    if (newVal.search.length) {
        details.value = `Search text: ${newVal.search}`
    } else {
        details.value = '';
    }
    if (newVal.count) {
        countDetails.value = `Counter value: ${newVal.count}`
    } else {
        countDetails.value = '';
    }
})

const resetValues = () => {
    state.search = '';
    counter.count = 0;
    details.value = '';
    countDetails.value = '';
}

</script>

<template>
    <h1>Reactive Watch</h1>
    <hr>
    <h2 v-if="details">{{ details }}</h2>
    <input v-model="state.search" placeholder="write some text here..." type="text">

    <hr>
    <h2 v-if="countDetails">{{ countDetails }}</h2>

    <button @click="counter.count++">++ increment</button>
    <button @click="counter.count--">-- decrement</button>

    <button @click="resetValues">reset</button>



</template>