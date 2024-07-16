<script setup>
import { reactive } from "vue";
import { ref, nextTick } from "vue"

// const count = ref(0);

// const increment = async () => {
//     count.value++
//     await nextTick()
// }

// const count2 = ref(0)
// const count3 = count2;

// const state = reactive({
//     count2: count2
// })

// console.log(state.count2);
// state.count2 = 1
// console.log(state.count2);
// console.log(count2.value);

// count2.value = 2
// console.log(state.count2);
// console.log(count2.value);


const state2 = reactive([ref(0)]);

console.log(state2[0].value);


</script>

<template>
    <h1>Reactivity in vue</h1>
    <hr>

    <h3>Counter2: {{ state2.count3 }}</h3>
    <button @click="state2.count3++">increment</button>


    <!-- <h3>Counter: {{ count }}</h3>
            <button @click="increment">increment</button> -->

</template>