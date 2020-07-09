import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Router from "vue-router";
import Home from "./components/main/home";
import Bio from "./components/main/bio";
import Publications from "./components/main/publications";
import Webshop from "./components/main/webshop";
import Ancient from "./components/webshop/ancientEgyptian";
import Mummification from "./components/main/mummification";
import Conferences from "./components/main/conferences";
import InvitedLectures from "./components/main/invited_lectures";
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
      path: '/webshop/ancient_egyptian',
      name: 'Ancient Egyptian',
      component: Ancient
    },
    {
      path: '/exhibitions/mummification',
      name: 'Mummification',
      component: Mummification
    },
    {
      path: '/lectures/conferences',
      name: 'Conferences',
      component: Conferences
    },
    {path: '/lectures/invited_lectures',
      name: 'Invited Lectures',
      component: InvitedLectures
    },
    {
      path: '/publications/',
      name: 'Publications',
      component: Publications
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')