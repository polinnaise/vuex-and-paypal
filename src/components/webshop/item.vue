<template>
<div class="Item"> 
  <div class="card">
  <img src="./James.jpg" class="img-what">
   <router-link 
            to="/webshop/ancient_egyptian"
            class="router">
            <h1>Ancient Egyptian Smell Kit</h1>
	</router-link>
  <p class="price">120€</p>
  <p><button @click="addToCart(item)">Add to Cart</button></p>
</div>
<div class="card">
  <img src="./James.jpg" class="img-what">
   <router-link 
            to="/webshop/ancient_egyptian"
            class="router">
            <h1>Mummy Kit</h1>
	</router-link>
  <p class="price">130€</p>
  <p><button @click="addToCart(item)">Add to Cart</button></p>
</div>
<div class="card">
  <img src="./James.jpg" class="img-what">
   <router-link 
            to="/webshop/ancient_egyptian"
            class="router">
            <h1>Temple Kit</h1>
	</router-link>
  <p class="price">150€</p>
  <p><button @click="addToCart(item)">Add to Cart</button></p>
</div>
</div>
</template>

<script>

    export default {
        name: 'item',
        props: ['item'],
        data() {
            return {
                size: ''
            }
        },
        methods: {
            addToCart(item) {
                    this.$store.commit({
                        type: 'addToCart',
                        id: item.id,
                        shoe: item.name,
                        size: this.size,
                        price: item.price
                    })
            }
        }
    }
</script>

<style>

.img-what {
    width:20%;
}
.Item {
    width: 50%;
    padding: 10px;
}

.item-name {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    padding: 10px;
}

.router {
    text-decoration: none;
}

</style>