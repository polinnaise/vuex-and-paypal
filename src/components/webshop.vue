<template>
  <div>
    <div class="header">
      <h1>The Boot Store</h1>
 
      <shopping-cart :cart="shoppingCart"></shopping-cart>
    </div>
 
    <section class="items-container">
    <item v-for="product in products"
      :key="product.key"
      :item="product"></item>
    </section>

  </div>
</template>

<script>
import Item from './item.vue';
import ShoppingCart from './shoppingCart.vue'

export default {
  components: {
    ShoppingCart,
    Item
  },
  computed: {
      shoppingCart() {
          return this.$store.state.cart
      },
      products() {
          return this.$store.state.items
      },
      totalAmount() {
          return this.$store.getters.total
      }
  }
}
</script>
