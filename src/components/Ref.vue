<template>
  <u><h2>reference (ref) reactivity</h2></u>
  <h3>obj1 = {{ obj1 }}</h3>
  <h3>obj2 = {{ obj2 }}</h3>
  <h3>obj3 = {{ obj3 }}</h3>
  <h3>obj4 = {{ obj4 }}</h3>
  <h3>obj5 = {{ obj5 }}</h3>
</template>

<script setup>
import { ref } from "vue";

const obj1 = ref(1);
const obj2 = ref({ count: 1, users: ["sakil", "rasel"] });
const obj3 = ref([1, ["sakil", "rasel"]]);
const obj4 = { number: ref(2) };
const obj5 = ref({ number: ref({ num1: 5, num2: 10 }), count: ref(7) });
setTimeout(() => {
  console.log("obj1 ref timeout started");
  console.log(obj1);
  console.log(obj1.value);

  console.log("obj2 ref timeout started");
  console.log(obj2);
  console.log(obj2.value);

  console.log("obj3 ref timeout started");
  console.log(obj3);
  console.log(obj3.value);

  console.log("obj4 ref timeout started");
  console.log(obj4);
  console.log(obj4.number.value);

  console.log("obj5 ref timeout started");
  console.log(obj5);
  console.log(obj5.value.number.num1);
  console.log(obj5.value.count);
}, 2000);
</script>

<style></style>
