<script setup>
import { ref } from 'vue';
let $name = ref("sakil");

</script>

<template>
    <h2>vue method</h2>

    <p>get person details => {{ getUserDetails() }}</p>
</template>
