<script setup>

</script>

<template>

    <header>
        <slot name="headerSlot">
            <p>header area</p>
        </slot>
    </header>
    <slot name="default">
        <p>default slot data will be shown when no data provided by parent component</p>
    </slot>

    <footer>
        <slot name="footerSlot">
            <p>footer area</p>
        </slot>
    </footer>



</template>