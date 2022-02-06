import Vue from 'vue'
import Vuex from 'vuex'
import A from './assets/A.png'
import B from './assets/B.png'
import C from './assets/C.png'

Vue.use(Vuex);

export default new Vuex.Store({
  // state is the same as what would typically go inside of the data object when using Vue without Vuex.
  state: {
    forSale: [
        {
            invId: 1,
            name: 'White Beauty',
            price: 50,
            image: A
        },
        {
            invId: 2,
            name: 'Sunshine',
            price: 40,
            image: B
        },
        {
            invId: 3,
            name: 'Tenderness',
            price: 30,
            image: C
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