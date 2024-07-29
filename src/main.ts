import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "../src/plugins/vuetify.js";
import 'vuetify/styles';

import App from "./App.vue";
import router from "./router";
import "./index.css"
import { useEmployeeStore } from "./stores/employeeStore";

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(router);

app.mount("#app");
