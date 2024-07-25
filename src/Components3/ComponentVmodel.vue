<script setup>
import ComponentVModelChild from "./ComponentVModelChild.vue"
import { reactive } from "vue"

const state = reactive({
    name: '',
    email: '',
    password: '',
})

</script>

<template>
    <blockquote>v-model using defineModel() macro, need vue 3.4 minimum</blockquote>
    <hr>
    <pre>{{ state }}</pre>
    <blockquote>applying v-model on input</blockquote>

    <ComponentVModelChild v-model="state.name" inputId="name" inputLabel="full name" /> <br>
    <ComponentVModelChild v-model="state.email" inputId="email" inputLabel="email address" /> <br>
    <ComponentVModelChild v-model="state.password" inputId="password" inputLabel="password" />
</template>


<style>
blockquote {
    background-color: gray;
    padding: 10px;
}
</style>
