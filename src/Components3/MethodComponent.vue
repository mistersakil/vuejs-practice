<script setup>

import { ref } from 'vue';

// let firstName = 'rasel'
// let lastName = 'mahmud'

// const methodWithoutRef = () => {
//     return `${firstName} ${lastName}`
// }

// setTimeout(() => {
//     lastName = 'jomadder'
//     console.log(lastName);
// }, 3000)


let fName = ref('sakil')
let lName = ref('mahmud')

const methodWithRef = () => {
    return `${fName.value} ${lName.value}`
}

setTimeout(() => {
    lName.value = 'jomadder'
    console.log(lName.value);
}, 3000)



</script>

<template>
    <h1>Method and computed property</h1>
    <hr>
    <!-- <del>Method without ref</del>
    <h4>Full name: {{ methodWithoutRef() }} </h4> -->

    <!-- if a ref data property changed, then all data property will be changed  -->
    <del>Method with ref</del>
    <h4>Full name: {{ methodWithRef() }} </h4>
</template>