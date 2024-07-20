<script setup>
import { ref } from 'vue'

import Latest from "./Tabs/Latest.vue"
import Popular from "./Tabs/Popular.vue"
import Featured from "./Tabs/Featured.vue"

const activeTab = ref('latest')

</script>

<template>
    <h1>Tabs without dynamic component</h1>
    {{ activeTab }}
    <hr>
    <button @click="activeTab = 'latest'">latest</button>
    <button @click="activeTab = 'popular'">popular</button>
    <button @click="activeTab = 'featured'">featured</button>

    <Latest v-if="activeTab === 'latest'" />
    <Popular v-if="activeTab === 'popular'" />
    <Featured v-if="activeTab === 'featured'" />

</template>