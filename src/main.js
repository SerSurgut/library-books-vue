import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./plugins/bootstrap";
import router from "./router/router";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
