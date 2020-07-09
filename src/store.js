import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  // state is the same as what would typically go inside of the data object when using Vue without Vuex.
  state: {
    items: [
        {
            id: 1,
            name: 'Ancient Egyptian Smell Kit',
            sizes: [1, 2, 3, 4, 5],
            price: 120
        },
        {
            id: 2,
            name: 'Mummy Kit',
            sizes: [1, 2, 3, 4, 5],
            price: 100
        },
        {
            id: 3,
            name: 'Temple Kit',
            sizes: [1, 2, 3, 4, 5],
            price: 100
        },
        {
            id: 4,
            name: 'Aphrodisiac Kit',
            sizes: [1, 2, 3, 4, 5],
            price: 100
        },
        {
            id: 5,
            name: 'Kyphi Kit',
            sizes: [1, 2, 3, 4, 5],
            price: 100
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