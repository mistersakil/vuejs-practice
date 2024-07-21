<script setup>

import { ref } from 'vue';
import Form1 from './Tabs/Form1.vue';
import Form2 from './Tabs/Form2.vue';
import Form3 from './Tabs/Form3.vue';

const activeForm = ref('form1')

const forms = {
    form1: Form1,
    form2: Form2,
    form3: Form3,
}
</script>

<template>
    <h1>KeepAlive component</h1>
    <button @click="activeForm = 'form1'">form1</button>
    <button @click="activeForm = 'form2'">form2</button>
    <button @click="activeForm = 'form3'">form3</button>
    <hr>
    <KeepAlive>
        <Component :is="forms[activeForm]" />
    </KeepAlive>


</template>