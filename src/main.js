import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

import "bulma/bulma.sass";
import "swiper/swiper-bundle.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
