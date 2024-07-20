<script setup>
import { ref } from 'vue'

const activeTab = ref('latest')

</script>

<template>
    <h1>Tabs without dynamic component</h1>
    {{ activeTab }}
    <hr>
    <button @click="activeTab = 'latest'">latest</button>
    <button @click="activeTab = 'popular'">popular</button>
    <button @click="activeTab = 'featured'">featured</button>

</template>