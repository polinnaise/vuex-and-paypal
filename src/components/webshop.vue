<template>
  <div>
    <shopping-cart :cart="ShoppingCart" id="cart"></shopping-cart>
    <div class="container">
     <div class="row">
      <Item
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
    </div>
    </div>
  </div>
</template>

<script>
import Item from '../views/webshop/item.vue';
import ShoppingCart from '../views/webshop/ShoppingCart.vue';
export default {
  name: 'app',
  computed: {
    forSale() { return this.$store.getters.forSale; },
  },
  components: {
    Item,
    ShoppingCart,
  },
};
</script>
