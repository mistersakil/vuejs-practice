<script setup>

const txt = `some text`;

const vHtml = `<span style="color:red">this is a red text</span>`

</script>


<template>

    <h1>Template syntax</h1>
    <hr>

    <del>text interpolation</del>

    <p>message: {{ txt }}</p>

    <del>using v-html directive</del>
    <h4 v-html="vHtml"></h4>

</template>