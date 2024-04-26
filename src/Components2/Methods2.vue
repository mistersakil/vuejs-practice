<script setup>
import { ref, isRef } from 'vue'
let person = {
    name: ref('sakil'),
    age: ref(25)
}

function getUserDetails() {
    const { name, age } = person;
    return `name is ${name.value} and age is ${age.value} `
}

setTimeout(() => {
    console.log('timeout called');
    person.name.value = 'rasel'
    person.age.value = '30'
    console.log(person);
}, 2000);
</script>

<template>
    <h2>vue method</h2>

    <p>get person details => {{ getUserDetails() }}</p>
</template>
