<template>
  <h2>Conditional rendering</h2>

  <h4 v-if="isActive">if value of isActive = {{ isActive }}</h4>
  <h4 v-else>else value of isActive = {{ isActive }}</h4>
</template>

<script setup>
import { ref } from "vue";

let isActive = ref(true);

setTimeout(() => {
  console.log("set time out");
  console.log("value of is active = ", isActive);
  isActive.value = false;
  console.log("value of is active = ", isActive);
}, 2000);
</script>

<style></style>
