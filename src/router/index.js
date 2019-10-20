import Vue from 'vue'
import Router from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import * as jQuery from 'jquery'
global.jQuery = jQuery;
global.$ = jQuery;

import Home from '@/views/Home'
import Maps from '@/views/Maps'
import Search from '@/views/Search'
import Whapper from '@/views/Whapper'

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: to => {
        return "home"
      },
      component: Whapper,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'search/:keyword',
          name: 'Search',
          component: Search,
          props: true
        }
      ]
    }, {
      path: '/maps/:cnpj',
      name: 'Maps',
      component: Maps,
      props: true
    }
  ]
});

Vue.use(Router);

export default router;