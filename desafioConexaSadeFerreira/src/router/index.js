import Vue from 'vue'
import Router from 'vue-router'
import Principal from '@/components/Principal'
import Mapa from '@/components/Mapa'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: Principal
    },
    
    {
      path: '/mapa',
      name: 'Mapa',
      component: Mapa
    }
  ]
})
