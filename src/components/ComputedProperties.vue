<template>
  <h2>computed properties</h2>

  <p>fullName = {{ fullName }}</p>
  <p>fullName2 = {{ fullName2 }}</p>
</template>

<script setup>
import { ref, computed } from "vue";

let firstName = ref("sakil");
let lastName = ref("mahmud");

const fullName = computed(() => {
  console.log("computed called");
  return `${firstName.value} ${lastName.value}`;
});

setTimeout(() => {
  console.log("timeout called");
  firstName.value = "rasel";
  lastName.value = "jomadder";
}, 5000);

const fullName2 = computed({
  get() {
    console.log("getter called");
    return `${firstName.value} ${lastName.value}`;
  },

  set(newValue) {
    console.log("setter called");
    return ([firstName.value, lastName.value] = newValue.split(" "));
  },
});
</script>

<style></style>
