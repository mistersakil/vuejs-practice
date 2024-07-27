<script setup></script>

<template>
    <section class="card">
        <header class="cardHeader">
            <slot name="cardHeader"></slot>
        </header>
        <main class="cardContent">
            <slot />
        </main>
        <footer v-if="$slots.cardFooter" class="cardFooter">
            <slot name="cardFooter"></slot>
        </footer>
    </section>
</template>

<style scoped>
.card {
    width: 100%;
    background-color: gray;

}

.cardHeader {
    /* height: 50px; */
    background-color: orange;
}

.cardContent {
    /* height: calc(200px - 100px); */
    background-color: pink;
}

.cardFooter {
    /* height: 50px; */
    background-color: coral;
}
</style>