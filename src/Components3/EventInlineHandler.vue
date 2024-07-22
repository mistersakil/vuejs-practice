<script setup>
import { ref } from "vue"
let counter = ref(0)

const increment = () => {
    counter.value++;
}

const inlineCounterHandler = (step, type, event) => {
    counter.value = type === 'add' ? counter.value + step : counter.value - step
    console.log(event);
}
</script>
<template>
    <h1>Inline Event Handling</h1>
    <hr>
    <h3 :style="{ color: 'red', fontSize: '30px' }">Count : {{ counter }}</h3>

    <h4>Inline handlers </h4>
    <button v-on:click="counter++">++ on click</button>

    <h4>Inline handlers with shorthand syntax </h4>
    <button @:click="counter--">-- on click</button>

    <h4>Inline handlers with other event </h4>
    <button @mouseenter="counter++">++ on mouse enter</button>
    &nbsp;
    <button @mouseleave="counter--">-- on mouse leave</button>
    <h4>Inline handlers with function call</h4>
    <button @click="increment()">++ with inline function call</button>
    <h4>Inline handlers with function call and argument</h4>
    <button @click="inlineCounterHandler(5, 'add')">++ with inline function argument</button>
    <button @click="inlineCounterHandler(2)">-- with inline function argument</button>
    <h4>Inline handlers with function call and event argument</h4>
    <button @click="inlineCounterHandler(5, 'add', $event)">++ with inline function argument</button>
    <button @click="inlineCounterHandler(2, '', $event)">-- with inline function argument</button>

    <h4>Inline handlers with array function and event argument</h4>
    <button @click="event => inlineCounterHandler(5, 'add', event)">++ with inline function argument</button>
    <button @click="event => inlineCounterHandler(2, '', event)">-- with inline function argument</button>

</template>