<script setup>

const txt = `some text`;

const vHtml = `<span style="color:red">this is a red text</span>`

const isDisabled = 1;

</script>


<template>

    <h1>Template syntax</h1>
    <hr>

    <del>text interpolation</del>

    <p>message: {{ txt }}</p>

    <del>using v-html directive</del>
    <h4 v-html="vHtml"></h4>

    <del>Boolean Attributes</del> <br>

    <input type="text" disabled="" placeholder="disabled by empty string" />
    <input type="text" disabled placeholder="disabled general attribute" />
    <input type="text" :disabled="isDisabled" placeholder="disabled by data attribute" />

</template>
