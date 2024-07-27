<script setup>
import SlotComponent from "./SlotComponent.vue"
</script>


<template>
    <h1>Slot Content and Outlet </h1>
    <hr>

    <blockquote>Slot outlet</blockquote>
    <SlotComponent>
        <h3 style="color:blue">Hello slot</h3>
        <p>this data passed by slot content parent container</p>
        <p>A `slot` outlet without name implicitly has the name "default".</p>
    </SlotComponent>

    <blockquote>Fallback content</blockquote>
    <SlotComponent>
    </SlotComponent>


    <blockquote>Named Slots </blockquote>

    <SlotComponent>
        <template v-slot:headerSlot>
            <nav style="color: #fff; background-color: black; padding: 10px;"> some header content passed by parent to
                child header outlet/slot</nav>
        </template>

        <template v-slot:footerSlot>
            <div style="color: #fff; background-color: black; padding: 10px;">
                some footer content passed by parent to child header outlet/slot
            </div>
        </template>
    </SlotComponent>



</template>

<style scoped>
blockquote {
    background-color: palevioletred;
    padding: 10px;
}
</style>