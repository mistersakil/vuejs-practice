<template>
  <h2>vue form</h2>
  <form @submit.prevent="formSubmitHandler">
    <div>
      <label for="fullName">full name: </label>
      <input type="text" id="fullName" v-model.trim="$formData.fullName" />
    </div>

    <div>
      <label for="email">email: </label>
      <input type="email" id="email" v-model.trim="$formData.email" />
    </div>

    <div>
      <label for="password">password: </label>
      <input type="password" id="password" v-model="$formData.password" />
    </div>

    <div>
      <label for="dob">date of birth: </label>
      <input type="date" id="dob" v-model="$formData.dob" />
    </div>

    <div>
      <label for="age">age: </label>
      <input type="text" id="age" v-model.number="$formData.age" />
    </div>

    <div>
      <label for="address">address: </label>
      <textarea id="address" v-model="$formData.address"></textarea>
    </div>

    <div>
      <label for="bio">bio: </label>
      <textarea id="bio" v-model="$formData.bio"></textarea>
    </div>

    <div>
      <label for="male">gender: </label>
      <div>
        <input type="radio" id="male" value="male" v-model="$formData.gender" />
        <label for="male">male </label>

        <input
          type="radio"
          id="female"
          value="female"
          v-model="$formData.gender"
        />
        <label for="female">female </label>
      </div>
    </div>

    <div>
      <label for="hasDrivingLicense">has driving license: </label>
      <input
        v-model="$formData.hasDrivingLicense"
        type="checkbox"
        true-value="yes"
        false-value="no"
      />
    </div>

    <div>
      <label>hobbies: </label>
      <article>
        <input
          v-model="$formData.hobbies"
          type="checkbox"
          id="reading"
          value="reading"
        />
        <label for="reading">reading </label>
        <input
          v-model="$formData.hobbies"
          type="checkbox"
          id="traveling"
          value="traveling"
        />
        <label for="traveling">traveling </label>
        <input
          v-model="$formData.hobbies"
          type="checkbox"
          id="fishing"
          value="fishing"
        />
        <label for="fishing">fishing </label>
        <input
          v-model="$formData.hobbies"
          type="checkbox"
          id="playing_cards"
          value="playing cards"
        />
        <label for="playing_cards">playing cards </label>
      </article>
    </div>
    <div>
      <label for="employee_type">employee type: </label>
      <select id="employee_type" v-model="$formData.employee_type">
        <option value="" selected disabled>select employee type</option>
        <option value="full time">full time</option>
        <option value="part time">part time</option>
        <option value="intern">intern</option>
      </select>
    </div>

    <div>
      <label for="skills">skills: </label>
      <select id="skills" v-model="$formData.skills" multiple>
        <option value="" selected disabled>select your skills</option>
        <option
          v-for="(skill, index) in $skillOptions"
          :key="index"
          :value="skill.value"
        >
          {{ skill.label }}
        </option>
      </select>
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";

const $formData = reactive({
  fullName: "",
  email: "",
  password: "",
  dob: "",
  age: "",
  address: "",
  bio: "",
  gender: "",
  hasDrivingLicense: "no",
  hobbies: [],
  employee_type: "",
  skills: [],
});

const $skillOptions = ref([
  { label: "php", value: "php" },
  { label: "laravel", value: "laravel" },
  { label: "javascript", value: "javascript" },
  { label: "react js", value: "react js" },
  { label: "vue js", value: "vue js" },
  { label: "python", value: "python" },
  { label: "djando", value: "djando" },
  { label: "dart", value: "dart" },
  { label: "flutter", value: "flutter" },
]);

const formSubmitHandler = ($e) => {
  console.log($formData);
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: pink;
  text-transform: capitalize;
}
form > div {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
