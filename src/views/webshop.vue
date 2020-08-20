<template>
  <div>
    <div>
    <shopping-cart :cart="ShoppingCart"></shopping-cart>
    <h4>Smell Kits</h4>
    </div>
 
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
</template>

<script>
import Item from './webshop/item.vue';
import ShoppingCart from './webshop/ShoppingCart.vue';
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
