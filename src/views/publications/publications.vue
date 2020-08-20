<template>
<div class="text">
<h4>Publications</h4>
<div class="container">
<router-link 
            to="/publications/"
            class="router">
            <img src="./lila.png">
</router-link>
<router-link 
            to="/publications/"
            class="router">
            <img src="./b.png">
</router-link>
<router-link 
            to="/publications/"
            class="router">
            <img src="./w.png">
</router-link>
<router-link 
            to="/publications/"
            class="router">
            <img src="./w.png">
</router-link>  
</div>
</div>
</template>

<style scoped>
.container {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    margin-left: 15%;
}

a {
    margin-right: 20px;
    margin-top: 20px;
}

img {
    width: 300px !important;
    height: 400px;
    margin-right: 20%;
}
</style>