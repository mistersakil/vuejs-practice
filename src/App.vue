<script setup>

import SlotComponent from './Components3/SlotComponent.vue';

</script>

<template>
  <SlotComponent>
    <h2>passing slot data from parent component</h2>

    <template #one>
      <h3>passing data from parent component to slot "one"</h3>
    </template>

    <template v-slot:two>
      <h3>passing data from parent component to slot "two"</h3>
    </template>

  </SlotComponent>

</template>
