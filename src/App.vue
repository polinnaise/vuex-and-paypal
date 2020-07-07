<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style src="./css//app.css"></style>
