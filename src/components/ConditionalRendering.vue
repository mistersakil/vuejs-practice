<template>
  <h2>Conditional rendering</h2>
  <h3 v-if="number >= 40 && number <= 100" class="success">
    you opted {{ number }} and you grade is PASSED
  </h3>
  <h3 v-else-if="number >= 0 && number < 40" class="failed">
    you opted {{ number }} and you grade is FAILED
  </h3>
  <h3 v-else class="invalid">
    your given number is {{ number }} that is INVALID
  </h3>
  <!-- <h4 v-if="isActive">if value of isActive = {{ isActive }}</h4>
  <h4 v-else>else value of isActive = {{ isActive }}</h4> -->
</template>

<script setup>
import { ref } from "vue";

let number = ref(101);

setInterval(() => {
  console.log("set interval started");
  number.value = Math.floor(Math.random() * 110);
}, 3000);

// let isActive = ref(true);

// setTimeout(() => {
//   console.log("set time out");
//   console.log("value of is active = ", isActive);
//   isActive.value = false;
//   console.log("value of is active = ", isActive);
// }, 2000);
</script>

<style scoped>
.success {
  color: green;
}
.failed {
  color: red;
}
.invalid {
  color: orange;
}
</style>
