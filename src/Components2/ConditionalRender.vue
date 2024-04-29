<script setup>
import { ref } from 'vue'

let show = ref(true)
let show2 = ref(false)

const marks = ref(100);
</script>


<template>
    <h1>conditional rendering</h1>
    <!-- v-if v-if-else v-else on template tag  -->
    <template v-if="marks > 70">
        <h3>you did very well, you achieved a gold medal</h3>
    </template>
    <template v-else-if="marks > 50">
        <h3>you did better. you achieved silver medal</h3>
    </template>
    <template v-else>
        <h3>you did average. you achieved bronze medal</h3>
    </template>


    <button v-if="show">this is a visible btn</button>

    <!-- this will not show  -->
    <button v-if="show2">this btn will not show</button>

    <!-- show result grade based on marks using v-if v-else-if v-else  -->
    <h4>Your grade is: </h4>
    <h2 v-if="marks > 100">invalid marks</h2>
    <h2 v-else-if="marks >= 80 && marks <= 100">A+</h2>
    <h2 v-else-if="marks >= 70 && marks < 80">A</h2>
    <h2 v-else-if="marks >= 60 && marks < 70">A-</h2>
    <h2 v-else-if="marks >= 50 && marks < 60">B</h2>
    <h2 v-else-if="marks >= 40 && marks < 50">C</h2>
    <h2 v-else>Take preparation again</h2>


</template>