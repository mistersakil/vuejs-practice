<script setup>
import { ref } from 'vue';
import Props from './Components3/Props.vue';

const firstName = ref('sakil')
const lastName = ref('mahmud')
</script>

<template>
  <Props :fName="firstName" :lName="lastName" />
</template>
