<script setup>
import { ref, defineAsyncComponent } from "vue";

const toggleUser = ref(false);

const UsersComponents = defineAsyncComponent(() => {
    return import("./UsersComponent.vue")
});
</script>

<template>
    <h1>Async Component</h1>
    <button @click="toggleUser = !toggleUser">toggle users</button>
    <hr>
    <UsersComponents v-if="toggleUser" />
</template>