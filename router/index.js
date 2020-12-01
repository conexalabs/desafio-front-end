const { components } = app._context;

const Home = { template: `<div>home</div>` }
const GoogleMaps = components.GoogleMaps;
const routerHistory = VueRouter.createWebHashHistory();

const router = VueRouter.createRouter({
  history: routerHistory,
  routes: [
    { path: '/', component: Home },
    { path: '/location', component: GoogleMaps },
  ],
})