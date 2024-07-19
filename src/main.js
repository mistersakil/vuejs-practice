import { createApp } from "vue";
import App from "./App.vue";
import FirstPlugin from "./Plugins/FirstPlugin";

const $app = createApp(App);

$app.use(FirstPlugin);

$app.mount("#app");
