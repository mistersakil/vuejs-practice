<script setup>
import { ref } from 'vue'

import Latest from "./Tabs/Latest.vue"
import Popular from "./Tabs/Popular.vue"
import Featured from "./Tabs/Featured.vue"

const activeTab = ref('latest')

const tabComponents = {
    latest: Latest,
    popular: Popular,
    featured: Featured,
}

</script>

<template>
    <h1>Tabs with dynamic component</h1>
    <hr>
    <button v-for="(componentD, tab) in tabComponents" :key="tab" @click="activeTab = tab">
        {{ tab }}
    </button>
    <Component :is="tabComponents[activeTab]" />

</template>