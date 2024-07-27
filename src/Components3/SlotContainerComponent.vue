<script setup>
import SlotComponent from "./SlotComponent.vue"
import SlotCardComponent from "./SlotCardComponent.vue"

import SlotScopedComponent from "./SlotScopedComponent.vue"
</script>


<template>
    <h1>Slot Content and Outlet </h1>
    <hr>

    <blockquote>Scoped Slot</blockquote>
    <SlotScopedComponent v-slot:default="{ greet, age }">
        <button>{{ greet }}</button> &nbsp;
        <button>{{ age }}</button>
    </SlotScopedComponent>

    <blockquote>Scoped Slot Shorthand using template</blockquote>
    <SlotScopedComponent>
        <template #default="{ greet, age }">
            <button>{{ greet }}</button> &nbsp;
            <button>{{ age }}</button>
        </template>
    </SlotScopedComponent>

    <blockquote>Scoped Named Slot Shorthand using template</blockquote>
    <SlotScopedComponent>
        <template #userInfo="{ userName, email }">
            <button>{{ userName }}</button> &nbsp;
            <button>{{ email }}</button>
        </template>
    </SlotScopedComponent>

    <blockquote>Conditional Slot</blockquote>

    <SlotCardComponent>
        <template v-slot:cardHeader>
            card header
        </template>
        <template v-slot:default>
            card content text
        </template>
        <template v-slot:cardFooter>
            card footer text
        </template>
    </SlotCardComponent>

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