import Home from '../screens/Home.vue';
import Maps from '../screens/Maps.vue';

const routes = [{ path: '/', component: Home }, { path: '/maps/:cnpj', component: Maps }];

export default routes;
