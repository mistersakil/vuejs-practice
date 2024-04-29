<script setup>
import { ref } from 'vue'

let show = ref(true)
let show2 = ref(false)

</script>


<template>
    <h1>conditional rendering</h1>
    <button v-if="show">this is a visible btn</button>

    <!-- this will not show  -->
    <button v-if="show2">this btn will not show</button>
</template>