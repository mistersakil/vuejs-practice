<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
let number = ref(2);
let squNum = computed(function () {
    return number.value * number.value;
});

function decrement() {
    number.value--;
}
</script>

<template>
    <h1>Original number : {{ number }}</h1>
    <h1>squared number : {{ squNum }}</h1>

    <button @click="number++">++</button>
    <button @click="decrement">--</button>
</template>