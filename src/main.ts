import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import 'vuetify/styles';
import PrimeVue from 'primevue/config';
import Aura from "@primevue/themes/Aura"

import App from "./App.vue";
import router from "./router";
import "./index.css"
import { useEmployeeStore } from "./stores/employeeStore";

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(PrimeVue, { theme: { preset: Aura } });
app.use(router);

app.mount("#app");
