<script setup>
import { ref } from "vue"
const withBind = ref('https://facebook.com')

</script>

<template>
    <h1>How to use link in vue</h1>
    <hr>
    <h3>without bind</h3>
    <a href="https://google.com" target="_blank">google</a>
    <br>
    <h3>with bind</h3>
    <a href="https://facebook.com" :href="withBind" target="_blank">facebook</a>


</template>