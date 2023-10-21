<template>
  <h2>list rendering</h2>

  <h4>list of users by array</h4>
  <ul>
    <li v-for="(user, index) in users" :key="index">
      {{ user }}
    </li>
  </ul>

  <h3>list of employees by array of object</h3>
  <ul>
    <li v-for="({ name, email }, i) in emp" :key="i">
      name: {{ name }} & email {{ email }}
    </li>
  </ul>

  <h4>list of languages on array of array</h4>
  <ul>
    <li
      v-for="([language, framework], parentIndex) in languages"
      :key="parentIndex"
    >
      {{ language }} => {{ framework }}
    </li>
  </ul>

  <ol>
    <li v-for="(languageList, parentIndex) in languages" :key="parentIndex">
      <h5>language with framework</h5>
      <ul>
        <li
          v-for="(item, childIndex) in languageList"
          :key="'child' + childIndex"
        >
          {{ item }}
        </li>
      </ul>
    </li>
  </ol>
</template>

<script setup>
import { reactive, ref } from "vue";
let languages = reactive([
  ["php", "laravel"],
  ["c#", ".net"],
  ["java", "spring"],
  ["python", "django"],
  ["javascript", "vue js"],
  ["node.js", "express js"],
  ["dart", "flutter"],
]);
let emp = reactive([
  { name: "sakil", email: "sakil@gmail.com" },
  { name: "rasel", email: "rasel@gmail.com" },
  { name: "monir", email: "monir@gmail.com" },
]);
let users = ref(["rasel", "sakil", "monir"]);
</script>

<style></style>
