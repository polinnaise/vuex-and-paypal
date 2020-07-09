<template>
    <div class="basket">
        <p><img src="./basket.png">{{cart.length}}</p>
    </div>
</template>

<script>
export default {
    name: 'shopping-cart',
    components: {},
    props: ['cart', 'total'],
    computed: {
    }
}
</script>

<style>
p {
    margin: 0;
}
img {
    width: 20%;
}
.basket {
    width: 20%;
    float: right;
}
.image {
    position: relative;
}
</style>