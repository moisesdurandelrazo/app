import { createApp } from "vue";
import App from "./App.vue";
import HomeApp from "./components/HomeApp";
import ListNames from "./components/ListNames";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(vuetify);

app.component("homeApp", HomeApp);
app.component("listNames", ListNames);

app.mount("#app");
