<script setup>
import { inject } from "vue";

const firstName = inject('fName');
const lastName = inject('lName');
const myFriends = inject('friends');
const myMovies = inject('movies');

</script>

<template>
    <h2>First name: {{ firstName }}</h2>

    <h2>Last name: {{ lastName }}</h2>

    <h2>My Friends</h2>

    <ul v-for="(friend, index) in myFriends" :key="index">
        <li>{{ friend }}</li>
    </ul>
    <h2>My Movies</h2>
    <ul v-for="({ name, released, genre, language }, index) in myMovies" :key="index">
        <li>Movie name: {{ name }}</li>
        <li>Movie released: {{ released }}</li>
        <li>Movie genre: {{ genre }}</li>
        <li>Movie language: {{ language }}</li>
    </ul>

</template>