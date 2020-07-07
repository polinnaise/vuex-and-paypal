import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router";
import Home from "./components/home";
import Bio from "./components/bio";
import Mendesian from "./components/mendesian";
import Mummification from "./components/mummification";
import Conferences from "./components/conferences";
import InvitedLectures from "./components/invited_lectures";

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
      path: '/exhibitions/mendesian',
      name: 'Mendesian',
      component: Mendesian
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
      name: 'Bio',
      component: Bio
    },
    {
      path: '/workshops',
      name: 'Bio',
      component: Bio
    },
    {
      path: '/smellkits/',
      name: 'Bio',
      component: Bio
    },
    {
      path: '/media/',
      name: 'Bio',
      component: Bio
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')