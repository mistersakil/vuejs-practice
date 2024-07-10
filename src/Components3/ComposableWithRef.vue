<script setup>
import Name2 from "../composable/name2"
const { name, error, changeName, fullName } = Name2();
</script>

<template>
    <h1>Composable with ref</h1>
    <button @click="changeName">change name</button>
    <hr>
    <h4 v-if="error">{{ error }}</h4>
    <h4 v-else-if="name">Full name: {{ name }}</h4>
    <h4 v-else>{{ error }}</h4>

</template>