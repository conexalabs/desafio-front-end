import Vue from 'vue';
import VueRouter from 'vue-router';
import Toasted from 'vue-toasted';
import Geocoder from '@pderas/vue2-geocoder';
import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App.vue';
import FontAwesomeIcon from './libs/FontAwesome';

import 'bootstrap/dist/css/bootstrap.css';

import routes from './routes';

// add icons global
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(Toasted, { theme: 'outline', duration: 5000 });

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLEMAPS,
    libraries: 'places',
  },
});

Vue.use(Geocoder, {
  defaultMode: 'address',
  googleMapsApiKey: process.env.VUE_APP_GOOGLEMAPS,
});

new Vue({
  router: new VueRouter({
    mode: 'history',
    history: true,
    hashbang: false,
    routes,
  }),
  render: h => h(App),
}).$mount('#app');
