<template>
  <h2>reactive and ref utilities</h2>
</template>

<script setup>
import { reactive, isReactive, isProxy, isRef, ref, unref } from "vue";

let a = 1;
let b = ref(2);
let c = reactive([0, 1, 2, 3]);
let d = reactive({ name: "sakil", age: 34 });

console.log("a is = ", a);
console.log("b is = ", b);
console.log("c is = ", c);

console.log("a is ref = ", isRef(a));
console.log("b is ref = ", isRef(b));
console.log("c is ref = ", isRef(c));

console.log("a is reactive = ", isReactive(a));
console.log("b is reactive = ", isReactive(b));
console.log("c is reactive = ", isReactive(c));

console.log("a is proxy = ", isProxy(a));
console.log("b is proxy = ", isProxy(b));
console.log("c is proxy = ", isProxy(c));

console.log("b after unref = ", unref(b));

console.log("d is proxy = ", isProxy(d));
console.log("d is reactive = ", isReactive(d));
console.log("d is ref = ", isRef(d));

console.log("d.name is reactive = ", isReactive(d.name));
console.log("d.name is proxy = ", isProxy(d.name));
console.log("d.name is ref = ", isRef(d.name));
</script>

<style></style>
