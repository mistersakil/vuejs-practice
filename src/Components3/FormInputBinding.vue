<script setup>
import { ref, reactive } from "vue"

const formData = reactive({
    name: '',
    email: '',
    password: '',
    mobile: '',
    bio: '',
    gender: '',
    isBangladeshi: 'yes',
    hasDrivingLicense: 'no',
    bloodGroup: 0,
    skills: [],
    hobbies: [],
    salary: ''

});

const skills = ref([
    { id: 1, name: 'php' },
    { id: 2, name: 'javascript' },
    { id: 3, name: 'python' },
])
const hobbies = ref([
    { id: 2, name: 'traveling' },
    { id: 3, name: 'exercise' },
    { id: 1, name: 'playing cricket' },
])
const bloodGroups = ref([
    { id: 1, name: 'A+' },
    { id: 2, name: 'B+' },
    { id: 3, name: 'O+' },
    { id: 4, name: 'AB+' },
])

const handleFormSubmit = (event) => {
    console.log(formData);
    alert(JSON.stringify(formData))
}
</script>

<template>
    <h1>Form input</h1>
    <pre>{{ formData }}</pre>
    <hr>
    <form @submit.prevent="handleFormSubmit" class="row">
        <div class="col">
            <label for="name">name: </label>
            <input type="text" id="name" v-model.trim="formData.name">
        </div>
        <div class="col">
            <label for="email">email: </label>
            <input type="email" id="email" v-model.trim="formData.email">
        </div>
        <div class="col">
            <label for="password">password: </label>
            <input type="password" id="password" v-model="formData.password">
        </div>
        <div class="col">
            <label for="mobile.trim">mobile: </label>
            <input type="number" id="mobile" v-model="formData.mobile" :min="100000">
        </div>
        <div class="col">
            <label for="bio">bio: </label>
            <textarea id="bio" v-model.trim="formData.bio"></textarea>
        </div>
        <div class="col">
            <label>gender: </label>
            <div>
                <label for="male">male </label>
                <input type="radio" id="male" v-model="formData.gender" value="male" name="gender">
                <label for="female">female </label>
                <input type="radio" id="female" v-model="formData.gender" value="female" name="gender">
                <label for="others">others </label>
                <input type="radio" id="others" v-model="formData.gender" value="others" name="gender">
            </div>
        </div>
        <div class="col">
            <label for="isBangladeshi">Is Bangladeshi: </label>
            <input type="checkbox" id="isBangladeshi" v-model="formData.isBangladeshi" true-value="yes"
                false-value="no">
        </div>

        <div class="col">
            <label for="hasDrivingLicense">Has Driving License: </label>
            <input type="checkbox" id="hasDrivingLicense" v-model="formData.hasDrivingLicense" true-value="yes"
                false-value="no">
        </div>

        <div class="col">
            <label for="bloodGroup">Blood Group: </label>
            <select id="bloodGroup" v-model="formData.bloodGroup">
                <option selected disabled value="0">select any blood group</option>
                <option v-for="(bloodGroup, index) in bloodGroups" :value="bloodGroup.id" :key="bloodGroup.id">{{
                    bloodGroup.name }}</option>
            </select>
        </div>

        <div class="col">
            <label for="skills">skills: </label>
            <select id="skills" v-model="formData.skills" multiple>
                <option selected disabled value="">select any blood group</option>
                <option v-for="(skill, index) in skills" :value="skill.id" :key="skill.id">{{
                    skill.name }}</option>
            </select>
        </div>

        <div class="col">
            <label for="hobbies">hobbies: </label>
            <select id="hobbies" v-model="formData.hobbies" multiple>
                <option selected disabled value="">select any blood group</option>
                <option v-for="(hobby, index) in hobbies" :value="hobby.id" :key="hobby.id">{{
                    hobby.name }}</option>
            </select>
        </div>

        <div class="col">
            <label for="salary">salary: </label>
            <input type="number" id="salary" v-model.number="formData.salary">
        </div>

        <div class="col">
            <input type="submit" id="submit" value="submit">
        </div>

    </form>



</template>

<style scoped>
.row {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.col {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
}

.col>label {
    color: blue;
    background-color: pink;
    padding: 2px 5px;
    border-radius: 5px;
    text-transform: capitalize;
}
</style>