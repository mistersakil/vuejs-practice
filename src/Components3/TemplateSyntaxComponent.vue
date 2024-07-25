<script setup>
import { ref } from 'vue';


const txt = `some text`;

const vHtml = `<span style="color:red">this is a red text</span>`

const isDisabled = 1;

const dynamicAttributes = {
    id: 'testId',
    class: 'testClass',
    style: 'background-color:red; width: 100%; height:20px',

}

const seenDirective = ref(true)

setTimeout(() => {
    seenDirective.value = false
}, 5000);


const googleUrl = "https://www.google.com";
const facebookUrl = "https://www.facebook.com";

const dynamicHref = 'href'

const onClickArgument = 'click'
const onClickArgument2 = null
const onClickArgument3 = ''

const count = ref(0)

const imgPath = "https://vuejs.org/assets/directive.DtZKvoAo.png"

</script>


<template>

    <h1>Template syntax</h1>
    <hr>

    <blockquote>text interpolation</blockquote>

    <p>message: {{ txt }}</p>

    <blockquote>using v-html directive</blockquote>
    <h4 v-html="vHtml"></h4>

    <blockquote>Boolean Attributes</blockquote> <br>

    <input type="text" disabled="" placeholder="disabled by empty string" />
    <input type="text" disabled placeholder="disabled general attribute" />
    <input type="text" :disabled="isDisabled" placeholder="disabled by data attribute" />
    <blockquote>Dynamically Binding Multiple Attributes </blockquote>

    <div v-bind="dynamicAttributes">dynamically binding multiple attributes</div>

    <hr>
    <blockquote>Directives</blockquote>

    <p v-if="seenDirective" v-bind="dynamicAttributes">now you can see me. after 5 seconds it will hide</p>


    <blockquote>Arguments: must be placed after directive precede with `: | @` ex: v-bind:href | v-on:click | @click
    </blockquote>

    <a v-bind:href="googleUrl" target="_blank">Google.com</a> &nbsp;
    <a :href="facebookUrl" target="_blank">Facebook.com</a>

    <blockquote>Dynamic Arguments for href attribute</blockquote>

    <a v-bind:[dynamicHref]="googleUrl" target="_blank">Google</a> &nbsp;
    <a :[dynamicHref]="facebookUrl" target="_blank">Facebook</a>


    <blockquote>Dynamic Arguments for event</blockquote>

    <button v-on:[onClickArgument]="count++">++ increment -> {{ count }}</button> &nbsp;

    <button @[onClickArgument]="count--">-- decrement (shorthand) -> {{ count }}</button> &nbsp;

    <button v-on:[onClickArgument2]="count++">with null value</button> &nbsp;
    <button v-on:[onClickArgument3]="count++">with empty string</button>

    <blockquote>Modifiers: Modifiers are special postfixes denoted by a dot (0)</blockquote>

    <button v-on:click.ctrl.exact="count++">++ increment by exact ctrl+click {{ count }}</button> &nbsp;

    <a @[onClickArgument].prevent="count++" :href="googleUrl" target="_blank">link prevent default</a>

    <img v-bind:src="imgPath" alt="directive argument modifier" width="400" />


</template>

<style>
blockquote {
    background-color: gray;
    padding: 10px;
}
</style>