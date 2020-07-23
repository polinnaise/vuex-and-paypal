import Vue from 'vue'
import Vuex from 'vuex'
import A from './components/webshop/a.jpg'
import A4 from './components/webshop/a4.jpg'
import M from './components/webshop/m.jpeg'
import T from './components/webshop/t.jpg'
import B from './components/webshop/b.jpeg'
import K from './components/webshop/k.jpg'

Vue.use(Vuex);

export default new Vuex.Store({
  // state is the same as what would typically go inside of the data object when using Vue without Vuex.
  state: {
    items: [
        {
            id: 1,
            name: 'Ancient Egyptian Smell Kit',
            price: 120,
            image: A
        },
        {
            id: 2,
            name: 'Mummy Kit',
            price: 130,
            image: M
        },
        {
            id: 3,
            name: 'Temple Kit',
            price: 150,
            image: T
        },
        {
            id: 4,
            name: 'Aphrodisiac Kit',
            price: 130,
            image: A4
        },
        {
            id: 5,
            name: 'Kyphi Kit',
            price: 120,
            image: K
        },
        {
            id: 6,
            name: 'Botanical Kit',
            price: 70,
            image: B
        }
    ],
    cart: []
  },
  // getters are Vuex's equivalent to computed properties in Vue.
  // functions here will always contain state as a parameter
  getters: {
      total: state => {
            if(state.cart.length > 0) {
                return state.cart.map(item => item.price).reduce((total, amount) => total + amount);
            } else {
                return 0;
            }
      }
  },
  // mutations are essentially functions that update state in some way.
  // You can think of these as kind of being Vuex's equivalent to Vue's methods.
    mutations: {
        addToCart(state, payload) {
            return state.cart.push(payload);
        }
    },
  // actions are effectively the functions that get called by your components in order to trigger a mutation.
  actions: {
      // add(context) {
      //     context.commit('add')
      // }
  }
})