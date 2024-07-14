<script setup>
import { ref } from "vue"

const imgPath = ref("./src/assets/images/sakil2.jpg")

</script>

<template>
    <h1>How to use image in vue</h1>
    <hr>
    <h3>relative path binding</h3>
    <img src="../assets/images/sakil1.jpg" alt="sakil1" width="200">
    <br>
    <h3>absolute path binding</h3>
    <img v-bind:src="imgPath" alt="sakil2" width="200">



</template>