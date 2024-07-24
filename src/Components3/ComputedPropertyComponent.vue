<script setup>

import { ref, computed } from 'vue';

let firstName = 'rasel'
let lastName = 'jomadder'

const computedWithoutRef = computed(() => {
    return `${firstName} ${lastName}`
})

setTimeout(() => {
    firstName = 'monir'
    console.log(firstName);
}, 2000)


let fName = ref('sakil')
let lName = ref('jomadder')

const computedWithRef = computed(() => {
    return `${fName.value} ${lName.value}`
})

setTimeout(() => {
    fName.value = 'jalil'
    console.log(fName.value);
}, 4000)



</script>

<template>
    <h1>Computed property</h1>
    <hr>
    <del>Method without ref</del>
    <h4>Full name: {{ computedWithoutRef }} </h4>

    <!-- if a ref data property changed of a computed property, then changed data will be displayed for computed property, other data property will not be affected   -->
    <del>Method with ref</del>
    <h4>Full name: {{ computedWithRef }} </h4>

    <del>writeable computed property</del>

</template>