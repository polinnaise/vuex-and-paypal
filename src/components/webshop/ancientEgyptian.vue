<template>
<div class="text">
  <ol style="padding-inline-start:unset; display: inline-block;">
            <router-link to="/webshop" style="display: inline-block;margin: 0 5px;">SMELL KITS </router-link>
            <li style="display: inline-block;margin: 0 5px;">/</li>
            <li style="display: inline-block;margin: 0 5px;"> ANCIENT EGYPTIAN KIT</li>
  </ol>
  <div class="container"> 
  <div>
    <img src="./j1.jpg">
  </div>  
  <div class="item-text"> 
    <h4>Ancient Egyptian Smell Kit</h4>
    <p class="intro">
      The Ancient Egyptian Smell Kit is based on my PhD research on the sense of smell in ancient
      Egypt and was developed as an educational tool to bring students of Egyptology and the general
      public closer to the ancient Egyptian culture through their nose. The kit includes six of my scent
      reconstructions and a detailed description of the significance of each scent for the ancient
      Egyptian culture. The Ancient Egyptian Smell Kit is a great way to start your olfactory journey
      through ancient Egypt. If this is your first kit and you want to get the most comprehensive one,
      this is the one I would recommend. Content: 6 scents, article
    </p>
    <div class="button2">
    <p><strong class="price-single">120 €</strong><span> + Shipping cost</span></p>
    <br>
  <p><button @click="addToCart(item)">Add to Cart</button></p>
    </div>
  </div>
  <ul>
    <h4>Scents</h4>
    <li>MENDESIAN</li>
    <li>The Mendesian was a luxurious perfume that the entire ancient world longed for in classical
    antiquity. It was not only a fragrance in a bottle – it was the olfactory emblem of ancient Egypt.</li>
    <li>KYPHI</li>
    <li>Kyphi in Greek or kAp.t in Egyptian is a solid ancient Egyptian perfume. It is one of the first
    documented perfume recipes in the world, and one of the few surviving perfume recipe from
    ancient Egypt.</li>
    <li>FLOWERS AT THE POND</li>
    <li>The smellscape of lovemaking and sexuality in ancient Egypt.</li>
    <li>GARDENS</li>
    <li>The scent of all the plants growing in orchards and vegetable gardens in ancient Egypt.</li>
    <li>FESTIVALS</li>
    <li>The smellscape of ancient Egyptian festivals and holy days.</li>
    <li>MUMMIFICATION</li>
    <li>The smellscape of mummification including the fragrant substances used to embalm the dead,
    the scent of coffins and mummy garlands.</li>
  </ul>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  display: inline-block;
}

img {
  float:left;
  width:50%;
  padding:20px;
}

span {
  color: gray;
  font-size: 18px;
}
.price-single {
  font-weight: bolder;
  color: black;
  font-size: 22px;
}
 
button {
   width: 250px;
}
.button2 {
  float:right;
  margin-right: 20%;
  margin-bottom: 30px;
}
h4 {
  text-transform: uppercase;
  border-bottom: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  text-align: left;
  position: unset;
  display: unset;
}
li{
  text-transform: none;
}
a {
  color: gray;
  text-decoration: none;
}
</style>
