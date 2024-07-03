<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
// let number = ref(2);
// let squNum = computed(function () {
//     return number.value * number.value;
// });

// function decrement() {
//     number.value--;
// }


// let firstName = ref('sakil')
// let lastName = ref('mahmud')

// let fullName = computed(function(){
//    return `${firstName.value} ${lastName.value}`;
// })

let isLoggedIn = ref(true)
let username = 'sakil'
let login = () => isLoggedIn.value = true 
</script>

<template>
    <div v-if="isLoggedIn">
        Hello {{ username }}
        <p>you can update your personal details here</p>
        <button @click="isLoggedIn=false">Logout</button>
    </div>
    <div v-else>
        Sorry, you are not logged in yet, please <button @click="login">login</button>
    </div>

    <!-- <h1>fullName = {{ fullName }}</h1>
    <button @click="firstName = 'rasel'">change first name</button>
    <button @click="lastName = 'jomadder'">change last name</button> -->
    <!-- <h1>Original number : {{ number }}</h1>
    <h1>squared number : {{ squNum }}</h1>

    <button @click="number++">++</button>
    <button @click="decrement">--</button>  -->
    
</template>