<template>
  <h2>event modifiers</h2>
  <input type="text" @keypress="keyPress" placeholder="any key pressed" />
  <input
    type="text"
    @click.ctrl="ctrlClickedLeft"
    placeholder="ctrl + mouse left"
  />
  <input
    type="text"
    @click.alt="altClickedLeft"
    placeholder="alt + mouse left"
  />
  <input
    type="text"
    @keypress="altPressed"
    placeholder="alt + keyboard key press"
  />
  <input
    type="text"
    @keypress="ctrlPressed"
    placeholder="ctrl + keyboard key press"
  />

  <input
    type="button"
    @click.ctrl.exact="ctrlPressedExact"
    value="ctrl + mouse left key press exact"
  />
</template>

<script setup>
const ctrlPressedExact = (event) => {
  console.log("ctrl + mouse left key pressed exact");
};
const altPressed = (event) => {
  console.log("alt + any key pressed");
};
const ctrlPressed = (event) => {
  console.log("ctrl + any key pressed");
};
const altClickedLeft = (event) => {
  console.log("alt + MOUSE left key pressed");
};
const ctrlClickedLeft = (event) => {
  console.log("ctrl + MOUSE left key pressed");
};
const keyPress = (event) => {
  console.log(event);
  console.log("any key pressed");
};
</script>

<style scoped>
input {
  display: block;
  margin: 1rem 0;
}
</style>
