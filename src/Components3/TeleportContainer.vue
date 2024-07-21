<script setup>
import TeleportComponent from './TeleportComponent.vue';
</script>
<template>

    <h3>Teleport container</h3>
    <hr>
    <Teleport to="body">
        <TeleportComponent />
    </Teleport>


</template>