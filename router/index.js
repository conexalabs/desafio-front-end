const router = function() {
  const routerHistory = VueRouter.createWebHashHistory();
  const { Home, GoogleMaps } = app._context.components;

  return VueRouter.createRouter({
    history: routerHistory,
    routes: [
      { path: '/', component: Home },
      { path: '/location', component: GoogleMaps },
    ],
  })
}();