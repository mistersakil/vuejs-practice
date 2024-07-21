<script setup>
import { onErrorCaptured } from "vue"
import SuspenseComponent from './SuspenseComponent.vue';

const onPending = () => {
    console.log('pending state');
}

const onFallback = () => {
    console.log('fallback state');
}

const onResolve = () => {
    console.log('resolve state');
}

onErrorCaptured((error, instance, info) => {
    console.log("error = ", error);
    console.log("instance = ", instance);
    console.log("info = ", info);

})

</script>
<template>

    <h2 style="color:red">Suspense container</h2>
    <hr>

    <Suspense @pending="onPending" @resolve="onResolve" @fallback="onFallback">
        <template #default>
            <SuspenseComponent />
        </template>
        <template #fallback>
            <h5 style="color:orange">loading ...</h5>
        </template>
    </Suspense>


</template>