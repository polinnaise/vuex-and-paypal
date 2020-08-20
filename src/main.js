import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadScript from 'vue-plugin-load-script';
import Vuex from 'vuex'
import Router from "vue-router";
import Home from "./views/d/home";
import Bio from "./views/bio";
import Mendesian from "./views/bio/mendesian.vue";
import Publications from "./views/publications/publications";
import MendesianExi from "./views/exhibitions/exi-mendesian.vue";
import MummificationExi from "./views/exhibitions/exi-mummification.vue";
import Conferences from "./views/lectures/conferences";
import Invited from "./views/lectures/invited_lectures";
import Lecture from "./views/lectures/lecture_series";
import OClasses from "./views/lectures/online_classes";
import Webshop from "./views/webshop";
import Details from "./views/details";
import Contact from "./views/contact";
import store from './store';
Vue.use(LoadScript);
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
      path: '/bio/mendesian',
      name: 'Mendesian',
      component: Mendesian
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
      path: '/publications/',
      name: 'Publications',
      component: Publications
    },
    {
      path: '/exhibitions/mendesian',
      name: 'Mendesian',
      component: MendesianExi
    },
    {
      path: '/exhibitions/mummification',
      name: 'Mummification',
      component: MummificationExi
    },
    {
      path: '/lectures/conferences',
      name: 'Conferences',
      component: Conferences
    },
    {
      path: '/lectures/invited_lectures',
      name: 'Invited Lectures',
      component: Invited
    },
    {
      path: '/lectures/lecture_series',
      name: 'Lecture Series',
      component: Lecture
    },
    {
      path: '/lectures/online_classes',
      name: 'Online Classes',
      component: OClasses
    },
    {
      path: '/contact/',
      name: 'Contact',
      component: Contact
    },
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')