<script setup>
import { reactive } from "vue";
const obj = reactive({
  a: 10,
  b: 20,
});
setTimeout(() => {
  console.log("timeout started");
  obj.a = 40;
  console.log(obj);
  console.log(obj.a + obj.b);
}, 2000);
</script>

<template>
  <h2>Reactivity</h2>
  <h3>sum: {{ obj.a + obj.b }}</h3>
</template>

<style></style>
