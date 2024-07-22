<script setup>

import { ref } from 'vue';

let firstName = 'rasel'
let lastName = 'jomadder'

const methodWithoutRef = () => {
    return `${firstName} ${lastName}`
}

setTimeout(() => {
    firstName = 'monir'
    console.log(firstName);
}, 1000)


let fName = ref('sakil')
let lName = ref('jomadder')

const methodWithRef = () => {
    return `${fName.value} ${lName.value}`
}

setTimeout(() => {
    fName.value = 'kabir'
    console.log(fName.value);
}, 3000)



</script>

<template>
    <h1>Method and computed property</h1>
    <hr>
    <del>Method without ref</del>
    <h4>Full name: {{ methodWithoutRef() }} </h4>

    <!-- if a ref data property changed, then all data property will be changed  -->
    <del>Method with ref</del>
    <h4>Full name: {{ methodWithRef() }} </h4>
</template>