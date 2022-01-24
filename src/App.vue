<template>
  <div id="app">
    <webshop></webshop>
    <router-view/>
  </div>
</template>

<script>
import Webshop from './components/webshop.vue'

export default {
  name: 'App',
  components: {
    Webshop
  }
}
</script>

<style src="./css//app.css"></style>
