<script setup>

</script>

<template>
    <h1>Learning Slot</h1>
    <hr>
    <slot>
        <h3>default slot data will be shown when no data provided by parent component</h3>
    </slot>

    <slot name="one"></slot>

    <slot name="two"></slot>



</template>