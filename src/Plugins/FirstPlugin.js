import PluginComponent from "../Components3/PluginComponent.vue";

export default {
  install: (app, options) => {
    app.component("PluginComponent", PluginComponent);

    app.directive("font-style", (el, params) => {
      console.log(el, params);
      const { value } = params;
      el.style.color = "red";
      el.style.fontSize = `${value}px`;
    });
  },
};
