<script setup>

</script>

<template>
    <h3>component event child</h3>
    <hr>
    <button @click="$emit('increaseEventFromChild')">increase ++</button>
</template>