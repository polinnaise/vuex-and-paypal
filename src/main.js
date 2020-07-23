import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Router from "vue-router";
import Home from "./components/d/home";
import Bio from "./components/main/bio/bio";
import Publications from "./components/publications/publications";
import Cones from "./components/main/workshops/cones";
import Garden from "./components/main/workshops/garden";
import Kyphi from "./components/main/workshops/kyphi";
import Love from "./components/main/workshops/love";
import Mummy from "./components/main/workshops/mummy";
import Online from "./components/main/workshops/online";
import Temple from "./components/main/workshops/temple";
import Webshop from "./components/main/webshop";
import Details from "./components/main/details";
import Contact from "./components/main/contact";
import store from './store';

Vue.use(Vuex)
Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bio/',
      name: 'Bio',
      component: Bio
    },
    {
      path: '/webshop',
      name: 'Webshop',
      component: Webshop
    },
    {
      path: '/webshop/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/workshop/kyphi',
      name: 'Kyphi',
      component: Kyphi
    },
    {
      path: '/workshop/mummification',
      name: 'Mummy',
      component: Mummy
    }
    , {
      path: '/workshop/lovemaking',
      name: 'Love',
      component: Love
    },
    {
      path: '/workshop/garden_scent',
      name: 'Garden',
      component: Garden
    },
    {
      path: '/workshop/temple_smell',
      name: 'Temple',
      component: Temple
    },
    {
      path: '/workshop/unguent_cones',
      name: 'Cones',
      component: Cones
    },
    {
      path: '/workshop/online_workshops',
      name: 'Online',
      component: Online
    },
    {
      path: '/publications/',
      name: 'Publications',
      component: Publications
    },
    {
      path: '/contact/',
      name: 'Contact',
      component: Contact
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')