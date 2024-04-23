<script setup>
const inputs = {
    firstName: 'firstName',
    lastName: 'lastName',
};
const website = 'https://www.google.com'

const submitBtn = {
    type: 'submit',
    value: 'proceed',
    id: 'submitId',
    name: 'submitName',
    extra: 'unknownAttr'
}

const exception = "exception";

</script>
<template>
    <input v-bind:id="inputs.firstName" :name="inputs.firstName" placeholder="enter your first name">
    <hr>
    <input :id="inputs.lastName" v-bind:name="inputs.lastName" placeholder="enter your last name">
    <hr>
    <a :href="website" target="_blank">
        <button type="button"> visit google</button>
    </a>

    <!-- attribute binding through object pattern -->

    <input v-bind="submitBtn">

    <!-- this will not work / wrong process  -->
    <input type="text" v-bind="exception">

</template>

<style scoped></style>