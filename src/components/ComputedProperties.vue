<template>
  <h2>computed properties</h2>

  <p>fullName = {{ fullName }}</p>
  <p>fullName = {{ fullName }}</p>
  <p>fullName = {{ fullName }}</p>
  <p>fullName = {{ fullName }}</p>
</template>

<script setup>
import { ref, computed } from "vue";

let firstName = ref("sakil");
let lastName = ref("mahmud");

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

setTimeout(() => {
  firstName.value = "rasel";
  lastName.value = "jomadder";
}, 2000);
</script>

<style></style>
