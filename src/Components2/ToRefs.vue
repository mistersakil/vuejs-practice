<script setup>
import { reactive, isReactive, ref, isRef, toRef, toRefs } from 'vue';
let obj = reactive({
    name: 'sakil',
    age: 35
});

let nameRef = toRef(obj, 'name');

// console.log(obj);
// console.log(nameRef);
// console.log(nameRef.value);

let objToRefs = toRefs(obj);

// console.log('objToRefs =>', objToRefs);
// console.log('objToRefs is reactive =>', isReactive(objToRefs));
// console.log('objToRefs is ref =>', isRef(objToRefs));
// console.log('objToRefs.name is ref =>', isRef(objToRefs.name));
// console.log('objToRefs.name.value is =>', objToRefs.name.value);
// console.log('objToRefs.age.value is =>', objToRefs.age.value);

let refObj = {
    name: ref('sakil'),
    age: ref(35)
}

console.log('refObj => ', refObj);
console.log('refObj is ref => ', isRef(refObj));
console.log('refObj.name is ref => ', isRef(refObj.name));
console.log('refObj.name.value  => ', (refObj.name.value));
</script>

<template></template>