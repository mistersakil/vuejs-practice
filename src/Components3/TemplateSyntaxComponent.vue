<script setup>

const txt = `some text`;

const vHtml = `<span style="color:red">this is a red text</span>`

const isDisabled = 1;

const dynamicAttributes = {
    id: 'testId',
    class: 'testClass',
    style: 'background-color:red; width: 100%; height:20px',

}

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

    <hr>
    <del>Dynamically Binding Multiple Attributes </del> <br>

    <div v-bind="dynamicAttributes">dynamically binding multiple attributes</div>

</template>
