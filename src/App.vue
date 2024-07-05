<script setup>
import { provide } from 'vue';
import ProvideInject from './Components3/ProvideInject.vue';
provide('fName', 'sakil')
provide('lName', 'mahmud')
provide('friends', ['rasel', 'monir', 'jalil'])
provide('movies', [
  { name: '3 idiots', released: 2007, genre: 'educational', language: 'hindi' },
  { name: 'tare jamin par', released: 2000, genre: 'educational', language: 'hindi' },
  { name: 'gazni', released: 2011, genre: 'action', language: 'hindi' },
  { name: 'television', released: 2011, genre: 'educational', language: 'bangla' },
])
</script>

<template>
  <ProvideInject />
</template>
