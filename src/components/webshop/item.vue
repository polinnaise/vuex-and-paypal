<template>
<div class="Item"> 
    <div class="image">
           <img :src=item.image>
           <p class="item-name">{{item.name}}</p>
           <p class="item-price">${{item.price}}</p>
       </div>
 <div id="ItemAddButton">
               <button @click="addToCart(item)">Add To Cart</button>
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
                if(this.size !== '') {
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
    }
</script>

<style>

.img-what {
    width:50%;
    margin-top:20px;
}
.Item {
    padding: 30px;
}

.item-name {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    padding: 10px;
    color:white;
}

h1 {
    font-size: 20px;
}

.router {
    text-decoration: none;
    color: black;
}

img {
    width:250px;
    height:300px;
}

</style>