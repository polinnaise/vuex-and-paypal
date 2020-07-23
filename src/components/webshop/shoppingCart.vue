<template>
    <div class="basket">
        <p>{{cart.length}}</p>
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
.basket {
    width: 20%;
    float: right;
}
.image {
    position: relative;
}
</style>