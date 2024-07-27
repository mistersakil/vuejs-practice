<script setup></script>

<template>
    <div class="greet" v-if="$slots.default">
        <slot greet="hello sakil" :age="35"></slot>
    </div>

    <div class="userInfo" v-if="$slots.userInfo">
        <slot name="userInfo" userName="sakil mahmud" email="sakil@gmail.com"></slot>
    </div>
</template>