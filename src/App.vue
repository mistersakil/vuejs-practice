<script setup>
import { ref } from 'vue';
import ComponentEvent from './Components3/ComponentEvent.vue';

let count = ref(0)

const handleIncrement = (step) => {
  count.value += step;
}
</script>

<template>
  <h1>{{ count }}</h1>
  <ComponentEvent @increment="handleIncrement" :step="5" />
  <hr />

  <ComponentEvent @increment="handleIncrement" :step="10" />
</template>
