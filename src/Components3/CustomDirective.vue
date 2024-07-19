<script setup>

const vFont = {
    mounted: (el, binding) => {
        console.log('el => ', el);
        console.log('binding => ', binding);
        el.style.color = 'red'
        el.style.fontSize = '50px'
    }
}

</script>

<template>
    <h1>Custom Directive</h1>
    <hr>
    <h3>without custom directive</h3>
    <h3 v-font>with custom directive</h3>


</template>