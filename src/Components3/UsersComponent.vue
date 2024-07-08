<script setup>
const users = ['sakil', 'rasel', 'monir'];
</script>

<template>
    <h1>User list</h1>
    <hr>

    <ul v-for="(user, index) in users" :key="index">
        <li>{{ user }}</li>
    </ul>
</template>