<template>
  <h2>props</h2>
  <h4>first name: {{ fName }}</h4>
  <h4>last name: {{ lName }}</h4>
  <h4>full name: {{ fullName }}</h4>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["fName", "lName"]);
const fullName = computed(() => `${props.fName} ${props.lName}`);
</script>

<style scoped></style>
