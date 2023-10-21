<template>
  <h2>method and computed property</h2>
  <p>full name = {{ fullName() }}</p>
</template>

<script setup>
import { reactive, ref } from "vue";
let firstName = ref("sakil");
let lastName = ref("mahmud");
const fullName = () => {
  return `${firstName.value} ${lastName.value}`;
};

setTimeout(() => {
  firstName.value = "rasel";
  lastName.value = "jomadder";
  console.log(firstName);
  console.log(lastName);
}, 2000);
</script>

<style></style>
