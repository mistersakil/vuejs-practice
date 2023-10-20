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

const deep = reactive({
  count: { num: 1 },
  users: ["sakil", "rasel", "monir"],
});

setTimeout(function () {
  console.log("set timeout started for deep reactivity");
  console.log(deep);
  console.log(deep.count);
  console.log(deep.users);
  deep.count.num = deep.count.num + 5;
  deep.users.push("jalil");
  console.log(deep);
  console.log(deep.count);
  console.log(deep.users);
}, 3000);
</script>

<template>
  <u><h2>reactivity</h2></u>

  <h3>sum: {{ obj.a + obj.b }}</h3>

  <u><h2>deep reactivity</h2></u>

  <h3>count: {{ deep.count.num }}</h3>

  <p>users: {{ deep.users }}</p>
</template>

<style></style>
