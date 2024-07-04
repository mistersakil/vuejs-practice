<script setup>
import {ref, reactive} from 'vue';
// let users = ref([
//     {name: 'sakil',age: 30},
//     {name: 'sakil 1',age: 31},
//     {name: 'sakil 2',age: 32},
// ]);

let engineers = ref([
    {name: 'sakil',dis:'pirojpur', age: 30, skills: ['php','laravel','js']},
    {name: 'rasel',dis:'khulna', age: 31, skills: ['linux','windows','asteris']},
    {name: 'naim',dis:'rajshahi', age: 32, skills: ['vue','react','node']}
]);
</script>

<template>
<h2>v-for</h2>

<ul v-for="({name, dis, age, skills}, index) in engineers" :key="index">
    <li>name: {{ name }}</li>
    <li>dis: {{ dis }}</li>
    <li>age: {{ age }}</li>
    <li>
        skills:
        <ul>
            <li v-for="(skill, skillIndex) in skills" :key="skillIndex">
                {{ skill }}
            </li>
        </ul>
    </li>    

</ul>

<!-- <ul v-for="({name,age},key) in users" :key="key">
    <li>Name:{{ name }}</li>
    <li>Age:{{ age }}</li>
</ul> -->
</template>