<script setup>
import { ref } from "vue"
let count = ref(0)
const increment = (event) => {
    count.value++
    console.log('method handler with default event object', event);
}

const decrement = (event) => {
    count.value--
    console.log('method handler with default event object', event);
}

const incrementBy = (step = 1, event) => {
    count.value += step
    console.log('increment by = ', step);
}

const decrementBy = (step = 1, event) => {
    count.value -= step;
    console.log('decrement by = ', step);

}

</script>
<template>
    <h1>Method Event Handling</h1>
    <hr>
    <h3>Count: {{ count }}</h3>

    <button @click="increment">++ using method handler</button>

    <h2>Event modifier</h2>
    <hr>
    <h4>Exact modifier</h4>
    <p>
        <a @click.prevent="increment" href="https://facebook.com" target="_blank">++ using prevent</a>
    </p>

    <button @click.ctrl="increment">++ using ctrl + left click</button>

    <h4>Exact modifier</h4>
    <button @click.ctrl.exact="increment">++ using ctrl + left click</button>

    <h4>Multiple event</h4>
    <button v-on="{ mousedown: increment, mouseup: decrement }">++/-- using multiple event</button>

    <h4>Multiple inline handler with single event</h4>
    <button @click="incrementBy(5, $event), decrementBy(2, $event)">++/-- using multiple handler</button>

</template>