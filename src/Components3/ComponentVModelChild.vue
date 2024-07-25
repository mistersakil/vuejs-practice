<script setup>
import { watch } from 'vue'
const modelable = defineModel()
const { inputLabel, inputId } = defineProps(['inputLabel', 'inputId'])

// console.log(modelable.value);

// console.log(inputLabel, inputId);

watch(modelable, (newVal, oldVal) => {
    // console.log(modelable.value);
    // console.log(newVal);
    // console.log(oldVal);
})

</script>

<template>

    <div>
        <label v-bind:for="inputId">{{ inputLabel }}: </label>
        <input v-bind:id="inputId" v-model="modelable">
    </div>
</template>


<style>
blockquote {
    background-color: gray;
    padding: 10px;
}
</style>
