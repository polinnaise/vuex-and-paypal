import Vue from 'vue'
import Vuex from 'vuex'
import A from './assets/a.jpg'
import A4 from './assets/a4.jpg'
import M from './assets/m.jpeg'
import T from './assets/t.jpg'
import B from './assets/b.jpeg'
import K from './assets/k.jpg'

Vue.use(Vuex);

export default new Vuex.Store({
  // state is the same as what would typically go inside of the data object when using Vue without Vuex.
  state: {
    forSale: [
        {
            invId: 1,
            name: 'Ancient Egyptian Smell Kit',
            price: 120,
            image: A
        },
        {
            invId: 2,
            name: 'Mummy Kit',
            price: 130,
            image: M
        },
        {
            invId: 3,
            name: 'Temple Kit',
            price: 150,
            image: T
        },
        {
            invId: 4,
            name: 'Aphrodisiac Kit',
            price: 130,
            image: A4
        },
        {
            invId: 5,
            name: 'Kyphi Kit',
            price: 120,
            image: K
        },
        {
            invId: 6,
            name: 'Botanical Kit',
            price: 70,
            image: B
        }
    ],
    inCart: []
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
})